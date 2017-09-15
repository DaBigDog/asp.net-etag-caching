using eTag_Caching.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace eTag_Caching.DataAccess
{
    public class Repository
    {

        private static readonly string _statesFilePath = @"~/App_Data/states.json";
        private static readonly string _adminsFilePath = @"~/App_Data/admins.json";
        private static readonly string _campaignCodesFilePath = @"~/App_Data/campaign.json";

        public static List<StateModel> GetStates()
        {
            return Read<List<StateModel>>(_statesFilePath);
        }

        public static void SaveStates(List<StateModel> states)
        {
            Write(states, _statesFilePath);
        }


        

        public static List<AdminModel> GetAdmins()
        {
            return Read<List<AdminModel>>(_adminsFilePath);
        }

        public static void SaveAdmins(List<AdminModel> states)
        {
            Write(states, _adminsFilePath);
        }

        public static List<CampaignCodeModel> GetCampaignCodes()
        {
            return Read<List<CampaignCodeModel>>(_campaignCodesFilePath);
        }

        public static void SaveCampaignCodes(List<CampaignCodeModel> campaignCodes)
        {
            Write(campaignCodes, _campaignCodesFilePath);
        }


        private static T Read<T>(string relativeFilePath)
        {
            return JsonConvert.DeserializeObject<T>(File.ReadAllText(HttpContext.Current.Server.MapPath(relativeFilePath)));
        }
        private static void Write(object model, string filePath)
        {
            File.WriteAllText(HttpContext.Current.Server.MapPath(filePath), JsonConvert.SerializeObject(model));
        }
    }
}