
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using eTag_Caching.Models;
using eTag_Caching.Caching;

namespace eTag_Caching.Controllers
{
    public class StateController : ApiController
    {
        // GET: api/State
        [ETagCache(CacheKey = CacheKey.STATES, ClientDuration = 60)]
        public IEnumerable<StateModel> Get()
        {
            return DataAccess.Repository.GetStates();
        }

        // GET: api/State/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/State
        public void Post([FromBody]StateModel value)
        {


            // remove from cache when an item is inserted
            CacheManager.Instance.Remove(CacheKey.STATES);
        }

        // PUT: api/State/5
        public StateModel Put(int id, [FromBody]StateModel value)
        {


            // remove from cache when an item is updated
            CacheManager.Instance.Remove(CacheKey.STATES);
            return value;
        }

        // DELETE: api/State/5
        public void Delete(int id)
        {


            // remove from cache when an item is deleted
            CacheManager.Instance.Remove(CacheKey.STATES);
        }
    }
}
