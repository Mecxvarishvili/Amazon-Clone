import React from 'react';

const StarRating = (props) => {
    const star = props.star

    const handleStar = (x) => {
        switch(x) {
            case 5:
                return <img src={`../stars/star${x}.png`} />
            case 4.5:
                return <img src={`../stars/star${x}.png`} />
            case 4:
                return <img src={`../stars/star${x}.png`} />
            case 3:
                return <img src={`../stars/star${x}.png`} />
            case 3.5:
                return <img src={`../stars/star${x}.png`} />
            case 2:
                return <img src={`../stars/star${x}.png`} />
            case 2.5:
                return <img src={`../stars/star${x}.png`} />
            case 1.5:
                return <img src={`../stars/star${x}.png`} />
            case 1:
                return <img src={`../stars/star${x}.png`} />
            case 0.5:
                return <img src={`../stars/star${x}.png`} />
            case 0:
                return <img src={`../stars/star${x}.png`} />
        }
    }

    const round = (x) => {
        return Math.round(x / 0.5) * 0.5
    }

    return (
        <div className="starCont" >
            {handleStar(round(star))}
        </div>
    );
};

export default StarRating;