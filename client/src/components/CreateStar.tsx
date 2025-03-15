import { Icon } from '@styles/index';
import Star from '@assets/star.png';

const createStar: React.FC<{ count: number; alt: string }> = ({
  count,
  alt,
}: {
  count: number;
  alt: string;
}) => {
  const grids: React.JSX.Element[] = [];
  for (let i = 1; i <= count; i++) {
    grids.push(<Icon key={i} src={Star} alt={alt} />);
  }

  return grids;
};

export default createStar;
