

import React from 'react';

import Header from '../Login/components/Header';
import Sidebar from '../Login/Sidebar';
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
      <Header />
      <div className="content-container">
        <Sidebar className="sidebar" />
        <div className="main-content">
          <h1>Dashboard</h1>
          <div className="table-container">
            <Table columns={columns} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

                
