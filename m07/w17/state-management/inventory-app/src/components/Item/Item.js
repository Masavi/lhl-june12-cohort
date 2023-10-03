import './Item.css';

const Item = (props) => {

  const handleDelete = () => {
    // const filteredItemsArray = props.items.filter(item => item.id !== props.id);
    // props.setItems(filteredItemsArray);
    props.dispatch({ type: 'remove_item', id: props.id });
  }

  return (
    <article>
      <p className="name">{props.name}</p>
      <p className="description">{props.description}</p>
      <button onClick={handleDelete}>Delete</button>
    </article>
  );
}

export default Item;