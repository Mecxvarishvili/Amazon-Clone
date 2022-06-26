import React from 'react';
import { SEARCH_PAGE } from '../routes';

const MenuCard = (props) => {
    const { data, i } = props
    const Link = window.location.href
    return (
        data.category ?
        <div className="card" >
            <div className='title'>{data.title}</div>
            {i == 0 ?
            <div className='catCont'>
                {data.category.map(cat => (
                    <div className="catBox" key={cat.id} >
                        <a href={Link + `s?search=${cat.id}`} >
                        <img src ={cat.img} className="catImg" />
                        <div className='catTitle' >{cat.title}</div>
                        </a>
                    </div>
                ))}
                </div>:
                <div className='catCont2'>
                {data.category.map(cat => (
                    <div className="catBox2" key={cat.id} >
                        <div>
                            <img src ={cat.img} className="catImg" />
                        </div>
                        <div className='catTitle' >{cat.title}</div>
                        <a className='aTag' href={Link + `s?category=${cat.id}`} ></a>
                    </div>
                ))}
                </div>
            }
        </div>
        :
        <div className="card" >
          <div className='title'>{data.title}</div>
          <a href={Link + `s?category=${data.id}`} className="linkCont submitButton" >
              <img src={data.img} className="img" />
          </a>
          <a href={Link + `s?category=${data.id}`} className="shopA submitButton">
            <div className="shopNow" >see more</div>
          </a>
        </div>
    );
};

export default MenuCard;