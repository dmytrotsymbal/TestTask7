const ItemsListItem = ({
  item,
  deleteItem,
  setSelectedItemId,
  selectedItemId,
}) => {
  const onChangeSelectedItem = () => {
    setSelectedItemId(item.id);
    localStorage.setItem("selectedItemId", JSON.stringify(item.id));
  };

  return (
    <li
      className={
        item.id === selectedItemId ? "itemsListItem_Selected" : "itemsListItem"
      }
      key={item.id}
      onClick={onChangeSelectedItem}
    >
      <h4>{item.text}</h4>
      <div className="right">
        <span className="commentsQuantity">{item.comments.length}</span>
        <button onClick={() => deleteItem(item.id)}>Delete</button>
      </div>
    </li>
  );
};
export default ItemsListItem;
