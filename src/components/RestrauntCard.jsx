import React from 'react'

const RestrauntCard = (props) => {
    // console.log(props);
    const imageURL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + props.resData.info.cloudinaryImageId;
    return (
        <div className='resCard'>
            <img className='resImage' src={imageURL} alt="No Image Found" />
            <h3 className='resName'>{props.resData.info.name}</h3>
            <h4>{props.resData.info.cuisines.join(", ")}</h4>
            <h4>{props.resData.info.avgRating}</h4>
        </div>
    )
}

export default RestrauntCard
