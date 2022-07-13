import React from 'react';
import FirstContainerContent from './FirstContainerContent/FirstContainerContent';
import SecondContainerContent from './SecondContainerContent/SecondContainerContent';
import BestSellers from './Best-sellers/Best-sellers';
import ShopContent from './ShopContent/ShopContent';
import './Main.css';

function Main() {
  return (
    <div className="main">
      <FirstContainerContent />
      <SecondContainerContent />
      <BestSellers />
      <ShopContent />
    </div>
  );
}

export default Main;
