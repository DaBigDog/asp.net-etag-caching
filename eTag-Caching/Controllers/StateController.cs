
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

using eTag_Caching.Models;
using eTag_Caching.Caching;

namespace eTag_Caching.Controllers
{
    public class StateController : ApiController
    {
        // GET: api/State
        [ETagCache(CacheKey = CacheKey.STATES, ClientDuration = 60)]
        [ResponseType(typeof(IEnumerable<StateModel>))]
        public IHttpActionResult Get()
        {
            return Ok(DataAccess.Repository.GetStates());
        }


        // GET: api/State/5
        [ResponseType(typeof(StateModel))]
        public IHttpActionResult Get(int id)
        {
            try
            {
                List<StateModel> states = DataAccess.Repository.GetStates();
                StateModel state = states.FirstOrDefault(x => x.Id == id);
                if (null != state)
                {
                    return Ok(state);
                }
                else
                {
                    return NotFound();
                }
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        // POST: api/State
        [ResponseType(typeof(StateModel))]
        public IHttpActionResult Post([FromBody]StateModel value)
        {


            // remove from cache when an item is inserted
            CacheManager.Instance.Remove(CacheKey.STATES);
            return Ok();
        }

        // PUT: api/State/5
        [ResponseType(typeof(StateModel))]
        public IHttpActionResult Put(int id, [FromBody]StateModel value)
        {
            try
            {
                List<StateModel> states = DataAccess.Repository.GetStates();
                StateModel state = states.FirstOrDefault(x => x.Id == id);
                if (null != state)
                {
                    state.StateCode = value.StateCode;
                    state.StateName = value.StateName;

                    DataAccess.Repository.SaveStates(states);
                    // remove from cache when an item is updated
                    CacheManager.Instance.Remove(CacheKey.STATES);

                    return Ok(state);
                }
                else
                {
                    return NotFound();
                }
            }
            catch(Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        // DELETE: api/State/5
        [ResponseType(typeof(Boolean))]
        public IHttpActionResult Delete(int id)
        {
            bool isSuccessful = true;

            // remove from cache when an item is deleted
            CacheManager.Instance.Remove(CacheKey.STATES);
            return Ok(isSuccessful);
        }
    }
}
