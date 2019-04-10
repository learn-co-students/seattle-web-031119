# Forms Review

## SWBATs
- more forms, more params
- building object relationships
  - has_many/belongs_to relationship (with author and books, book has only one author)
- collection_select helper
  - Renders as a drop-down (input of type "select")
  - Selecting from previously created objects (authors)
  - The last piece does not have to do with the table instance you are creating (book), it has to do with the collection (authors)
  - Gives a single key-value pair to params
- Author object reference for forms.
- refactoring repetitive code with before_actions
- Questions : how to access keys.

## Deliverables
1. As a user, I can create a new book and select an author from a drop-down

### Questions to Ask
1. Do my models need to change?
    - New class?
      - No, we already have Book and Author classes
    - New migration? (i.e. does the schema need to change?)
      - No
    - Associations?
      - No, we already have has_many/belongs_to
    - Seeds?
      - No
2. Do my routes need to change?
    - No, we already have GET new_book_path and POST /books
3. Do my controller actions need to change?
    - No, although we are going to refactor to use before_actions
4. Do my views need to change?
    - Yes, instead of the user entering an author ID, they need to see a drop-down of authors
