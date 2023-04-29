import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = useSelector;
