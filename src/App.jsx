import "./App.scss";
import { useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const addNew = () => {
    if (text.trim().length) {
      setItems([
        ...items,
        {
          id: new Date().toISOString(),
          text: text,
          comments: [],
        },
      ]);
      setText("");
    }
  };

  const deleteItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  const [selectedItemId, setSelectedItemId] = useState(null);
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
    <div className="App">
      <aside>
        <h2>DIARY APP</h2>
        <p>Comment with no sense</p>
      </aside>

      <section className="content">
        <div className="items">
          <h2>Items</h2>

          <label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button onClick={addNew}>Add new</button>
          </label>
          <ul className="itemsList">
            {items.map((item) => (
              <li
                className="itemsListItem"
                key={item.id}
                onClick={() => setSelectedItemId(item.id)}
              >
                <h4>{item.text}</h4>
                <span className="commentsQuantity">{item.comments.length}</span>
                <button onClick={() => deleteItem(item.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>

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
      </section>
    </div>
  );
};

export default App;
