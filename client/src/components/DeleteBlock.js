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
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <button
        className="btn btn-danger"
        style={{ height: "38px", width: "70px", fontSize: "small" }}
        onClick={() => deleteBlock(id)}
      >
        DELETE
      </button>
    </div>
  );
};
export default DeleteBlock;
