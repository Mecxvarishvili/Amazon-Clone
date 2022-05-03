import React from 'react';
import MenuBanner from './MenuBanner';

const MenuPage = () => {

  const categoryData = [
    {
      title: "electronics",
      img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg",
    },
    {
      title: "toys&games",
      img: "",
    },
    {
      title: "beauty&personal-care",
      img: "",
    },
  ]
  
  return (
    <div className="menuCont" >
      <MenuBanner/>
      <div className="categoryLayout" >
        <div className="cardsLayout" >
          <div className="card" >
            <div>title</div>
            <div>img</div>
            <div>shop now</div>
          </div>
          <div className="card">2</div>
          <div className="card">3</div>
          <div className="card">4</div>
          <div className="card">5</div>
          <div className="card">6</div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default MenuPage;