## SWBATs

- [x] Explain in general how the internet works
  - `traceroute google.com`
- [x] Describe the client-server model and the request-response lifecycle
- [x] Utilize Postman to make a basic GET request
  - https://swapi.co/api/people/?search=r2
  - http://placekitten.com/200/300
  - https://stackoverflow.com/questions/3639656/activerecord-or-query
- [x] Utilize the browser to make a request and see a response
- [x] Practice making a web server with Rack
  - "hello world!" with no routing
  - Basic routing

## Resources

### How the Internet Works
 - https://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper.htm
 - https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work
 
### Client-Server Model
 ![diagram of client and server](https://www.httpdebugger.com/images/article/http_protocol/http-session.jpg)
 - Clients we accessed:
   - Google Chrome (web browser)
   - [Postman](https://www.getpostman.com/)
   - cURL (command-line tool for making HTTP requests; we specifically did `curl https://swapi.co/api/people/?search=r2`
 - Servers we accessed:
   - Star Wars API
   - PlaceKitten
   - StackOverflow
   - Rack (on our own localhost)
   
### Postman
What does it do?
 - Provides a nice GUI for playing around with requests and responses
 
How is that different from just using Google Chrome?
 - It's not significantly different from Chrome for now, when we are just doing GET requests.  In the future it will be very helpful for generating POST and other requests that usually come from clicking a button rather than just entering a URL
 - However it is nice that Postman doesn't try to get a favicon, which Chrome does.  That makes debugging a little easier.
 
How does it fit into the development workflow?
 - Use it to help with debugging and testing.  It's a nice easy way to figure out what params you need when using an external API, and it can be better than Chrome for testing your own local server.

### Parts of a Request

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview#Requests)

Method (AKA "verb")

- So far, we have only done GET, but later we will also do POST and others
- In Postman you can change this with the drop-down on the left

Path

- Something like http://placekitten.com/200/300

Headers

- We haven't used this directly yet, but we noticed that the Star Wars API returned JSON when the request was made by Postman and HTML when the request was made by Chrome.  That's because Chrome set a key-value pair in the headers with key `Accept` and value `text/html`.  We can do the same thing in Postman if we wanted to (e.g. if we wanted to debug the HTML version specifically).

Body
- We haven't used this yet, but eventually it will be used with methods other than GET

### Parts of a Response

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview#Responses)

Status Code
 - There are a lot of them, but mostly you need to know:
   - 200 OK: The request was successful
   - 400s: The client made a mistake (e.g. by trying to access an invalid path)
   - 500s: The server made a mistake (e.g. when I divided by 0 in the Rack code)
 - Here are some fun cats representing them: https://http.cat/

Headers
 - Additional information that tells the client what to do with the body
 - For example, `Content-Type` will be something like `text/html` for a typical website, `application/json` for a query to the Star Wars API, or `image/jpeg` for a query to PlaceKitten
 - Our Rack server just returned an empty hash, which is fine for now

Body
 - Whatever the main response is.  For most websites this is HTML, although it can also be JSON or some other type of text.
 - It just arrives as a bunch of characters, and our client figures out what to do with them. 
   - If you just use cURL, all of the text will just print out in the terminal, with no formatting
   - If you use Postman, the default "Pretty" view gives you some syntax highlighting and some indentation (or you can switch away from the "Pretty" view to the "Raw" view or the "Preview" view)
   - If you use Chrome, it actually renders the HTML as headers, paragraphs, lists, etc.
 
 
