import React from 'react';
import classes from './PurschaseHistory.module.scss';
import Table, { TableHeader } from '../../ui/Table/Table';
import { useAppSelector } from '../../../app/hooks';
import { Purchase } from '../../../store/models/Purchase';

const headers: TableHeader<Purchase>[] = [
  {
    accessor: 'purchaseId',
    label: 'Purchase ID',
  },
  {
    accessor: 'date',
    label: 'Date',
  },
  {
    accessor: 'total',
    label: 'Total ($)',
  },
];

const PurchaseHistory = () => {
  const { purchaseHistory } = useAppSelector((state) => state.shop);

  return (
    <div className={classes.Container}>
      <h1>Purchase history</h1>
      <div className={classes.TableContainer}>
        <Table data={purchaseHistory} headers={headers} />
      </div>
    </div>
  );
};

export default PurchaseHistory;
