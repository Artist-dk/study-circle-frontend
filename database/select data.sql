
SELECT * FROM contactUs;
SELECT * FROM users;
SELECT * FROM messages;
SELECT * FROM books;
SELECT * FROM settings;
SELECT * FROM sessions;

TRUNCATE contactUs;
TRUNCATE users;
TRUNCATE messages;
TRUNCATE books;
TRUNCATE settings;
TRUNCATE sessions;

truncate messages;

SELECT * FROM users WHERE id != 1;


use studycircle;

-- DROP DATABASE studycircle;

DROP TABLE contactUs;
-- DROP TABLE users;
-- DROP TABLE messages;
-- DROP TABLE books;
-- DROP TABLE settings;
-- DROP TABLE sessions;

