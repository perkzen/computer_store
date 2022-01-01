import React from 'react';
import classes from './Table.module.scss';
import classNames from 'classnames';
import { v4 } from 'uuid';
import { BsTable } from 'react-icons/bs';

export interface TableHeader<T> {
  label: string;
  accessor: keyof T;
}

interface TableProps<T> {
  data: T[];
  headers: TableHeader<T>[];
  className?: string;
}

const Table = <T,>({ data, headers, className }: TableProps<T>) => {
  return (
    <table className={classNames(classes.Table, className)}>
      <thead>
        <tr>
          <th className={classes.Counter} />
          {headers.map((header) => (
            <th key={v4()} align={'center'}>
              <span>{header.label}</span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          <>
            {data.map((dataItem, dataIndex) => (
              <tr key={v4()}>
                <td align={'center'}>{dataIndex + 1}</td>
                {headers.map((header) => (
                  <td key={v4()} align={'center'}>
                    {dataItem[header.accessor]}
                  </td>
                ))}
              </tr>
            ))}
          </>
        ) : (
          <tr>
            <td colSpan={headers.length + 1} className={classes.EmptyTable}>
              <BsTable />
              There is no data in this table yet
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
