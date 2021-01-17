const { Pool } = require("pg");
const config = require("../../config");
const pool = new Pool(config);

const getAllBlocks = () => {
	return pool.query("select * from blocks order by block_id").then((result) => result.rows);
};

const getBlockById = (id) => {
	return pool
		.query("SELECT * FROM blocks WHERE block_id =$1", [id])
		.then((result) => result.rows[0]);
};
const createNewBlock = (newBlockName) => {
	const query = "INSERT INTO blocks (block_name) VALUES ($1)";

	return pool.query(query, [newBlockName]).then(() => {
		return getAllBlocks();
	});
};

const updateBlock = (newBlocklName, blockId) => {
	const query = "UPDATE blocks SET  block_name=$1 where block_id=$2 ";
	return pool
		.query(query, [newBlocklName, blockId])
		.then(() => getBlockById(blockId));
};
const deleteSelectedBlock= ( blockId) => {
	return pool

	//.query("DELETE FROM questions WHERE topic_id =$1", [topicId])

  	.query("DELETE FROM topics WHERE block_id=$1", [blockId])

		.then(() => {
			pool.query("DELETE FROM blocks WHERE block_id=$1", [blockId]);
		})
		.then(() => getAllBlocks());
};
module.exports = {
	getAllBlocks,
	getBlockById,
	createNewBlock,
	updateBlock,
	deleteSelectedBlock,
};
