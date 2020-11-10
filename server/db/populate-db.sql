-- Users seed data
-- Note: Do NOT add passwords you use in real life. Passwords are now saved as clear text. This is very bad from security point of view. We will have a task to encrypt the passwords
INSERT INTO users (email, password) values ('admin@cyf.org', 'admin_password');
INSERT INTO users (email, password) values ('user@cyf.org', 'user_password');


 
 INSERT INTO topics ( topic_name) values ('english');
 INSERT INTO topics ( topic_name) values ('get ready for work');

INSERT INTO assessments ( topic_id, assessment_name) values (1,'english');
INSERT INTO assessments ( topic_id, assessment_name) values (2,'coding job');


INSERT INTO questions ( assessment_id, question_text) values (1,'_____ lots of animals in the zoo');
INSERT INTO questions ( assessment_id, question_text) values (1,' ___________ is she?" She is my friend from London');
INSERT INTO questions ( assessment_id, question_text) values (2,'which of these build the UI in the website?');

INSERT INTO choices( question_id, choice_text, isCorrect) values (1,'there are',true);
INSERT INTO choices( question_id, choice_text, isCorrect) values (1,'there',false);
INSERT INTO choices( question_id, choice_text, isCorrect) values (1,'there is',false);
INSERT INTO choices( question_id, choice_text, isCorrect) values (2,'Which',false);
INSERT INTO choices( question_id, choice_text, isCorrect) values (2,'Who',true);
INSERT INTO choices( question_id, choice_text, isCorrect) values (2,'Why',false);
INSERT INTO choices( question_id, choice_text, isCorrect) values (3,'Html,Css,React',true);
INSERT INTO choices( question_id, choice_text, isCorrect) values (3,'Html,Css,Psql',false);
INSERT INTO choices( question_id, choice_text, isCorrect) values (3,'Javascript,React,css',false);


INSERT INTO volunteers ( volunteer_name, email) values ('Shahd','Shahd@cyf.org');
INSERT INTO volunteers ( volunteer_name, email) values ('Mohammad','mohamad@cyf.org');
INSERT INTO volunteers ( volunteer_name, email) values ('Razan','razan@cyf.org');

INSERT INTO volunteer_assessments( volunteer_id ,assessment_id, assessment_start, assessment_end) values (2,2,'2020-11-22 11:00:00','2020-11-22 12:15:00');
INSERT INTO volunteer_assessments( volunteer_id, assessment_id, assessment_start, assessment_end) values (1,1,'2020-11-23 14:30:00','2020-11-23 15:45:00');

INSERT INTO volunteer_answers ( question_id, vol_assessment_id, volunteer_answer) values (1,1,1);
INSERT INTO volunteer_answers ( question_id, vol_assessment_id, volunteer_answer) values (3,2,3);








 
