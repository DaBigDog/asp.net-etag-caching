
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
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/State/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/State/5
        public void Delete(int id)
        {
        }
    }
}
