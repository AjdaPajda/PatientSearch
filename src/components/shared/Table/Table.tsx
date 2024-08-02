import React from 'react';
import './Table.css';

interface Column {
  key: string;
  header: string;
}

interface TableProps {
  columns: Column[];
  data: { [key: string]: any }[];
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key}>{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col) => (
              <td key={col.key}>{row[col.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
