using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace eTag_Caching.Models
{
    public class CacheContainer
    {
        public object Data { get; set; }
        public string ETag { get; set; }

    }
}