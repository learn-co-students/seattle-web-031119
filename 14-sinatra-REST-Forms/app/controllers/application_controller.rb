class ApplicationController < Sinatra::Base
  set :views, 'app/views'
  set :method_override, true

  #default
  get '/' do
    "Hello World"
  end

  #view books
  get '/books' do
    # binding.pry
    @books = Book.all
    erb :books
  end

  #create a new book
  get '/books/new' do
    erb :new_book
  end


  #view a single book
  get '/books/:id' do
    # binding.pry
    @book = Book.find(params[:id])
    erb :show_book
  end

  post '/books' do
    # binding.pry
    @book = Book.create(params)
    redirect "/books/#{@book.id}"
  end

  get '/books/:id/edit' do
    @book = Book.find(params[:id])
    erb :edit
  end

  patch '/books/:id' do
    @book = Book.find_by_id(params[:id])
    # binding.pry
    @book.update(snippet: params[:snippet])
    redirect to "/books/#{@book.id}"
  end

  delete '/books/:id' do
    @book = Book.find(params[:id])
    @book.delete
    # "Your book has been deleted"
    redirect to "/books"
  end
end
