-- Users seed data
-- Note: Do NOT add passwords you use in real life. Passwords are now saved as clear text. This is very bad from security point of view. We will have a task to encrypt the passwords
INSERT INTO users (email, password) values ('admin@cyf.org', 'admin_password');
INSERT INTO users (email, password) values ('user@cyf.org', 'user_password');


INSERT INTO blocks (block_id, block_name) VALUES(1, 'Block 1');
INSERT INTO blocks (block_id, block_name) VALUES(2, 'Block 2');


INSERT INTO topics (topic_id, topic_name, document_name, document_link) VALUES(1, 'Beginners English', 'Beginners English', 'www.google.com');
INSERT INTO topics (topic_id, topic_name, document_name, document_link) VALUES(2, 'Intermediate English', 'Intermediate English', 'www.bing.com');



INSERT INTO block_topics (block_id, topic_id) VALUES(1, 1);
INSERT INTO block_topics (block_id, topic_id) VALUES(1, 2);
INSERT INTO block_topics (block_id, topic_id) VALUES(2, 1);
INSERT INTO block_topics (block_id, topic_id) VALUES(2, 2);


INSERT INTO volunteer_topic (volunteer_topic_id, topic_id, volunteer_id) VALUES(1, 1, 1);
INSERT INTO volunteer_topic (volunteer_topic_id, topic_id, volunteer_id) VALUES(2, 1, 2);
INSERT INTO volunteer_topic (volunteer_topic_id, topic_id, volunteer_id) VALUES(3, 2, 1);
INSERT INTO volunteer_topic (volunteer_topic_id, topic_id, volunteer_id) VALUES(4, 2, 2);


INSERT INTO questions (topic_id, question_text) VALUES(1, 'What are the types of past tense?');
INSERT INTO questions (topic_id, question_text) VALUES(2, 'What are the types of present continues?');



INSERT INTO volunteers (volunteer_id, email) VALUES(1, 'Volunteer1@email.com');
INSERT INTO volunteers (volunteer_id, email) VALUES(2, 'John@mail.com');


INSERT INTO volunteer_answers (volunteer_topic_id, question_id, answers) VALUES(1, 1, 'Past simple, past continus');
INSERT INTO volunteer_answers (volunteer_topic_id, question_id, answers) VALUES(1, 1, 'Simple Past Tense.Past Continuous Tense.
Past Perfect Tense.
Past Perfect Continuous Tense.
');









 
