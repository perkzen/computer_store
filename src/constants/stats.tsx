import { ReactNode } from 'react';
import { FaCashRegister } from 'react-icons/fa';
import { MdOutlineSentimentVerySatisfied } from 'react-icons/md';
import { BsFillPersonFill } from 'react-icons/bs';

export interface Stat {
  label: string;
  value: number;
  info: string;
  icon?: ReactNode;
}

export const stats: Stat[] = [
  {
    label: 'Items Sold',
    value: 85679,
    info: '10% more than last year',
    icon: <FaCashRegister />,
  },
  {
    label: 'Satisfied Costumers',
    value: 10335,
    info: '25% more than last year',
    icon: <MdOutlineSentimentVerySatisfied />,
  },
  {
    label: 'Total Visitors',
    value: 989274,
    info: '15% more than last year',
    icon: <BsFillPersonFill />,
  },
];
