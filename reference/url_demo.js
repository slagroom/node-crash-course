const url = require('url');

const myUrl = new url.URL('https://mywebsite.com:1234/hello.html?id=100&status=active&foo=bar&foo=baz');

// href: Get the serialized URL
console.log(myUrl.href);

// host: Get the host portion of the URL
console.log(myUrl.host);

// hostname: Get the host name from the host portion of the URL
console.log(myUrl.hostname);

// pathname: Get the path of the URL
console.log(myUrl.pathname);

// search: Get the serialized query parameters
console.log(myUrl.search);

// searchParams: Get the query parameters (allows duplicate keys)
console.log(myUrl.searchParams);
