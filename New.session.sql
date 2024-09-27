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

--@block
use blog;

--@block
CREATE TABLE blogDet(
    title varchar(255) not null,
    details TEXT not null,
    img varchar(255)
);

--@block
drop TABLE blogdet

--@block
ALTER TABLE blogdet ADD email varchar(255);

--@block
ALTER TABLE blogdet add primary key(id);

--@block
alter table blogdet add foreign key (email) references users(email)

--@block
insert into blogdet(email,title,details,img)
values
    ('abc@gamil.com','Impact of AI','lorem ipsum','test image')
;

--@block
ALTER TABLE blogdet
MODIFY COLUMN id INT AUTO_INCREMENT;

--@block //showing all data
SELECT * FROM blogdet;