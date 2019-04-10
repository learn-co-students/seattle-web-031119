#Forms Review

#SWBATs
- more forms, more params
- building object relationships
  - belong_to relationship/ with author
- collection_select helper
  - Drop_down
  - Selecting from previously created
  - the last piece does not have to do with your table instance.
  - collection_check_box
    - add params return
- Author object reference for forms.
- refactoring repetitive code with before_actions
- Questions : how to access keys.

What operations to change for my CRUD operations:

Do my models need to change?
       - New class?
       - New migration? (i.e. does the schema need to change?)
       - Associations?
       - Seeds?
     Do my routes need to change?
     Do my controller actions need to change?
     Do my views need to change?

- TODO :
  - DataList
-partials



#Deliverables
- We can see select author through book forms
- what do we need to set up in order to connect books to authors


```ruby <ActionController::Parameters {"utf8"=>"✓", "authenticity_token"=>"HN6fSlAq1HvRF8UWUdfwqy4kRRbRq/HFlusSF9Quv3mlAnhJtB7ux2geglWzV9HqJKUBIVTQL16OlUcWID3h8A==", "book"=>{"title"=>"t", "snippet"=>"fg", "author_id"=>"1"}, "commit"=>"Create Book", "controller"=>"books", "action"=>"create"} permitted: false>```
