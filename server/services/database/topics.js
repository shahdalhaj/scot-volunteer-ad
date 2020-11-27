const { Pool } = require("pg");
const config = require("../../config");
const pool = new Pool(config);


const getAllTopics = () => {
	return pool.query("select * from topics")
		.then((result) => result.rows);
};

const getTopicById=(id)=> {

	return pool
		.query("SELECT * FROM topics WHERE topic_id =$1", [id])
		.then((result) => result.rows[0]);


};
const createNewTopic=( newTopicName ,documentName, documentLink)=> {

	const query = "INSERT INTO topics (topic_name, document_name, document_link) VALUES ($1,$2,$3)";

	return pool
		.query(query, [newTopicName ,documentName, documentLink ]);
};

const getAllQuestions = (id) => {
	return pool.query("select * from questions where topic_id = $1" ,[id])
		.then((result) => result.rows);
};

const createNewQuestion =( id, newQuestion)=> {


	const query = "INSERT INTO questions (topic_id, question_text) VALUES ($1,$2)";

	return pool
		.query(query, [id, newQuestion]);
};
const updateQuestion =(id, newQuestion)=> {
	const query = "UPDATE questions SET  question_text=$1 where topic_id=$2 ";
	return pool
	  .query(query, [newQuestion, id])
	  .then(() => {
			return  getAllQuestions (id);
		});

};

module.exports = {
	getAllTopics,
	getTopicById,
	createNewTopic,
	getAllQuestions,
	createNewQuestion,
	updateQuestion,
};