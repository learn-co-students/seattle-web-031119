<% if @test.errors %>
  <%= @test.errors.full_messages %>
<%end%>

<%= form_for @test do |f| %>
  <%= f.label "First name" %>
  <%= f.text_field :student_first_name %>
  <%= f.label "Last Name" %>
  <%= f.text_field :student_last_name %>
  <%= f.label "Grade" %>
  <%= f.number_field :grade %>
  <%= f.label "Minutes Taken" %>
  <%= f.number_field :minutes_taken %>
  <%= f.submit %>
<% end %>
