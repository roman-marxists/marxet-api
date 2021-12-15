-- CREATE DATABASE marxet;

-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Listings'
--
-- ---

-- DROP TABLE IF EXISTS Listings CASCADE;

CREATE TABLE Listings (
  id SERIAL NOT NULL PRIMARY KEY UNIQUE,
  description VARCHAR(1000) NOT NULL,
  question_date TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  seller VARCHAR(60) NOT NULL,
  name VARCHAR(60) NOT NULL,
  watches INTEGER NOT NULL DEFAULT 0,
  reported BOOLEAN NOT NULL DEFAULT false,
  product_id INTEGER NOT NULL
);

-- ---
-- Table 'Transactions'
--
-- ---

-- DROP TABLE IF EXISTS Transactions CASCADE;

CREATE TABLE Transactions (
  id SERIAL NOT NULL PRIMARY KEY UNIQUE,
  listing_id VARCHAR(1000) NOT NULL,
  date TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  seller VARCHAR(60) NOT NULL,
  buyer VARCHAR(60) NOT NULL,
  reported BOOLEAN NOT NULL DEFAULT false
);

-- ---
-- Table 'Users'
--
-- ---

-- DROP TABLE IF EXISTS Users CASCADE;

CREATE TABLE Users (
  id NOT NULL PRIMARY KEY UNIQUE,
  username VARCHAR(60) NOT NULL UNIQUE
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE Listings ADD FOREIGN KEY (seller) REFERENCES Users (id);
ALTER TABLE Transactions ADD FOREIGN KEY (listing_id) REFERENCES Listings (id);
ALTER TABLE Transactions ADD FOREIGN KEY (seller) REFERENCES Users (id);
ALTER TABLE Transactions ADD FOREIGN KEY (buyer) REFERENCES Users (id);
ALTER TABLE Photos ADD FOREIGN KEY (answer_id) REFERENCES Answers (id);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE Questions ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE Answers ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE Products ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO Questions (id,question_body,question_date,asker_name,question_helpfulness,reported,product_id) VALUES
-- ('','','','','','','');
-- INSERT INTO Answers (id,body,date,answerer_name,helpfulness,photos,question_id,reported) VALUES
-- ('','','','','','','','');
-- INSERT INTO Products (id) VALUES
-- ('');

-- ---
-- Update the serial sequence counter
-- ---
BEGIN;
-- protect against concurrent inserts while you update the counter
LOCK TABLE Questions IN EXCLUSIVE MODE;
LOCK TABLE Answers IN EXCLUSIVE MODE;
LOCK TABLE Photos IN EXCLUSIVE MODE;
-- Update the sequence
SELECT setval('questions_id_seq', COALESCE((SELECT MAX(id)+1 FROM Questions), 1), false);
SELECT setval('answers_id_seq', COALESCE((SELECT MAX(id)+1 FROM Answers), 1), false);
SELECT setval('photos_id_seq', COALESCE((SELECT MAX(id)+1 FROM Photos), 1), false);
COMMIT;

CREATE INDEX idx_product_id ON Questions(product_id);
CREATE INDEX idx_question_id ON Answers(question_id);