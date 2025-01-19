
-- Create table for universities
CREATE TABLE Universities (
    UniversityID INT PRIMARY KEY AUTO_INCREMENT,
    UniversityName VARCHAR(100) NOT NULL,
    Location VARCHAR(100) NOT NULL
);

-- Create table for colleges
CREATE TABLE Colleges (
    CollegeID INT PRIMARY KEY AUTO_INCREMENT,
    CollegeName VARCHAR(100) NOT NULL,
    UniversityID INT,
    FOREIGN KEY (UniversityID) REFERENCES Universities(UniversityID)
);
-- Create table for tutorials
CREATE TABLE Tutorials (
    TutorialID INT PRIMARY KEY AUTO_INCREMENT,
    Title VARCHAR(100) NOT NULL,
    Description TEXT,
    AuthorID INT NOT NULL,
    FOREIGN KEY (AuthorID) REFERENCES Users(UserID)
);

-- Create table for contests
CREATE TABLE Contests (
    ContestID INT PRIMARY KEY AUTO_INCREMENT,
    Title VARCHAR(100) NOT NULL,
    Description TEXT,
    StartTime DATETIME,
    EndTime DATETIME
);

-- Create table for contest participants
CREATE TABLE ContestParticipants (
    ContestID INT,
    UserID INT,
    PRIMARY KEY (ContestID, UserID),
    FOREIGN KEY (ContestID) REFERENCES Contests(ContestID),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

-- Create table for library resources
CREATE TABLE LibraryResources (
    ResourceID INT PRIMARY KEY AUTO_INCREMENT,
    Title VARCHAR(100) NOT NULL,
    Description TEXT,
    AuthorID INT NOT NULL,
    ResourceType ENUM('Book', 'Article', 'Video') NOT NULL,
    FOREIGN KEY (AuthorID) REFERENCES Users(UserID)
);

-- Create table for practice questions
CREATE TABLE PracticeQuestions (
    QuestionID INT PRIMARY KEY AUTO_INCREMENT,
    Question TEXT NOT NULL,
    Answer TEXT NOT NULL,
    Difficulty ENUM('Easy', 'Medium', 'Hard') NOT NULL,
    Topic VARCHAR(100)
);

-- Create table for user progress in practice
CREATE TABLE UserPracticeProgress (
    UserID INT,
    QuestionID INT,
    CompletionStatus ENUM('Not Started', 'In Progress', 'Completed') DEFAULT 'Not Started',
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (QuestionID) REFERENCES PracticeQuestions(QuestionID)
);


-- Create table for courses
CREATE TABLE Courses (
    CourseID INT PRIMARY KEY AUTO_INCREMENT,
    CourseName VARCHAR(100) NOT NULL,
    CollegeID INT,
    TeacherID INT,
    FOREIGN KEY (CollegeID) REFERENCES Colleges(CollegeID),
    FOREIGN KEY (TeacherID) REFERENCES Users(UserID)
);

-- Create table for assignments
CREATE TABLE Assignments (
    AssignmentID INT PRIMARY KEY AUTO_INCREMENT,
    AssignmentName VARCHAR(100) NOT NULL,
    CourseID INT,
    Description TEXT,
    Deadline DATETIME,
    FOREIGN KEY (CourseID) REFERENCES Courses(CourseID)
);

-- Create table for grades
CREATE TABLE Grades (
    GradeID INT PRIMARY KEY AUTO_INCREMENT,
    StudentID INT,
    AssignmentID INT,
    Grade DECIMAL(5,2),
    FOREIGN KEY (StudentID) REFERENCES Users(UserID),
    FOREIGN KEY (AssignmentID) REFERENCES Assignments(AssignmentID)
);

-- Create table for announcements
CREATE TABLE Announcements (
    AnnouncementID INT PRIMARY KEY AUTO_INCREMENT,
    CourseID INT,
    Announcement TEXT,
    AnnouncerID INT,
    AnnouncementTime DATETIME,
    FOREIGN KEY (CourseID) REFERENCES Courses(CourseID),
    FOREIGN KEY (AnnouncerID) REFERENCES Users(UserID)
);

-- Create table for course materials
CREATE TABLE CourseMaterials (
    MaterialID INT PRIMARY KEY AUTO_INCREMENT,
    CourseID INT,
    MaterialType ENUM('Lecture Notes', 'Slides', 'Video', 'Other'),
    MaterialTitle VARCHAR(100) NOT NULL,
    MaterialDescription TEXT,
    MaterialURL VARCHAR(255),
    UploadedBy INT,
    UploadTime DATETIME,
    FOREIGN KEY (CourseID) REFERENCES Courses(CourseID),
    FOREIGN KEY (UploadedBy) REFERENCES Users(UserID)
);

-- Create table for conversations
CREATE TABLE Conversations (
    ConversationID INT PRIMARY KEY AUTO_INCREMENT,
    ConversationName VARCHAR(100),
    CreatedBy INT, -- UserID of the user who created the conversation
    CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (CreatedBy) REFERENCES Users(UserID)
);

-- Create table for members of conversations
CREATE TABLE ConversationMembers (
    ConversationID INT,
    UserID INT,
    PRIMARY KEY (ConversationID, UserID),
    FOREIGN KEY (ConversationID) REFERENCES Conversations(ConversationID),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);
