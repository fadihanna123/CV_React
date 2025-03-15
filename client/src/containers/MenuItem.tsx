import { Link } from 'react-router-dom';
import React from 'react';
import { setContactForm, setContactFormAlert } from '../redux/reducers';
import useReduxConsts from '@hooks/useReduxConsts';

const MenuItem: React.FC<{
  item: Menu;
}> = ({ item }: { item: Menu }) => {
  const { dispatch } = useReduxConsts();

  return (
    <Link
      className={item.classname}
      to={item.pathroute}
      onClick={() => {
        dispatch(
          setContactForm({
            fullname: '',
            mail: '',
            msg: '',
            phone: '',
          })
        );

        dispatch(setContactFormAlert(false));
      }}
    >
      <i className={`fa-solid ${item.icon}`}></i> {item.title}
    </Link>
  );
};

export default MenuItem;
