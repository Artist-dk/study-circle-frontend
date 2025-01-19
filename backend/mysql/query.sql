
CREATE DATABASE studyCircle;
USE studyCircle;
CREATE TABLE IF NOT EXISTS contactUs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    phoneNo VARCHAR(20) NOT NULL,
    email VARCHAR(150) NOT NULL,
    message TEXT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    userName VARCHAR(50) NOT NULL,
    phoneNo VARCHAR(15), 
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    userType ENUM('Student', 'Teacher', 'University', 'User') DEFAULT 'User',
    profilePictureURL VARCHAR(255) DEFAULT 'https://i.pinimg.com/originals/5d/ad/83/5dad83eac77969d6583e067e3a82f0b3.jpg',
    description TEXT
);

CREATE TABLE messages (
    id INT PRIMARY KEY AUTO_INCREMENT,
    senderId INT NOT NULL,
    recipientId INT NOT NULL,
    messageType ENUM('text', 'image', 'document', 'video', 'audio', 'other') DEFAULT 'text',
    messageContent TEXT,
    mediaSource TEXT,
    sentAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (senderId) REFERENCES users(id),
    FOREIGN KEY (recipientId) REFERENCES users(id)
);

CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    pages INT NOT NULL,
    language VARCHAR(50) NOT NULL,
    bookType VARCHAR(50) NOT NULL,
    publicationDate DATE,
    publisher VARCHAR(255),
    genre VARCHAR(100),
    edition VARCHAR(50),
    price DECIMAL(10, 2),
    description TEXT,
    coverImageURL VARCHAR(255),
    fileURL VARCHAR(255)
);

CREATE TABLE settings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT NOT NULL,
    theme VARCHAR(20),
    notification BOOLEAN,
    FOREIGN KEY (userId) REFERENCES users(id)
);


CREATE TABLE tutorials (
    id INT AUTO_INCREMENT PRIMARY KEY,
    file_id VARCHAR(255) NOT NULL,
    file_link VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


