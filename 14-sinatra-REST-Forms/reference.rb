###PWD :
/Users/srajendran/Documents/FlatIronCode/LectureNotes/StartCode/lectures-starter-code/sinatra/sinatra-mvc-intro

## BOOK CLASS
class Book < ActiveRecord::Base

end


## INDEX , GET LIST OF ALL BOOKS
<% @books.each do |book| %>
<a href="/books"><%= book.title%> </a> </br>
<%end%>



class ApplicationController < Sinatra::Base

  set :views, 'app/views'

  get '/' do
    erb :home
  end

  get '/books' do
    # binding.pry
    @books = Book.all
    erb :index
  end

  get '/books/new' do
    erb :new
  end

  get '/books/:id' do
    @book = Book.find(params['id'])
    erb :show
  end

  post '/books' do
    Book.create(params)
  end
end




##show
<p> <%= @book.title %>
</p>

<p>
  <%= @book.snippet %>
</p>

<p>
  <%= @book.author %>
</p>




##new
<form action="/books" method="post">
  <label for="title"> Title</label>
  <input type="text" name="" value="">
  <label for="snippet"> Snippet </label>
  <input type="text" name="" value="">
  <input type="submit" name="" value="Create New Book">
</form>



## INDEX
<% @books.each do |book| %>
<a href="/books"><%= book.title%> </a> </br>
<%end%>





#edit a single book
get '/books/:id/edit' do
  @book = Book.find(params[:id])
  erb :edit
end

patch '/books/:id' do
  book = Book.find(params[:id])
  book.update(title: params[:title], author: params[:author], snippet: params[:snippet])
  redirect "/books/#{book.id}"
end



Form
<form class="" action="/books/<%= @book.id %>" method="post">
  <input type="hidden" name="_method" value="patch">
  <label for="title"> Title</label>
  <input type="text" name = "title" value= "<%= @book.title %>">
  <label for="author"> Author</label>
  <input type="text" name = "author" value="<%= @book.author %>">
  <label for="snippet"> Snippet</label>
  <input type="text"  name = "snippet" value="<%= @book.snippet %>">
  <input type="submit" value="Edit Book">
</form>


patch '/books/:id' do
  book = Book.find(params[:id])
  book.update(title: params[:title], author: params[:author], snippet: params[:snippet])
  redirect "/books/#{book.id}"
end



<form class="" action="/books/<%= @book.id %>" method="post">
  <input type="hidden" name="_method" value="PATCH">
  <input type="text" value="<%= @book.title %>">
  <input type="text" value="<%= @book.author %>">
  <input type="text" value="<%= @book.snippet %>">
  <input type="submit" value="Edit Book">
</form>


get '/books/:id/edit' do
  @book = Book.find(params[:id])
  erb :edit
ends



<form class="" action="/books/<%= @book.id %>" method="post">
  <label for="title"> Title</label>
  <input type="text" name = "title" value= "<%= @book.title %>">
  <label for="author"> Author</label>
  <input type="text" name = "author" value="<%= @book.author %>">
  <label for="snippet"> Snippet</label>
  <input type="text"  name = "snippet" value="<%= @book.snippet %>">
  <input type="submit" value="Edit Book">
</form>


# delete '/books/:id' do
#   @recipe = Recipe.find_by_id(params[:id])
#   @recipe.delete
#   redirect to "/recipes"
# end


<form class="" action="/books/<%= @book.id %>" method="post">
<input type="hidden" name="_method" value="DELETE">
<input type="submit" name="" value="Delete">
</form>



get '/books/:id/edit' do
  @book = Book.find(params[:id])
  erb :edit
end
