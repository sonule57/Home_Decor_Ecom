import React from 'react'
import WallData from './WallData'
const Wall = () => {
  return (
    <>
    
    <div className='container'>
                <div className='row'>
                    {
                        WallData.map((cval) => {

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
                                                <a href="#" class="btn btn-success">View Product</a>
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
    </>
  )
}

export default Wall;