import React from 'react'

const AddCard = ({ item , handleClick}) => {

    const  {name, cover, prices, Categories} = item;
  return (
     <>
     <div className='cards'>
        <div className='image_box'>
            <img src={cover}/>
        </div>
        <div className='details'>
            <p>{name}</p>
            <p>{prices}</p>
            <p>{Categories}</p>
            <button onClick={() =>handleClick(item)}> Add To Cart</button>
        </div>
     </div>
     
     </>
  )
}


    

export default AddCard;