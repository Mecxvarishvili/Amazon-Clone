import React from 'react';
import MenuBanner from './MenuBanner';
import CategoryCard from './CategoryCard';

const MenuPage = () => {

  const categoryData = [
    {
      title: "Gaming accessories",
      category: [
        {
          id: "headset",
          title: "Headsets",
          img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg",
        },
        {
          id: "keyboard",
          title: "Keyboards",
          img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg",
        },
        {
          id: "mouse",
          title: "Computer Mice",
          img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg",
        },
      ]
    },
    {
      title: "Shop by Category",
      category: [
        {
          id: "computers",
          title: "Computers & Accessories",
          img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/computer120x._SY85_CB468850970_.jpg",
        },
        {
          id: "video-games",
          title: "Video Games",
          img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/August/DashboardCard/PS4_120X._SY85_CB438749318_.jpg",
        },
        {
          id: "baby",
          title: "Baby",
          img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Baby120X._SY85_CB468850882_.jpg",
        },
        {
          id: "toys%26games",
          title: "Toys & Games",
          img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Toys120X._SY85_CB468851693_.jpg",
        },
      ]
    },
    {
      id: "beauty%26personal-care",
      title: "Beauty picks",
      img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg",
    },
    {
      id: "dresses",
      title: "Dresses",
      img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/Fuji_dash_dress_1X._SY304_CB626369146_.jpg",
    },
    {
      id: "electronics",
      title: "Electronics",
      img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg",
    },
    {
      id: "health%26household",
      title: "Health & Personal Care",
      img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg",
    },
    {
      id: "computers",
      title: "Computers & Accessories",
      img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg",
    },
  ]

  
  return (
    <div className="menuCont" >
      <MenuBanner/>
      <div className="categoryLayout" >
        <div className="cardsLayout" >
          {categoryData.map((data, i) => (
            <CategoryCard key={i} data={data} i={i} />
          ))}
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default MenuPage;