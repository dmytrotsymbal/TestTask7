import "../src/styles/App.scss";
import ItemsBlock from "./components/ui/ItemsBlock/ItemsBlock";
import CommentsBlock from "./components/ui/CommentsBlock/CommentsBlock";
import { useState } from "react";
import Sidebar from "./components/ui/Sidebar/Sidebar";

const App = () => {
  const [items, setItems] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);

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
