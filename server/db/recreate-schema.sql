-- Drop tables in case they already exist
-- Drop tables in case they already exist
DROP TABLE if exists users;
DROP TABLE IF EXISTS blocks CASCADE;
DROP TABLE IF EXISTS topics CASCADE;
DROP TABLE IF EXISTS questions CASCADE;
DROP TABLE IF EXISTS volunteers CASCADE;
DROP TABLE IF EXISTS volunteer_blocks CASCADE;
DROP TABLE IF exists volunteer_answers CASCADE;

-- Create tables
-- public.users definition

-- Drop table

-- DROP TABLE public.users;

CREATE TABLE public.users (
	id serial NOT NULL,
	email varchar(200) NOT NULL,
	"password" varchar(200) NOT NULL,
	CONSTRAINT users_pkey PRIMARY KEY (id)
);

-- Permissions

ALTER TABLE public.users OWNER TO app_user;
GRANT ALL ON TABLE public.users TO app_user;


-----------------------------------------------------------------------------
-- public.blocks definition

-- Drop table

-- DROP TABLE public.blocks;

CREATE TABLE public.blocks (
	block_id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
	block_name varchar(255) NOT NULL,
	CONSTRAINT blocks_pkey PRIMARY KEY (block_id)
);

-- Permissions

ALTER TABLE public.blocks OWNER TO app_user;
GRANT ALL ON TABLE public.blocks TO app_user;



-- public.volunteers definition


-- DROP TABLE public.volunteers;

CREATE TABLE public.volunteers (
	volunteer_id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
	email varchar(255) NOT NULL,
	CONSTRAINT volunteers_pkey PRIMARY KEY (volunteer_id)
);

-- Permissions

ALTER TABLE public.volunteers OWNER TO app_user;
GRANT ALL ON TABLE public.volunteers TO app_user;


-- public.topics definition


-- DROP TABLE public.topics;

CREATE TABLE public.topics (
	topic_id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
	topic_name varchar(255) NOT NULL,
	document_name varchar(255) NOT NULL,
	document_link varchar(255) NOT NULL,
	block_id int4 NULL,
	CONSTRAINT topics_pkey PRIMARY KEY (topic_id),
	CONSTRAINT topics_fk FOREIGN KEY (block_id) REFERENCES blocks(block_id)
);

-- Permissions

ALTER TABLE public.topics OWNER TO app_user;
GRANT ALL ON TABLE public.topics TO app_user;


-- public."volunteer_Blocks" definition

-- DROP TABLE public."volunteer_Blocks";

CREATE TABLE public.volunteer_Blocks (
	volunteer_block_id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
	volunteer_id int4 NOT NULL,
	assessment_start timestamp NULL,
	assessment_end timestamp NULL,
	block_id int4 NULL,
	CONSTRAINT volunteer_topic_pkey PRIMARY KEY (volunteer_block_id),
	CONSTRAINT fk_voulnteers FOREIGN KEY (volunteer_id) REFERENCES volunteers(volunteer_id),
	CONSTRAINT volunteer_blocks_fk FOREIGN KEY (block_id) REFERENCES blocks(block_id)
);

-- Permissions

ALTER TABLE public."volunteer_Blocks" OWNER TO app_user;
GRANT ALL ON TABLE public."volunteer_Blocks" TO app_user;


-- public.questions definition


-- DROP TABLE public.questions;

CREATE TABLE public.questions (
	question_id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
	topic_id int4 NOT NULL,
	question_text varchar(255) NOT NULL,
	CONSTRAINT questions_pkey PRIMARY KEY (question_id),
	CONSTRAINT fk_topics FOREIGN KEY (topic_id) REFERENCES topics(topic_id)
);

-- Permissions

ALTER TABLE public.questions OWNER TO app_user;
GRANT ALL ON TABLE public.questions TO app_user;


-- public.volunteer_answers definition

-- Drop table

-- DROP TABLE public.volunteer_answers;

CREATE TABLE public.volunteer_answers (
	volunteer_block_id int4 NOT NULL,
	question_id int4 NOT NULL,
	answer varchar(255) NOT NULL,
	CONSTRAINT volunteer_answers_pkey PRIMARY KEY (volunteer_block_id, question_id),
	CONSTRAINT fk_questions FOREIGN KEY (question_id) REFERENCES questions(question_id),
	CONSTRAINT volunteer_answers_fk FOREIGN KEY (volunteer_block_id) REFERENCES "volunteer_Blocks"(volunteer_block_id)
);

-- Permissions

ALTER TABLE public.volunteer_answers OWNER TO app_user;
GRANT ALL ON TABLE public.volunteer_answers TO app_user;



-----------------------------------------------------------------------------




