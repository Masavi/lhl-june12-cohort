import { useState } from 'react';

import './Form.css';

const Form = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = { id: 10, name: name, description: description }
    // const newArray = [ ...props.items, newItem ];
    // props.setItems(newArray) // [1, 2, 3, newItem]
    props.dispatch({ type: 'add_item', data: newItem });
  }

  return (
    <>
      <h2 className="component-title">Add Item Form </h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text" />

        <label>Description</label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text" />

        <button type='submit'> Add Item </button>
      </form>
    </>
  );
}

export default Form;