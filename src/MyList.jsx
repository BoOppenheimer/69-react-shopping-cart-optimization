import ListItem from './ListItem';

const MyList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default MyList;
