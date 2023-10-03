import Item from '../Item';

const ItemList = (props) => {
  return (
    <>
      <h2>Inventory</h2>
      { props.items.map(item => {
          return (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              items={props.items}
              setItems={props.setItems}
              dispatch={props.dispatch}
              />
          )
        })
      }
    </>
  );
}

export default ItemList;