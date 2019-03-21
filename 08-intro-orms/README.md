##Active Record Pattern
-  Class Book - That would be the representing the table/table name.
-  Rows - Instances of the object
- Columns - Attributes of the object.

## Intro to ORMs (Object Relational Mappers)

## CRUD REVIEW-
Create -
SQL - CREATE TABLE books (id INTEGER PRIMARY KEY , name TEXT, author_id INTEGER)
- TODO - create a table in our books db//
RUBY - Class Book
        //some stuff
        def ini...
          Book.new(id, name, author_id)
        end
       end

Read -
SQL :
SELECT * from Books
SELECT * from books WHERE id = 5
RUBY :
Book.all
[{},{},{}]

Update -
-UPDATE books SET (name, author_id) VALUES ('Please', 'Hi');
-UPDATE books SET name = 'value' WHERE name = 'hi'
RUBY
/check permissions
/set variables
Ruby method
hp1.update
  hp1.name = "new_name"
  hp1.author_id
end

Delete/Destroy/Drop -
SQL - DROP TABLE books
RUBY - Book.delete()
       Books.clear()
What are the four ways to interact with data.

#DISCUSSION QUESTION REVIEW

What is a foreign key?

##Preview day review
**Yesterday**
9.
Write the SQL to display artist name, album name and number of tracks on that album
#Figure what tables we need - artists, albums, tracks
#How do they link together
#artists doesn't belong to any other table
#no foreign-key are present in this table.

```sql
SELECT artists_name, title, COUNT(tracks.name)
FROM tracks
 INNER JOIN
	(SELECT artists.id AS artist_id , artists.name AS artists_name, albums.id AS alb_id, albums.title
	FROM artists
	INNER JOIN albums ON artists.id == albums.artist_id) ON alb_id == tracks.album_id GROUP BY album_id;

```
**Yesterday**
10. Write the SQL to return the name of all of the artists in the 'Pop' Genre

```sql

```

## BONUS (very hard)
**Go through outline : Break it down**

11. I want to return the names of the artists and their number of rock tracks
    who play Rock music
    and have move than 30 tracks
    in order of the number of rock tracks that they have
    from greatest to least

```sql

```


##Domain Modeling and SQL Review
1. Books and author where each book has a single author. Books should have an title and authors should have a name

books - has one author : book belongs to one author;
id     | title                  | author_id
 1        moby dick                  1
 2        harry potter1              2
 3        hp2                        2

author - has many books
id          | name              |
1             Hermin Mervil
2             JK Rowling


Q: Write a query to find all the books written by a certain author given the author's id.
```SQL

```

2.Books and Authors where each book can have one or multiple authors. Books should have a title and author should have a name.
#Case books has many authors;

books
| id                      | name           | /* DON'T DO : author_1 | author_2 | author 3|*/
| :-------------          | :------------- |  
| 1      | Moby Dick      |

Publishing Deal
|  id   | Book_id    | Author_id  |
| :------------- | :------------- |
| Item One       | Item Two       |

Authors;

| id     | name   |
| :------------- | :------------- |
| Item One       | Item Two       |


| Book_Title     | Author             |
| :------------- | :-------------     |
| HP2            | Jk Rowling         |
| HP2            | Hermin Melving     |

**books has many authors through Publishing Deal**
**books has many publishing deal**

Q: Write a query to find all the books to written by a certain author given their name
```SQL

```

4. After going through these examples, what is the general rule about where the foreign key belongs?
- In the child;
- The object that there is many of. Relates back to the parent.
- If an object belongs to another object, it has the responsibility of storing the foreign key, which will be the primary key in the parent object.

Draw out what your schema( structure of your tables and columns) would be for the following domains.
Consider what tables are needed, what columns are which tables, and where the foreign keys belong.

A tweet belongs to a user and has some message content - must have user_id

The belongs_to must have a user_id on it

A user has a username, and has many tweets

A tweet can have many tags and a tag can have many tweets
