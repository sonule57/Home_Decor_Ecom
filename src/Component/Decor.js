import React, { useState } from 'react'

import DumData from './DumData'
const Decor = () => {
  
    
    const [data, setData] = useState(DumData);

    const FilterItems = (enteredCategory) => {
        const updatedItems = DumData.filter((current) => {
            return current.Categories === enteredCategory;
        });
        console.log(updatedItems);
        setData(updatedItems);
    }

    return (
        <div>
            
            <div className='order-tab container mt-5'>
                <div className='order-tab d-flex justify-content-around'>
                    <button className="btn btn-warning" onClick={() => setData(DumData)}>All</button>
                    <button className="btn btn-warning" onClick={() => FilterItems('Wall Decor')}>Wall Decor</button>
                    <button className="btn btn-warning" onClick={() => FilterItems('Dining Decor')}>Dining Decor</button>
                    <button className="btn btn-warning" onClick={() => FilterItems('Table Decor')}>Table Decor</button>
                    <button className="btn btn-warning" onClick={() => FilterItems('Kitchen Decor')}>Kitchen Decor</button>
                </div>

            </div>
            <div className='container'>
                <div className='row'>
                    {
                        data.map((cval) => {

                            return (
                                <>
                                
                                    <div className='col-md-4 mt-4'>
                                        <div class="card">
                                            <img src={cval.cover} class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">{cval.name}</h5>
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                
                                                <p>Prices:{cval.prices}</p>
                                                <p>Category:{cval.Categories}</p>
                                                <a href={cval.buylink} class="btn btn-success">View Product</a>
                                            </div>
                                        </div>
                                    </div>
                              </>
                            )
                        }


                        )

                    }

                </div>
            </div>
         </div>
  )
} 

export default Decor; 