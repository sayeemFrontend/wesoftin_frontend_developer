import { createContext } from 'react';
import myImage from './my.png';
const defaultContext = { name: 'Md. Amanullah Sayeem', image: myImage, score: 0 };
export const MyselfContext = createContext(defaultContext);
