-- Drop tables in case they already exist
-- Drop tables in case they already exist
DROP TABLE if exists users;
DROP TABLE IF EXISTS charity CASCADE;
DROP TABLE IF EXISTS topics CASCADE;
DROP TABLE IF EXISTS assessments CASCADE;
DROP TABLE IF EXISTS questions CASCADE;
DROP TABLE IF EXISTS choices CASCADE;
DROP TABLE IF EXISTS volunteers CASCADE;
DROP TABLE IF EXISTS volunteer_assessments CASCADE;
DROP TABLE IF exists volunteer_answers CASCADE;

-- Create tables
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email    VARCHAR(200) NOT NULL,
  password VARCHAR(200) NOT NULL
);


CREATE TABLE topics(
   topic_id INT GENERATED ALWAYS AS IDENTITY,
   topic_name VARCHAR(255) NOT NULL,
   PRIMARY KEY(topic_id)
);

CREATE TABLE assessments(
   assessment_id INT GENERATED ALWAYS AS IDENTITY,
   assessment_name VARCHAR(255) NOT NULL,
   topic_id INT ,
   PRIMARY KEY(assessment_id),
   CONSTRAINT fk_topics
      FOREIGN KEY(topic_id) 
	  REFERENCES topics(topic_id)
);

CREATE TABLE questions(
   question_id INT GENERATED ALWAYS AS IDENTITY,
   assessment_id INT NOT NULL,
   question_text VARCHAR(255) NOT NULL,
   PRIMARY KEY(question_id),
   CONSTRAINT fk_assessments
      FOREIGN key(assessment_id) 
	  REFERENCES assessments(assessment_id)
   
);

CREATE TABLE choices(
   choice_id INT GENERATED ALWAYS AS IDENTITY,
   question_id INT NOT NULL,
   choice_text VARCHAR(150) NOT NULL,
  isCorrect BOOLEAN,
   PRIMARY KEY(choice_id),
   CONSTRAINT fk_choices
      FOREIGN key(question_id) 
	  REFERENCES questions(question_id)
   
);


CREATE TABLE volunteers(
   volunteer_id INT GENERATED ALWAYS AS IDENTITY,
   volunteer_name VARCHAR(255) NOT NULL,

   email VARCHAR(255) NOT NULL,
   PRIMARY KEY(volunteer_id)
   
);

CREATE TABLE volunteer_assessments(
   vol_assessment_id INT GENERATED ALWAYS AS IDENTITY,
   volunteer_id INT NOT NULL,
   assessment_id INT NOT NULL,
   assessment_start TIMESTAMP,
   assessment_end TIMESTAMP,
   PRIMARY KEY(vol_assessment_id),
   CONSTRAINT fk_voulnteers
      FOREIGN key(volunteer_id) 
	  REFERENCES volunteers(volunteer_id),
       CONSTRAINT fk_assessments_volunteer
     FOREIGN KEY (assessment_id) 
     REFERENCES assessments(assessment_id)
     

);

CREATE TABLE volunteer_answers(
   vol_assessment_id INT ,
   question_id INT NOT NULL,
   volunteer_answer INT NOT NULL,
   PRIMARY KEY(vol_assessment_id,question_id),
   CONSTRAINT fk_questions_answers
      FOREIGN key(question_id) 
	  REFERENCES questions(question_id),
   CONSTRAINT fk_assesment_answers
      FOREIGN key(vol_assessment_id) 
	  REFERENCES volunteer_assessments(vol_assessment_id)
);










