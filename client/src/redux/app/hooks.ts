import { useDispatch, useSelector } from 'react-redux';

// Components
import { AppDispatch } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = useSelector;
