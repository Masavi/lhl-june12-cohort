import { useState, useReducer } from 'react';

import './App.css';

import Navbar from './components/Navbar';
import ItemList from './components/ItemList';
import Form from './components/Form/Form';

const defaultState = [
  { id: 1, name: 'Magic Tape', description: 'Comes off the roll smoothly, cuts easily' },
  { id: 2, name: 'Stainless Scissors', description: 'For cutting a wide variety of materials including paper, cardboard, and more' },
  { id: 3, name: 'Woodcased #2 Pencils', description: 'trong medium-soft lead produces long-lasting, smooth, readable strokes' },
]

const reducer = (state, action) => {
  if (action.type === 'add_item') {
    return [...state, action.data]
  }

  if (action.type === 'remove_item') {
    const filteredItemsArray = state.filter(item => item.id !== action.id);
    return filteredItemsArray;
  }

  throw Error('Unknown action.');
}

function App() {
  // const [items, setItems] = useState(defaultState);
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <div className="App">
      <Navbar
        // numberOfItems={items.length}
        numberOfItems={state.length} />
      <ItemList
        // items={items}
        // setItems={setItems}
        dispatch={dispatch}
        items={state} />
      <Form
        // items={items}
        // setItems={setItems}
        dispatch={dispatch} />
    </div>
  );
}

export default App;
