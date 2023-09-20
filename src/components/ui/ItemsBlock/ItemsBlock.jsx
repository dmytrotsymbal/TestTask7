import { useState } from "react";

const ItemsBlock = ({ items, setItems, setSelectedItemId }) => {

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

  return (
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
  );
};
export default ItemsBlock;
