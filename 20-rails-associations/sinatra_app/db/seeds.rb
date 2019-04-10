Book.destroy_all

GoogleBooks::Adapter.new("Herman Melville").fetch_books
GoogleBooks::Adapter.new("J.K. Rowling").fetch_books
