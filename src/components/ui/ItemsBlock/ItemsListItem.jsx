const ItemsListItem = ({
  item,
  deleteItem,
  setSelectedItemId,
  selectedItemId,
}) => {
  return (
    <li
      className={
        item.id === selectedItemId ? "itemsListItem_Selected" : "itemsListItem"
      }
      key={item.id}
      onClick={() => setSelectedItemId(item.id)}
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
