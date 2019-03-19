# Intro to SQL

1. Install the SQLite Browser if you haven't already [here](http://sqlitebrowser.org/)
2. Open the SQLite Browser and click 'File -> Open DataBase'
3. Choose the `chinook.db` file from this repo. This database is open source and maintained by Microsoft (SQL is no fun if you don't have any data)
4. Click the tab that says 'Execute SQL'. Type SQL queries in the box above. Press the play button. See the results of that query in the box below

## Challenges

C - Create table
R - Read table  
U - Update
D - Delete

1. Write the SQL to return all of the rows in the artists table?
-- Read some data.
```SQL
SELECT * FROM artists;
```

2. Write the SQL to select the artist with the name "Black Sabbath"
Read some data.
```SQL
SELECT name
FROM artists
WHERE name = "Black Sabbath";
```

3. Write the SQL to create a table named 'fans' with an autoincrementing ID that's a primary key and a name field of type text
Created a new table.
```sql
CREATE TABLE fans ( id INTEGER PRIMARY KEY, name TEXT);
```

4. Write the SQL to alter the fans table to have a artist_id column type integer?
Altered/Updated table
max row count
```sql
ALTER TABLE fans  
ADD artist_id INTEGER;
```

5. Write the SQL to add yourself as a fan of the Black Eyed Peas? ArtistId **169**
max row count : 2^64; TODO - can we insert value in max row.

UPDATE table
```sql
/*5. Write the SQL to add yourself as a fan of the Black Eyed Peas? ArtistId **169**/

/*INSERT INTO fans (name, artist_id)  VALUES("Quinn", 169);
INSERT INTO fans (name, artist_id)  VALUES("Mera", 169);
INSERT INTO fans (name, artist_id)  VALUES("Jon", 169);
Error ; duplicate
overwrite the row
insert but shift all other rows +1
duplicate and create two rows
create a sub id 1.1

---id specific
skip 4 go to 5.
next one will be 6.

error - i can't go intomemoryland and create something nowhere.

create 4 - blank;
then create 5.
force create a new row 4.
*/

INSERT INTO fans (id,name, artist_id) VALUES ( 4,"Chris", 169);

```

7. Write the SQL to return fans that are not fans of the black eyed peas.
sqlite question - selecting all column - prim key
SELECT some data
```sql
SELECT *
FROM fans
WHERE artist_id  LIKE 160

```
8. remove the table fans from out DB

```sql
DROP TABLE fans
```
------------------- Relations --------------------------------------------------
8. Write the SQL to display an artists name next to their album title

```sql
SELECT artists.id , artists.name, albums.title
FROM artists
INNER JOIN albums
ON albums.artist_id == artists.id;
```

--------------------------------------------------
9. Write the SQL to display artist name, album name and number of tracks on that album

```sql

```

10. Write the SQL to return the name of all of the artists in the 'Pop' Genre

```sql

```

## BONUS (very hard)

11. I want to return the names of the artists and their number of rock tracks
    who play Rock music
    and have move than 30 tracks
    in order of the number of rock tracks that they have
    from greatest to least

```sql

```
