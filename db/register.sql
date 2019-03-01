insert into users (username, password, profile_pic)
values ($(username), $(password), 0, ${profile_pic})
returning id, username, profile_pic