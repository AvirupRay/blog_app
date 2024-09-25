show databases;

--@block //creating table
CREATE TABLE users(
    email varchar(255) not null unique
);

--@block //inserts value
insert into users(email)
values
    ('abc@gamil.com'),
    ('def@gamil.com'),
    ('xyz@gamil.com')
;

--@block //showing all data
SELECT * FROM users ;
