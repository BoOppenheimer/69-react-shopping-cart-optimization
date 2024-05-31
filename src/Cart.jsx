import { useCart } from './CartContext';

const Cart = () => {
  const { selectedItems } = useCart();

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {Object.values(selectedItems).map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;

