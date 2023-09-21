import "../src/styles/App.scss";
import ItemsBlock from "./components/ItemsBlock/ItemsBlock";
import CommentsBlock from "./components/CommentsBlock/CommentsBlock";
import Sidebar from "./components/Sidebar/Sidebar";
import { useLayoutEffect, useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);

  useLayoutEffect(() => {
    const defaultItems = localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items"))
      : [];
    setItems(defaultItems);

    const defaultSelectedItemId = localStorage.getItem("selectedItemId")
      ? JSON.parse(localStorage.getItem("selectedItemId"))
      : null;
    setSelectedItemId(defaultSelectedItemId);
  }, []);

  return (
    <div className="App">
      <Sidebar />

      <section className="content">
        <ItemsBlock
          items={items}
          setItems={setItems}
          setSelectedItemId={setSelectedItemId}
          selectedItemId={selectedItemId}
        />

        <CommentsBlock
          items={items}
          setItems={setItems}
          selectedItemId={selectedItemId}
        />
      </section>
    </div>
  );
};

export default App;
