# Forms Review

## SWBATs
- more forms, more params
- building object relationships
   - has_many through relationship (books have multiple authors and authors have multiple books)
- collection_check_box helper
  - Renders as checkboxes (multiple inputs of type "checkbox")
  - Selecting from previously created objects (authors)
  - Gives a list of all checked values to params
- Author object reference for forms.
- refactoring repetitive code with before_actions
- Questions : how to access keys.

## Deliverables
1. As a user, I can create a new book and select multiple authors with checkboxes
    - This is in the `rails_app_many_to_many` folder

### Questions to Ask for Each Deliverable:
1. Do my models need to change?
    - New class?
       - Yes, we need a new join table class.  Let's call it AuthorsBook (matching the Rails 5 generator)
    - New migration? (i.e. does the schema need to change?)
       - Yes, create a migration to add the join table: `rails g migration create_join_table books authors`
          - If we wanted to be able to have multiple migrations that create join tables, we could give it a more specific name, e.g. `rails g migration create_join_table_books_authors books authors`, which would create a class CreateJoinTableBooksAuthors, whereas the previous example would create just CreateJoinTable
       - We also need a migration to remove the `author_id` column from `books`: `rails g migration remove_author_id_from_books author_id:integer`
    - Associations?
       - Yes, change them so books have many authors and authors have many books (both through authors_books)
    - Seeds?
       - Yes, change them so the author is added to the book's list of authors instead of being set as the single author.  (This is in `adapters/google_books.rb`)
2. Do my routes need to change?
    - No, we already have GET new_book_path and POST /books
3. Do my controller actions need to change?
    - Yes. We'll start with changing `BooksController#book_params` because the params will be different.  Instead of something like {"author_id":1}, we are going to get something like {"author_ids": [1,2]}.  So we need to permit those and use them to attach the right authors.  You can actually do mass assignment of `author_ids` so `BooksController#create` doesn't actually need to change
    - We should also change `BooksController#show` so it gets the list of authors for `show.erb`
4. Do my views need to change?
   - Yes, change the `collection_select` to `collection_check_boxes` (and the "method" is now `:author_ids` instead of `:author_id`) in `new.erb`
   - Also change `show.erb` so it shows the names of all the authors.  Right now it looks kind of weird if you don't select any authors when you create the book, but that's something we would fix with validations (assuming you always want at least one author for each book)
