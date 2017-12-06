using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using eTag_Caching.Models;

namespace eTag_Caching.Controllers
{
    public class CampaignCodeController : ApiController
    {
        // GET: api/Campaign
        public IEnumerable<CampaignCodeModel> Get()
        {
            return DataAccess.Repository.GetCampaignCodes();
        }

        // GET: api/Campaign/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Campaign
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Campaign/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Campaign/5
        public void Delete(int id)
        {
        }
    }
}
