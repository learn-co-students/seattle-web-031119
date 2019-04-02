class ApplicationController < Sinatra::Base
  set :views, 'app/views'

  get '/' do
    "Hello World"
  end

  get '/books' do
    # binding.pry
    @books = Book.all
    erb :books
  end

  get '/books/new' do
    erb :new_book
  end

  get '/books/:id' do
    # binding.pry
    @book = Book.find(params[:id])
    erb :show_book
  end

  post '/books' do
    binding.pry
    Book.create(params)
  end

end
