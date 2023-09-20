import { useState } from "react";

const CommentsBlock = ({ selectedItemId, items, setItems }) => {
  const [commentText, setCommentText] = useState("");

  const addComment = () => {
    if (commentText.trim().length && selectedItemId !== null) {
      const updatedItems = items.map((item) =>
        item.id === selectedItemId
          ? { ...item, comments: [...item.comments, commentText] }
          : item
      );
      setItems(updatedItems);
      setCommentText("");
    }
  };

  return (
    <div className="comments">
      <h2>Comments</h2>
      <label>
        <input
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button onClick={addComment}>Add new</button>
      </label>
      {selectedItemId !== null && (
        <ul className="commentsList">
          {items
            .find((item) => item.id === selectedItemId)
            ?.comments.map((comment, index) => (
              <li className="commentsListItem" key={index}>
                <div className="colorSquere"></div>
                <h4>{comment}</h4>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};
export default CommentsBlock;
