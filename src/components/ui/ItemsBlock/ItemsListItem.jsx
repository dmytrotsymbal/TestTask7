const ItemsListItem = ({ item, deleteItem }) => {
  return (
    <li className="itemsListItem">
      <h4>{item.text}</h4>
      <div className="right">
      <span className="commentsQuantity">{item.comments.length}</span>
      <button onClick={() => deleteItem(item.id)}>Delete</button>
      </div>
    </li>
  );
};
export default ItemsListItem;
