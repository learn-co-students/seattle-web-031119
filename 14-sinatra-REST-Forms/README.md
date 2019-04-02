# Goals

- [x] How and why we use the MVC Pattern
  - Model - methods, classes, database interaction.
  - View - what the client/user sees. HTML/CSS. erb files.
  - Controller - communicates with those two things, Model/View based on what the viewer wants.
  - (JS/CSS) will be in a different folder but as asset to the view.

- [x] How Sinatra serves data in response to web requests

- [] How CRUD actions serves data in response to web requests
- [] How to make an HMTL Form

## Deliverables
- [] What routes are necessary?


- REST
- REpresentation State of Transfer

- http methods linked to RESTful Routes;

- CRUD Operations for out table :
- [x] view info on books that are available - GET
- [x] view info on an individual book - GET
  - take a look at the id
  - display book information
- [x] create a new book - POST
  - post - '\\books'
  - redirect
  - author
  - title
  - snippet
- [x] update an existing book
  - similar to create
  - take in some information
    - snippet
  - Get id in parameters
  - display a Form
  - PATCH/ edit information about our book.
- [x] deleting an existing book

- Params, Parameters;

##Questions:
- Why rack, rackup - ruby hack
- Socket programming : questions;

##Notes :
- can use symbols vs string in indifferent hashes - hash with indifferent access.


patch '/books/:id' do
  @book = Book.find(params[:id])
  @book.update(title: params[:title], author: params[:author], snippet: params[:snippet])
  binding.pry
  redirect to "/books/#{@book.id}"
end

delete '/books/:id' do
  @book = Book.find_by_id(params[:id])
  @book.delete
  redirect to "/books"
end
