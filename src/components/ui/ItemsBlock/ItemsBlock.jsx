import { useState } from "react";
import ItemsListItem from "./ItemsListItem";
import "../../../styles/ItemsBlock.scss";

const ItemsBlock = ({ items, setItems, selectedItemId, setSelectedItemId }) => {
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
          placeholder="Type name here..."
        />
        <button onClick={addNew}>Add new</button>
      </label>
      <ul className="itemsList">
        {items.map((item) => (
          <ItemsListItem
            key={item.id}
            item={item}
            deleteItem={deleteItem}
            setSelectedItemId={setSelectedItemId}
            selectedItemId={selectedItemId}
          />
        ))}
      </ul>
    </div>
  );
};
export default ItemsBlock;
