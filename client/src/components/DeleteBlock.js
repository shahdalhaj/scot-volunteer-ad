import React from "react";

const DeleteBlock = ({ id, blocks, setBlocks }) => {
  const deleteBlock = id => {
    const TOKEN = localStorage.getItem("token");

    fetch(`/api/blocks/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    })
      .then(res => res.json())
      .then(() => setBlocks(blocks.filter(block => block.block_id !== id)))
      .catch(error => {
        console.log(error + "error fetching");
      });
  };
  return (
    <div>
      <button className="btn btn-danger" onClick={() => deleteBlock(id)}>
        DELETE me
      </button>
    </div>
  );
};
export default DeleteBlock;
