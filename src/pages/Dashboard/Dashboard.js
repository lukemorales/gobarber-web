import React from 'react';
import api from '@/services/api';
// import {} from './Dashboard_Styles';

export default function Dashboard() {
  api.get('appointments');
  return (
    <>
      <h1>Dashboard Component</h1>
    </>
  );
}
