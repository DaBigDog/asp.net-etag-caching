using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Runtime.Caching;
using eTag_Caching.Models;

namespace eTag_Caching.Caching
{
    public sealed class CacheManager
    {

        private CacheManager()
        { }


        private static CacheManager instance;
        public static CacheManager Instance
        {
            get
            {
                if (instance == null)
                {
                    instance = new CacheManager();
                }
                return instance;
            }
        }



        private MemoryCache _cache = new MemoryCache("CacheProvider");

        public void Store(CacheKey key, object obj, string eTag)
        {
            AddToCache(key, new CacheContainer() { Data = obj, ETag = eTag });
        }

        public void Store(CacheKey key, CacheContainer cacheContainer)
        {
            AddToCache(key, cacheContainer);
        }


        public CacheContainer Retreive(CacheKey key)
        {
            return this._cache.Get(key.ToString()) as CacheContainer;
        }

        public CacheContainer Retreive(string eTag)
        {
            CacheContainer c = null;
            foreach (var item in MemoryCache.Default)
            {
                if (null != item.Value && (item.Value as CacheContainer).ETag == eTag)
                {
                    c = (item.Value as CacheContainer);
                }
            }
            return c;
        }

        public string RetreiveETag(CacheKey key)
        {
            string etag = null;
            CacheContainer c = this.Retreive(key);
            if (null != c) etag = c.ETag;
            return etag;
        }



        public void Remove(CacheKey key)
        {
            this.RemoveFromCache(key.ToString());
        }

        public void Remove(string eTag)
        {
            foreach (var item in MemoryCache.Default)
            {
                if (null != item.Value && (item.Value as CacheContainer).ETag == eTag)
                {
                    string key = item.Key;
                    this.RemoveFromCache(key);
                    break;
                }
            }
        }


        public bool KeyExists(CacheKey key)
        {
            return (null != Retreive(key));
        }

        private void RemoveFromCache(string key)
        {
            this._cache.Remove(key);
        }


        private void AddToCache(CacheKey key, CacheContainer cacheContainer)
        {
            _cache.Add(key.ToString(), cacheContainer, DateTime.Now.AddMonths(2));
        }

    }


    public enum CacheKey
    {
        NO_CACHE = 0,

        [System.ComponentModel.Description("States")]
        STATES,

        [System.ComponentModel.Description("Property Types")]
        PROPERTY_TYPES,

        [System.ComponentModel.Description("Source Codes")]
        SOURCE_CODES,

        [System.ComponentModel.Description("Admins")]
        ADMINS,

        [System.ComponentModel.Description("Campaign Codes")]
        CAMPAIGN_CODES,

    };

}