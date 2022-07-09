- Each document on the Web is named by a Uniform Resource Locator (URL),
which looks something like this:

http://eloquentjavascript.net/13_browser.html
|      |                     |                 |
protocol          server               path

- I registered eloquentjavascript.net to point at the IP address of a machine I control 
 and can thus use that domain name to serve web pages.

- The first part tells us that this URL uses the HTTP protocol (as opposed to,
for example, encrypted HTTP, which would be https://). Then comes the part
that identifies which server we are requesting the document from. Last is a
path string that identifies the specific document (or resource) we are interested
in.

- Machines connected to the Internet get an IP address, which is a number
that can be used to send messages to that machine, and looks something like
149.210.142.219 or 2001:4860:4860::8888. so you can instead register
a domain name for a specific address or set of addresses.

- If you type this URL into your browser’s address bar, the browser will try
to retrieve and display the document at that URL. First, your browser has to
find out what address eloquentjavascript.net refers to. Then, using the HTTP
protocol, it will make a connection to the server at that address and ask for the
resource /13_browser.html. If all goes well, the server sends back a document,
which your browser then displays on your screen.