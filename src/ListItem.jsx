import React, { useState } from 'react';
import { useCart } from './CartContext';

const ListItem = React.memo(({ item }) => {
  const [isSelected, setIsSelected] = useState(false);
  const { addToCart, removeFromCart } = useCart();

  const handleToggle = () => {
    setIsSelected((prevSelected) => {
      const newSelected = !prevSelected;
      if (newSelected) {
        addToCart(item);
      } else {
        removeFromCart(item.id);
      }
      return newSelected;
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
