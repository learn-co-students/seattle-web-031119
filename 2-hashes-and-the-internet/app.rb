require 'rest-client'
require 'pry'


def get_books(url)
  resp = RestClient.get(url)
  if resp.code == 200
    books_data = JSON.parse(resp)
    books_data['items']
  else
    puts 'Bummer, no books'
    []
  end
end

def get_title(book)
  book['volumeInfo']['title']
end

def get_authors(book)
  if book['volumeInfo']['authors']
    book['volumeInfo']['authors'].join(' & ')
  end
end

def get_description(book)
  book['volumeInfo']['description']
end

def print_books(search_term)
  url = "https://www.googleapis.com/books/v1/volumes?q=#{search_term.gsub(' ', '+')}"
  books = get_books(url)
  books.each do |book|
    puts '*******************'
    puts get_title(book)
    puts get_authors(book)
    puts get_description(book)
  end
end

print_books('pineapple')


# *******
# title
# Someone & Someone else & a third person
# description

Pry.start
