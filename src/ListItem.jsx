import React, { useState } from 'react';
import { useCart } from './CartContext';

const ListItem = React.memo(({ item }) => {
  const [isSelected, setIsSelected] = useState(false);
  const { addItemToCart, removeItemFromCart } = useCart();

  const handleToggle = () => {
    setIsSelected((prevIsSelected) => {
      const newIsSelected = !prevIsSelected;
      if (newIsSelected) {
        addItemToCart(item);
      } else {
        removeItemFromCart(item.id);
      }
      return newIsSelected;
    });
  };

  console.log(`Rendering item: ${item.name}`);

  return (
    <li
      style={{ cursor: 'pointer', color: isSelected ? 'green' : 'black' }}
      onClick={handleToggle}
    >
      {item.name}
    </li>
  );
});

export default ListItem;

