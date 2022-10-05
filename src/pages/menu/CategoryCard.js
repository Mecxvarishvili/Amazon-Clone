import React from 'react';
import { SEARCH_PAGE } from '../routes';
import { Link } from 'react-router-dom';

const CategoryCard = (props) => {
    const { data, i } = props
    return (
        data.category ?
        <div className="card" >
            <div className='title'>{data.title}</div>
            {i == 0 ?
            <div className='catCont'>
                {data.category.map(cat => (
                    <div className="catBox" key={cat.id} >
                        <Link to={SEARCH_PAGE + `?search=${cat.id}`} >
                        <img src ={cat.img} className="catImg" />
                        <div className='catTitle' >{cat.title}</div>
                        </Link>
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
                        <Link className='aTag' to={SEARCH_PAGE + `?category=${cat.id}`} ></Link>
                    </div>
                ))}
                </div>
            }
        </div>
        :
        <div className="card" >
          <div className='title'>{data.title}</div>
          <Link to={SEARCH_PAGE+`?category=${data.id}`} className="linkCont submitButton" >
              <img src={data.img} className="img" />
          </Link>
          <Link to={SEARCH_PAGE+`?category=${data.id}`} className="shopA submitButton">
            <div className="shopNow" >see more</div>
          </Link>
        </div>
    );
};

export default CategoryCard;