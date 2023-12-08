import { Link } from 'react-router-dom';
import React from 'react';
import { useAppDispatch } from 'redux/app';
import { setContactForm, setContactFormAlert } from 'redux/reducers';

const MenuItem: React.FC<{
  item: Menu;
}> = ({ item }: { item: Menu }) => {
  const dispatch = useAppDispatch();

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
      <i className={item.icon}></i> {item.title}
    </Link>
  );
};

export default MenuItem;
