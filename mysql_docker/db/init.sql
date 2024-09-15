USE dnd;
CREATE TABLE IF NOT EXISTS users
(
  UserID int,
  Username VARCHAR(50),
  Email varchar(150),
  FirstName varchar(50),
  LastName varchar(50),
  PasswordHash varchar(50)
);
