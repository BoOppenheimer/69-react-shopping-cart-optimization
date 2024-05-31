import React from 'react'
import ReactDOM from 'react-dom/client'
import {useState, useMemo} from 'react'
import './index.css'




// {color: "navy", name: "tiny navy apple"}



const Cart = () => {
  return (
    <h1>hiya</h1>
  )
}

const ListItem = React.memo(({ item }) => {
  return (
  <li 
  className={`List__item List__item--${item.color}`} onClick={() => console.log(item.name)}
  >
    {item.name}
  </li>
  );
});


const MyList = ({ items }) => {
  const renderedItems = useMemo(() => {
    return items.map((item) => (
      <ListItem key={item.name} item={item} />
    ));
  }, [items]);

  return (
    <ul>
      {renderedItems}
    </ul>
  );
};


const List = ({items}) => {

  return (
    <div>
      <Cart/>
      <MyList items={items} />
    </div>
  );
};







//--- dont modify 
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
    <List items={items} />
  </React.StrictMode>,
)
