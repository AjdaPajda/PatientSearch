


import React from 'react';
import './Dashboard.css';
import Header from '../Login/components/Header';
import VerticalRectangle from '../Login/Sidebar';
import Table from '../shared/Table/Table';

const columns = [
  { key: 'name', header: 'NAME' },
  { key: 'bodyPart', header: 'CHURCHE' },
  { key: 'gender', header: 'GENDER' },
  { key: 'datum', header: 'DATUM' },
  { key: 'zeit', header: 'VRIJEME' },
  { key: 'status', header: 'STATUS' },
];

const data = [
  { name: 'Chris Schmit', bodyPart: 'knie', gender: 'Manlich', datum: '12. november', zeit: '10 AM', status: 'in Terapie' },
  { name: 'Chris Schmit', bodyPart: 'knie', gender: 'Manlich', datum: '12. november', zeit: '10 AM', status: 'in Terapie' },
  { name: 'Chris Schmit', bodyPart: 'knie', gender: 'Manlich', datum: '12. november', zeit: '10 AM', status: 'in Terapie' },
  { name: 'Chris Schmit', bodyPart: 'knie', gender: 'Manlich', datum: '12. november', zeit: '10 AM', status: 'in Terapie' },
  { name: 'Chris Schmit', bodyPart: 'knie', gender: 'Manlich', datum: '12. november', zeit: '10 AM', status: 'in Terapie' },
];

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <VerticalRectangle className="sidebar" />
      <div className="content-container">
        <div className="header-container">
          <Header />
        </div>
        <div className="table-container">
          <Table columns={columns} data={data.map(row => ({
            ...row,
            status: <button className="button">{row.status}</button>
            
          }))} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;