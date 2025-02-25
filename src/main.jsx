import React from 'react'
import ReactDOM from 'react-dom/client'

import List from './List';


const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 4, name: 'Item 4' },
  { id: 5, name: 'Item 5' },
];




//--- dont modify 
/* 
const sizes = ['tiny', 'small'];
const colors = ['red', 'orange'];
const fruits = ['apple', 'banana'];
// const sizes = ['tiny', 'small', 'medium', 'large', 'huge'];
// const colors = ['navy', 'blue', 'aqua', 'teal', 'olive', 'green', 'lime', 'yellow', 'orange', 'red', 'maroon', 'fuchsia', 'purple', 'silver', 'gray', 'black'];
// const fruits = ['apple', 'banana', 'watermelon', 'orange', 'peach', 'tangerine', 'pear', 'kiwi', 'mango', 'pineapple'];

const items = sizes.reduce(
  (items, size) => [
    ...items,
    ...fruits.reduce(
      (acc, fruit) => [
        ...acc,
        ...colors.reduce(
          (acc, color) => [
            ...acc,
            {
              name: `${size} ${color} ${fruit}`,
              color,
            },
          ],
          [],
        ),
      ],
      [],
    ),
  ],
  [],
);

*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <List items={items}/>
  </React.StrictMode>,
)
