import React from 'react';
import Navbar from '../components/Navbar';
import DetailList from '../components/DetailList';
import DetailTop from '../components/DetailTop';

function OrderDetails() {
  return (
    <div>
      <Navbar />
      <DetailTop />
      <DetailList />
    </div>
  );
}

export default OrderDetails;
