create table users (
    id serial primary key,
    username varchar(45),
    password varchar(45),
    profile_pic text
)

insert into users (username, password, profile_pic)
values ($(username), $(password), 0, ${profile_pic})
returning id, username, profile_pic

select * from users 
where username = ${username}