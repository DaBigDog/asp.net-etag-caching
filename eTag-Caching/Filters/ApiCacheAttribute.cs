using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net.Http;
using System.Web.Http.Filters;

namespace eTag_Caching.Caching
{
 
    public class ETagCacheAttribute : ActionFilterAttribute
    {
        public CacheKey CacheKey { get; set; }
        public int ClientDuration { get; set; }

        public override void OnActionExecuting(System.Web.Http.Controllers.HttpActionContext actionContext)
        {
            if (actionContext.Request.Method == HttpMethod.Get && this.CacheKey != CacheKey.NO_CACHE)
            {
                Models.CacheContainer c = CacheManager.Instance.Retreive(this.CacheKey);
                if (c != null && c.ETag != null)
                {
                    if (actionContext.Request.Headers.IfNoneMatch != null)
                    {

                        if (actionContext.Request.Headers.IfNoneMatch.Any(x => x.Tag.Contains(c.ETag)))
                        {
                            // user has already received data response so send back as 304 and client will use cache...
                            actionContext.Response = actionContext.Request.CreateResponse(System.Net.HttpStatusCode.NotModified);
                            SetEtag(actionContext.Response, c.ETag);
                            return;
                        }

                    }

                    // user did not send ETag... maybe new user so set the content and ETag and send back...
                    actionContext.Response = actionContext.Request.CreateResponse(
                        System.Net.HttpStatusCode.OK,
                        c.Data,
                        actionContext.ControllerContext.Configuration.Formatters.JsonFormatter
                    );
                    SetEtag(actionContext.Response, c.ETag);
                    // since this is users first time receiving this response... cache it in browser
                    ApplyCacheHeaders(actionContext.Response, TimeSpan.FromSeconds(this.ClientDuration));
                    return;

                }
            }
        }

        public override void OnActionExecuted(HttpActionExecutedContext actionExecutedContext)
        {
            if (actionExecutedContext.Request.Method == HttpMethod.Get && actionExecutedContext.Response.IsSuccessStatusCode)
            {
                if (this.CacheKey != CacheKey.NO_CACHE)
                {
                    string eTag = CreateEtag(actionExecutedContext, this.CacheKey.ToString());
                    SetEtag(actionExecutedContext.Response, eTag);

                    Models.CacheContainer c = CacheManager.Instance.Retreive(this.CacheKey);
                    if (null == c) c = new Models.CacheContainer();
                    c.ETag = eTag;
                    c.Data = GetResponseContent(actionExecutedContext);

                    CacheManager.Instance.Store(this.CacheKey, c);
                }
                ApplyCacheHeaders(actionExecutedContext.Response, TimeSpan.FromSeconds(this.ClientDuration));
            }
        }

        private object GetResponseContent(HttpActionExecutedContext actionExecutedContext)
        {
            object value = null;
            var objectContent = actionExecutedContext.Response.Content as ObjectContent;
            if (objectContent != null)
            {
                //var type = objectContent.ObjectType; --type of the returned object
                value = objectContent.Value; // returned value
            }
            return value;
        }


        protected virtual string CreateEtag(HttpActionExecutedContext actionExecutedContext, string cachekey)
        {
            return Guid.NewGuid().ToString();
        }

        private static void SetEtag(System.Net.Http.HttpResponseMessage message, string etag)
        {
            if (etag != null)
            {
                var eTag = new System.Net.Http.Headers.EntityTagHeaderValue(@"""" + etag.Replace("\"", string.Empty) + @"""");
                message.Headers.ETag = eTag;
            }
        }

        protected virtual void ApplyCacheHeaders(System.Net.Http.HttpResponseMessage response, TimeSpan cacheTime)
        {
            if (cacheTime > TimeSpan.Zero)
            {
                response.Headers.CacheControl = new System.Net.Http.Headers.CacheControlHeaderValue
                {
                    MaxAge = cacheTime
                };
            }
            else
            {
                response.Headers.CacheControl = new System.Net.Http.Headers.CacheControlHeaderValue
                {
                    NoCache = true
                    //, NoStore = true  <-- overrides Etag and always forces server request
                };
                response.Headers.Add("Pragma", "no-cache");
            }

            response.Headers.CacheControl.MustRevalidate = true;
            response.Headers.CacheControl.Private = true;
        }

    }

}