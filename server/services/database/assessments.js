const { Pool } = require("pg");
const config = require("../../config");
const pool = new Pool(config);


const getAllAssessments = () => {
	return pool.query("select * from assessments").then((result) => result.rows);
};

module.exports = {
	getAllAssessments,
};