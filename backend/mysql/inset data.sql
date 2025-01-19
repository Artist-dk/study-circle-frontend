INSERT INTO contactUs (firstName, lastName, phoneNo, email, message) 
VALUES ('John', 'Doe', '1234567890', 'john@example.com', 'This is a message from John.');

INSERT INTO contactUs (firstName, lastName, phoneNo, email, message) 
VALUES ('Alice', 'Smith', '9876543210', 'alice@example.com', 'This is a message from Alice.');

INSERT INTO contactUs (firstName, lastName, phoneNo, email, message) 
VALUES ('Bob', 'Johnson', '5555555555', 'bob@example.com', 'This is a message from Bob.');

INSERT INTO contactUs (firstName, lastName, phoneNo, email, message) 
VALUES ('Emma', 'Brown', '7777777777', 'emma@example.com', 'This is a message from Emma.');

INSERT INTO contactUs (firstName, lastName, phoneNo, email, message) 
VALUES ('Michael', 'Davis', '9999999999', 'michael@example.com', 'This is a message from Michael.');




INSERT INTO users (firstName, lastName, userName, phoneNo, email, password, userType, profilePictureURL, description) 
VALUES ('John', 'Doe', 'johndoe', '1234567890', 'john@example.com', 'password123', 'User', NULL, 'This is John Doe.');

INSERT INTO users (firstName, lastName, userName, phoneNo, email, password, userType, profilePictureURL, description) 
VALUES ('Alice', 'Smith', 'alicesmith', '9876543210', 'alice@example.com', 'password456', 'Teacher', NULL, 'This is Alice Smith.');

INSERT INTO users (firstName, lastName, userName, phoneNo, email, password, userType, profilePictureURL, description) 
VALUES ('Bob', 'Johnson', 'bobjohnson', NULL, 'bob@example.com', 'password789', 'Student', NULL, 'This is Bob Johnson.');

INSERT INTO users (firstName, lastName, userName, phoneNo, email, password, userType, profilePictureURL, description) 
VALUES ('Emma', 'Brown', 'emmabrown', '7777777777', 'emma@example.com', 'password123', 'University', NULL, 'This is Emma Brown.');

INSERT INTO users (firstName, lastName, userName, phoneNo, email, password, userType, profilePictureURL, description) 
VALUES ('Michael', 'Davis', 'michaeldavis', '9999999999', 'michael@example.com', 'password456', 'User', NULL, 'This is Michael Davis.');




INSERT INTO messages (senderId, recipientId, messageType, messageContent, mediaSource) 
VALUES (1, 2, 'text', 'Hello Alice!', NULL);

INSERT INTO messages (senderId, recipientId, messageType, messageContent, mediaSource) 
VALUES (2, 1, 'text', 'Hi John!', NULL);

INSERT INTO messages (senderId, recipientId, messageType, messageContent, mediaSource) 
VALUES (3, 4, 'text', 'Hey Emma!', NULL);

INSERT INTO messages (senderId, recipientId, messageType, messageContent, mediaSource) 
VALUES (4, 3, 'text', 'Hi Bob!', NULL);

INSERT INTO messages (senderId, recipientId, messageType, messageContent, mediaSource) 
VALUES (5, 1, 'text', 'Hello John!', NULL);






INSERT INTO books (title, author, pages, language, bookType, publicationDate, publisher, genre, edition, price, description, coverImageURL, fileURL) 
VALUES ('Harry Potter and the Sorcerer''s Stone', 'J.K. Rowling', 320, 'English', 'Fiction', '1997-06-26', 'Scholastic', 'Fantasy', '1st', 10.99, 'First book in the Harry Potter series.', 'https://example.com/harry_potter_cover.jpg', 'https://example.com/harry_potter.pdf');

INSERT INTO books (title, author, pages, language, bookType, publicationDate, publisher, genre, edition, price, description, coverImageURL, fileURL) 
VALUES ('To Kill a Mockingbird', 'Harper Lee', 336, 'English', 'Fiction', '1960-07-11', 'J. B. Lippincott & Co.', 'Classic', '1st', 12.50, 'A classic novel set in the American South.', 'https://example.com/to_kill_a_mockingbird_cover.jpg', 'https://example.com/to_kill_a_mockingbird.pdf');

INSERT INTO books (title, author, pages, language, bookType, publicationDate, publisher, genre, edition, price, description, coverImageURL, fileURL) 
VALUES ('The Great Gatsby', 'F. Scott Fitzgerald', 180, 'English', 'Fiction', '1925-04-10', 'Charles Scribner''s Sons', 'Classic', '1st', 8.99, 'A story of decadence and excess in the Jazz Age.', 'https://example.com/great_gatsby_cover.jpg', 'https://example.com/great_gatsby.pdf');

INSERT INTO books (title, author, pages, language, bookType, publicationDate, publisher, genre, edition, price, description, coverImageURL, fileURL) 
VALUES ('1984', 'George Orwell', 328, 'English', 'Dystopian', '1949-06-08', 'Secker & Warburg', 'Science Fiction', '1st', 9.99, 'A dystopian novel set in a totalitarian regime.', 'https://example.com/1984_cover.jpg', 'https://example.com/1984.pdf');

INSERT INTO books (title, author, pages, language, bookType, publicationDate, publisher, genre, edition, price, description, coverImageURL, fileURL) 
VALUES ('Pride and Prejudice', 'Jane Austen', 279, 'English', 'Classic', '1813-01-28', 'T. Egerton, Whitehall', 'Classic', '1st', 7.99, 'A romantic novel set in early 19th-century England.', 'https://example.com/pride_and_prejudice_cover.jpg', 'https://example.com/pride_and_prejudice.pdf');







INSERT INTO settings (userId, theme, notification) 
VALUES (1, 'dark', true);

INSERT INTO settings (userId, theme, notification) 
VALUES (2, 'light', true);

INSERT INTO settings (userId, theme, notification) 
VALUES (3, 'dark', false);

INSERT INTO settings (userId, theme, notification) 
VALUES (4, 'light', true);

INSERT INTO settings (userId, theme, notification) 
VALUES (5, 'dark', false);

