# asp.net-etag-caching
Cache response using eTags

Run web app in debug mode and inspect network traffic for the /api/state request. On first load you will see request headers similar to:

Headers:
Request URL:http://localhost:49299/api/state
Request Method:GET
**Status Code:200 OK**

and response headers will be similar to:

Response Headers:
Cache-Control:must-revalidate, max-age=60, private
**ETag:"a10c7f23-0d6b-4c5c-8317-bbd9c0a9ab5d"**

A unique E-Tag was sent to the browser and it will be used to validate the data on each subsequent request. Now, refresh the page after one minute and inspect the headers:

Headers:
Request URL:http://localhost:49299/api/state
Request Method:GET
**Status Code:304 Not Modified**

Request Headers:
**If-None-Match:"a10c7f23-0d6b-4c5c-8317-bbd9c0a9ab5d"**

Response Headers:
Cache-Control:no-cache
Date:Wed, 06 Dec 2017 03:55:47 GMT
ETag:"a10c7f23-0d6b-4c5c-8317-bbd9c0a9ab5d"
Expires:-1
Pragma:no-cache

A 304 status code response is returned because the data has not changed and the browser can use what's in it's cache. The is because the If-None-Match header sent to the server matches the unique identifier (e-tag) stored in the server cache.

Edit a state and save the data. Now refresh the page and inspect the headers. You will notice changes:

Headers:
Request URL:http://localhost:49299/api/state
Request Method:GET
**Status Code:200 OK**

Request Headers:
Cache-Control:must-revalidate, max-age=60, private
ETag:"b8000d45-8052-42d7-996b-3d3c93e22fae" <--- new E-Tag value after server data changed

Response Headers:
**If-None-Match:"a10c7f23-0d6b-4c5c-8317-bbd9c0a9ab5d"**  <--- no match found on the server

A 200 status code is returned because the unique identifier (e-tag) sent in the If-None-Match header does not match the one stored in the server cache. The data is sent back to the client with a new E-Tag (b8000d45-8052-42d7-996b-3d3c93e22fae). Reload the page again after a minute and you will see headers telling the browser to use the cached response (304 status) because the E-Tag matches:

Headers:
Request URL:http://localhost:49299/api/state
Request Method:GET
**Status Code:304 Not Modified**

Request Headers:
**If-None-Match:"b8000d45-8052-42d7-996b-3d3c93e22fae"** <--- matches E-Tag on server (below)

Response Headers:
Cache-Control:no-cache
**ETag:"b8000d45-8052-42d7-996b-3d3c93e22fae"**
Expires:-1
Pragma:no-cache

You will notice in some responses the server is allowing the browser to cache the data for one minute but the browser must send the E-Tag to revalidate the browser cache after one minute:

Cache-Control:must-revalidate, max-age=60, private

