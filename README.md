# Resources use 
Axios,React, MySQL,Node.js, HTML/CSS/JS


# server run script 
npm run prodmovieStart

# react client run script
npm start 

# Query Used to create a table: 
create table Movies(

movieTitle varchar(255) not null,
releaseDate date not null,
movieRating decimal(10,1) not null,
genre varchar(255) not null,
studioemail varchar(255) not null,

primary key(movieTitle)
)
Movie Title is the primary key to ensure uniqueness, but a user can update releaseDate,movieRating,genre,studioemail.