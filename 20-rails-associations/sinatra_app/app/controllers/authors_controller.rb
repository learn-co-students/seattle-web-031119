class AuthorsController < ApplicationController

  get '/authors/:id' do
    @author = Author.find(params[:id])
    @book_count = @author.books.count
    erb :'authors/show'
  end

  get '/authors' do
    @authors = Author.all
    erb :'authors/index'
  end
end
