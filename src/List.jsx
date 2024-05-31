
import { CartProvider } from './CartContext';
import MyList from './MyList';
import Cart from './Cart';
const List = ({ items }) => {
  return (
    <CartProvider>
      <div>
        <Cart/>
        <MyList items={items} />
      </div>
    </CartProvider>
  );
};

export default List