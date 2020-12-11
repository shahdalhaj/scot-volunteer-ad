-- Drop tables in case they already exist
-- Drop tables in case they already exist
DROP TABLE IF exists users;
DROP TABLE IF EXISTS blocks CASCADE;
DROP TABLE IF EXISTS topics CASCADE;
DROP TABLE IF EXISTS questions CASCADE;
DROP TABLE IF EXISTS volunteers CASCADE;
DROP TABLE IF EXISTS volunteer_blocks CASCADE;
DROP TABLE IF EXISTS volunteer_answers CASCADE;

-- Create tables
--  users definition

-- Drop table

-- DROP TABLE  users;

CREATE TABLE  users (
	id serial NOT NULL,
	email varchar(200) NOT NULL,
	"password" varchar(200) NOT NULL,
	CONSTRAINT users_pkey PRIMARY KEY (id)
);

-- Permissions

-- ALTER TABLE  users OWNER TO app_user;
-- GRANT ALL ON TABLE  users TO app_user;


-----------------------------------------------------------------------------
--  blocks definition

-- Drop table

-- DROP TABLE  blocks;

CREATE TABLE  blocks (
	block_id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
	block_name varchar(255) NOT NULL,
	CONSTRAINT blocks_pkey PRIMARY KEY (block_id)
);

-- Permissions

-- ALTER TABLE  blocks OWNER TO app_user;
-- GRANT ALL ON TABLE  blocks TO app_user;



--  volunteers definition


-- DROP TABLE  volunteers;

CREATE TABLE  volunteers (
	volunteer_id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
	email varchar(255) NOT NULL,
	CONSTRAINT volunteers_pkey PRIMARY KEY (volunteer_id)
);

-- Permissions

-- ALTER TABLE  volunteers OWNER TO app_user;
-- GRANT ALL ON TABLE  volunteers TO app_user;


--  topics definition


-- DROP TABLE  topics;

CREATE TABLE  topics (
	topic_id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
	topic_name varchar(255) NOT NULL,
	document_name varchar(255) ,
	document_link varchar(255) ,
	block_id int4 NULL,
	CONSTRAINT topics_pkey PRIMARY KEY (topic_id),
	CONSTRAINT topics_fk FOREIGN KEY (block_id) REFERENCES blocks(block_id)
);

-- Permissions

-- ALTER TABLE  topics OWNER TO app_user;
-- GRANT ALL ON TABLE  topics TO app_user;


--  "volunteer_Blocks" definition

-- DROP TABLE  "volunteer_Blocks";

CREATE TABLE  volunteer_blocks (
	volunteer_block_id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
	volunteer_id int4 NOT NULL,
	assessment_start timestamp NULL,
	assessment_end timestamp NULL,
	block_id int4 NULL,
	CONSTRAINT volunteer_block_pkey PRIMARY KEY (volunteer_block_id),
	CONSTRAINT fk_voulnteers FOREIGN KEY (volunteer_id) REFERENCES volunteers(volunteer_id),
	CONSTRAINT volunteer_blocks_fk FOREIGN KEY (block_id) REFERENCES blocks(block_id)
);

-- Permissions

-- ALTER TABLE  "volunteer_Blocks" OWNER TO app_user;
-- GRANT ALL ON TABLE  "volunteer_Blocks" TO app_user;


--  questions definition


-- DROP TABLE  questions;

CREATE TABLE  questions (
	question_id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
	topic_id int4 NOT NULL,
	question_text varchar(255) NOT NULL,
	CONSTRAINT questions_pkey PRIMARY KEY (question_id),
	CONSTRAINT fk_topics FOREIGN KEY (topic_id) REFERENCES topics(topic_id)
);

-- Permissions

-- ALTER TABLE  questions OWNER TO app_user;
-- GRANT ALL ON TABLE  questions TO app_user;


--  volunteer_answers definition

-- Drop table

-- DROP TABLE  volunteer_answers;

CREATE TABLE  volunteer_answers (
	volunteer_block_id int4 NOT NULL,
	question_id int4 NOT NULL,
	answer varchar(255) NOT NULL,
	CONSTRAINT volunteer_answers_pkey PRIMARY KEY (volunteer_block_id, question_id),
	CONSTRAINT fk_questions FOREIGN KEY (question_id) REFERENCES questions(question_id),
	CONSTRAINT volunteer_answers_fk FOREIGN KEY (volunteer_block_id) REFERENCES volunteer_blocks (volunteer_block_id)
);

-- Permissions

-- ALTER TABLE  volunteer_answers OWNER TO app_user;
-- GRANT ALL ON TABLE  volunteer_answers TO app_user;



-----------------------------------------------------------------------------




