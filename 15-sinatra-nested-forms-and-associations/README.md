## SWBATs

### High-level development practices
 - [] Work within a nested file structure for multiple models
    - Conventional view names (index/show/new/edit)
    - Multiple controllers
 - [] Test controller actions with Postman
    - Manual redirect
 - [] Know which questions to ask when given a new user story
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
 - [] Add a new ActiveRecord model and associate it with an existing model
 - [] Display information about an associated model
 - [] Make a form that allows the user to make a new instance with an association

### Nested forms
 - [] Create a form with nested params hashes

## Deliverables for today's lecture
 - [] As a site visitor, I should be able to see a list of authors
 - [] As a site visitor, I should be able to view a single author.  I should be able to see the author's name and count of books.
 - [] As a site visitor, I should be able to see a list of books. I should be able to click on each book title to see more information about that book, including its author.
 - [] As a site visitor, I should be able to create a new book and associate it with an existing author.
