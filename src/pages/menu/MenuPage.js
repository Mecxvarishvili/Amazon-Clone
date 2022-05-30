import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORY_PAGE } from '../routes';
import MenuBanner from './MenuBanner';

const MenuPage = () => {

  const categoryData = [
    {
      title: "Gaming accessories",
      category: [
        {
          id: "headsets",
          title: "Headsets",
          img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg",
        },
        {
          id: "keyboards",
          title: "keyboards",
          img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg",
        },
        {
          id: "computer-mice",
          title: "computer mice",
          img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg",
        },
      ]
    },
    {
      title: "Shop by Category",
      category: [
        {
          id: "computers&accessories",
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
          id: "toys&games",
          title: "Toys & Games",
          img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Toys120X._SY85_CB468851693_.jpg",
        },
      ]
    },
    {
      id: "computers&accessories",
      title: "Computers & Accessories",
      img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg",
    },
    {
      id: "beauty",
      title: "Beauty picks",
      img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg",
    },
    {
      id: "dress",
      title: "Dresses",
      img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/Fuji_dash_dress_1X._SY304_CB626369146_.jpg",
    },
    {
      id: "electronics",
      title: "Electronics",
      img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg",
    },
    {
      id: "health&personal-care",
      title: "Health & Personal Care",
      img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg",
    },
  ]
  
  return (
    <div className="menuCont" >
      <MenuBanner/>
      <div className="categoryLayout" >
        <div className="cardsLayout" >
          {categoryData.map(data => (
            data.category ?
            <div className="card" key={data.title}>
              <div className='title'>{data.title}</div>
              <div className='catCont'>
                {data.category.map(cat => (
                <div className="catBox" key={cat.id} >
                  <Link to={CATEGORY_PAGE.replace(":id", cat.id)} >
                    <img src ={cat.img} className="catImg" />
                  </Link>
                  <div className='catTitle' >{cat.title}</div>
                </div>
                ))}
              </div>
              {/* <Link className="shopA" to={CATEGORY_PAGE.replace(":id", data.id)} >
                <div className="shopNow" >shop now</div>
              </Link> */}
            </div>
            :
            <div className="card"  key={data.id}>
              <div className='title'>{data.title}</div>
              <div className="linkCont" >
                <Link to={CATEGORY_PAGE.replace(":id", data.id)} >
                  <img src={data.img} className="img" />
                </Link>
              </div>
              <Link className="shopA" to={CATEGORY_PAGE.replace(":id", data.id)} >
                <div className="shopNow" >see more</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default MenuPage;