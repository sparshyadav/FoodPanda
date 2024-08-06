import React from 'react'

const RestrauntCard = (props) => {
    return (
        <div className='resCard'>
            <img className='resImage' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/8/98c26105-cf68-44ea-a098-d942eb4aa894_866042.jpg" alt="No Image Found" />
            <h3 className='resName'>{props.resName}</h3>
            <h4>Biryani, North India</h4>
            <h4>4.4 Stars</h4>
        </div>
    )
}

export default RestrauntCard
