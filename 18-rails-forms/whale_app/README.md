# SWBATS
- Forms
- Rails Helpers
  - form_tag
    - path for route page
    - method for different than post
    - All the helper methods are tags
    - pass in out current field
    ```erb
    <%= form_tag ('/merbies') do %>
      <%= label_tag "Name"%>
      <%= text_field_tag :name %>
      <%= label_tag "Species"%>
      <%= text_field_tag :species %>
      <%= label_tag "Kills"%>
      <%= text_field_tag :kill_count %>
      <%= label_tag "Length"%>
      <%= text_field_tag :length %>
      <%= submit_tag "Create Merby" %>
    <% end %>
    ```
  - form_for
    - use it whenever you can!!
    - pass in the object
    - figures out method
    - form builder object inside of the pipes
    - directly to active record.
    - Be wary to create vs new.
    ```erb
      <%= form_for @merby do |f| %>
        <%= f.label "Name" %>
        <%= f.text_field :name %>
        <%= f.label "Species" %>
        <%= f.text_field :species %>
        <%= f.label "Kill Count" %>
        <%= f.number_field :kill_count %>
        <%= f.label "Length" %>
        <%= f.number_field :length %>
        <%= f.submit "Create Merby" %>
      <% end %>
    ```  
  - link_to
  - button_tag
  - submit_tag

  - What does the .permit! do in terms of permission in your code.
  - How to edit your code to access that and input this into your code.

  - strong params
    - only let them edit what fields you want
    - helper method to make accessing param easier
    - PRIVATE method. so that outside sources have no access.
  - [private methods] (https://ruby-for-beginners.rubymonstas.org/advanced/private_methods.html)

  - specific syntax for rails redirect_to

# SWBATS
  - When should we be using permit! in our program and forms
  - Go over using permit! and fix current bug in code.
