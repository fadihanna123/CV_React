import { Link } from 'react-router-dom';
import React from 'react';
import { useAppDispatch } from 'redux/app';
import { setContactForm, setContactFormAlert } from 'redux/reducers';

export const MenuItem: React.FC<{
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
      {item.title}
    </Link>
  );
};
