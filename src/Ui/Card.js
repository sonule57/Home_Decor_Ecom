import React from 'react'
import classes from './Card.module.css';
const Card = (props) => {
  return (
    <div>
        
        <div className= {`col-md-4 mt-4 ${classes.card}`}>
                <div class="card">
                    <img src={props.cover} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{props.name}</h5>

                        <p> Prices:{props.prices}</p>
                        <p>Category:{props.category}</p>
                        <a href={props.buylink} class="btn btn-success">View Product</a>
                         
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Card;