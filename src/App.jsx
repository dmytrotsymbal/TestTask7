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
        },
      ]);
      setText("");
    }
  };

  const deleteItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
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
              <li className="itemsListItem" key={item.id}>
                <h4>{item.text}</h4>
                <span className="commentsQuantity">3</span>
                <button onClick={() => deleteItem(item.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="comments">
          <h2>Comments</h2>

          <label>
            <input type="text" />
            <button>Add new</button>
          </label>

          <ul className="commentsList">
            <li className="commentsListItem">
              <div className="colorSquere"></div>
              <h4>bebeb</h4>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default App;
