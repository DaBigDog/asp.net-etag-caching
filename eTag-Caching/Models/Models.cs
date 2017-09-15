using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace eTag_Caching.Models
{
    public class StateModel
    {
        public int Id { get; set; }
        public string StateCode { get; set; }
        public string StateName { get; set; }
    }

    public class AdminModel
    {
        public int AdministratorId { get; set; }
        public string Administrator { get; set; }
        public bool Active { get; set; }
    }

    public class CampaignCodeModel
    {
        public int CampaignCodeId { get; set; }
        public string CampaignCode { get; set; }
        public bool Active { get; set; }
    }
}