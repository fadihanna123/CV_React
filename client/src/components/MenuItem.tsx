import { Menu } from 'models';
import { Link } from 'react-router-dom';

export const MenuItem: React.FC<{
  item: Menu;
}> = ({ item }: { item: Menu }) => (
  <Link className={item.classname} to={item.pathroute}>
    {item.title}
  </Link>
);
