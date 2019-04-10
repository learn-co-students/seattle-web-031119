## SWBATs

### High-level development practices
 - [x] Work within a nested file structure for multiple models
    - Conventional view names (index/show/new/edit)
    - Multiple controllers
 - [x] Test controller actions with Postman
    - Manual redirect
 - [x] Know which questions to ask when given a new user story
    1. What new model(s) do I need?
       - New class?
       - New migration? (i.e. does the schema need to change?)
       - Associations?
       - Seeds?
    2. What route(s) do I need?
    3. What controller action(s) do I need?
       - In Sinatra, this means the code directly below the route, but in Rails it will be a separate file
    4. What view(s) do I need?

### ActiveRecord associations
 - [x] Add a new ActiveRecord model and associate it with an existing model
 - [x] Display information about an associated model
 - [x] Allow the user to make a new instance of an ActiveRecord model that belongs to another model

## Deliverables for today's lecture
- [x] **As a site visitor, I should be able to view a single author.  I should be able to see the author's name and count of books. (For the purpose of this project, an author has many books and a book belongs to one author.)**
  1. Models?
     - Author class (inherits from ActiveRecord::Base)
     - New migration to create author table
     - New migration to modify the book table so author is an association instead of a string
     - Author has_many books, Book belongs_to author
     - Seeding needs to change so author is an object not just a string
  2. Routes?
     - GET '/authors/:id'
  3. Controller actions?
     - `@author = Author.find(params[:id])`
     - `erb :'authors/show'`
  4. Views?
     - views/authors/show.erb
- [x] **As a site visitor, I should be able to see a list of authors**
  1. Models?
     - No, we already have the necessary model (Author)
  2. Routes?
     - GET '/authors'
  3. Controller actions?
     - `@authors = Author.all`
     - `erb :'authors/index'`
  4. Views?
     - views/authors/index
 - [x] **As a site visitor, I should be able to create a new book and associate it with an existing author. (Note: after the lecture I added a drop-down for doing this.  In lecture we just ended up with the user entering an author ID, which isn't a very nice user experience.)**
   1. Models?
      - No, we already have the necessary models (Book and Author)
   2. Routes?
      - No, we already have the necessary routes (GET '/books/new' and POST '/books')
   3. Controller actions?
      - Add `@authors = Author.all` in GET '/books/new' (so we have a list to select from)
      - POST '/books' can stay the same because we're using the whole params hash like before (even though the params hash will be different now)
   4. Views?
      - Edit views/books/new.erb so the `author` field turns into an `author_id` field
      - (After the lecture ended, I also changed it so there was a drop-down to choose the `author_id`, rather than having the user enter it manually)

 ## Resources
 1. Writing a migration to rename column and change column type: http://codkal.com/how-rename-database-column-rails-5-migration/
 2. HTML form elements: https://www.w3schools.com/html/html_form_elements.asp

 If you want a diff view of just the things I changed during the course of the lecture, you can find it at https://github.com/learn-co-students/seattle-web-031119/commit/617909f920447661439340c327d73e374a1981a6
