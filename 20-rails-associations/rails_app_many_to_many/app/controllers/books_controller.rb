class BooksController < ApplicationController
  before_action :set_book, only: [:show, :edit, :update]
  def index
    @books = Book.all
  end

  def new
    @book = Book.new
  end

  def create
    @book = Book.create(book_params)
    redirect_to book_path(@book)
  end

  def show
    @author_names = @book.authors.pluck(:name)
  end

  def edit
  end

  def update
    @book.update(book_params)
    redirect_to book_path(@book)
  end

  private
  def set_book
    @book = Book.find(params[:id])
  end

  def book_params
    params.require(:book).permit(:title, :snippet, :author_ids => [])
  end
end
