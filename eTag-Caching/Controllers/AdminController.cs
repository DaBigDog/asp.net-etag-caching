using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using eTag_Caching.Models;

namespace eTag_Caching.Controllers
{
    public class AdminController : ApiController
    {
        // GET: api/Admin
        public IEnumerable<AdminModel> Get()
        {
            return DataAccess.Repository.GetAdmins();
        }

        // GET: api/Admin/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Admin
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Admin/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Admin/5
        public void Delete(int id)
        {
        }
    }
}
