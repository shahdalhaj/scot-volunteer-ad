-- Drop tables in case they already exist
-- Drop tables in case they already exist
DROP TABLE if exists users;
DROP TABLE IF EXISTS blocks CASCADE;
DROP TABLE IF EXISTS topics CASCADE;
DROP TABLE IF EXISTS block_topics CASCADE;
DROP TABLE IF EXISTS questions CASCADE;
DROP TABLE IF EXISTS volunteers CASCADE;
DROP TABLE IF EXISTS volunteer_topic CASCADE;
DROP TABLE IF exists volunteer_answers CASCADE;

-- Create tables
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email    VARCHAR(200) NOT NULL,
  password VARCHAR(200) NOT NULL
);



CREATE TABLE blocks(
  block_id INT GENERATED ALWAYS AS IDENTITY,
   block_name VARCHAR(255) NOT NULL,
   PRIMARY KEY( block_id)
);

CREATE TABLE topics(
   topic_id INT GENERATED ALWAYS AS IDENTITY,
   topic_name VARCHAR(255) NOT NULL,
   document_name VARCHAR(255) NOT NULL,
   document_link VARCHAR(255) NOT NULL,
   PRIMARY KEY(topic_id)
);
CREATE TABLE block_topics(
  block_id INT NOT NULL,
   topic_id INT NOT NULL,
   CONSTRAINT fk_topics
      FOREIGN KEY(topic_id)
	  REFERENCES topics(topic_id),
    CONSTRAINT fk_blocks
      FOREIGN KEY(block_id) 
	  REFERENCES blocks(block_id)
);
 

CREATE TABLE questions(
   question_id INT GENERATED ALWAYS AS IDENTITY,
  topic_id  INT NOT NULL,
   question_text VARCHAR(255) NOT NULL,
   PRIMARY KEY(question_id),
   CONSTRAINT fk_topics
      FOREIGN key(topic_id) 
	  REFERENCES topics(topic_id)
   
);
CREATE TABLE volunteers(
   volunteer_id INT GENERATED ALWAYS AS IDENTITY,
   email VARCHAR(255) NOT NULL,
   PRIMARY KEY(volunteer_id)
   
);
CREATE TABLE volunteer_topic(
  volunteer_topic_id INT GENERATED ALWAYS AS IDENTITY,
  topic_id  INT NOT NULL,
  volunteer_id  INT NOT NULL,
  assessment_start TIMESTAMP,
  assessment_end TIMESTAMP,
   PRIMARY KEY(volunteer_topic_id),
   CONSTRAINT fk_topics
      FOREIGN key(topic_id) 
	  REFERENCES topics(topic_id),
       CONSTRAINT fk_voulnteers
      FOREIGN key(volunteer_id) 
	  REFERENCES volunteers(volunteer_id)
   
);

CREATE TABLE volunteer_answers(
   volunteer_topic_id INT NOT NULL,
     question_id INT NOT NULL,
   CONSTRAINT fk_voulnteer_topic
      FOREIGN key( volunteer_topic_id) 
	  REFERENCES volunteer_topic( volunteer_topic_id),
       CONSTRAINT fk_questions
      FOREIGN key( question_id) 
	  REFERENCES questions(question_id)

);









