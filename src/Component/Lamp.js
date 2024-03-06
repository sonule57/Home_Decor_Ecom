import React from 'react'
import Card from '../Ui/Card'
import LampData from '../LampData'

const Lamp = () => {
  return (
    <>
      <div className="container-map">
        <div className='row'>
          {
            LampData.map((cval) => {
              return (
                <>
                  <div className='col-md-4'>
                    <Card
                      name={cval.name}
                      cover={cval.cover}
                      prices={cval.prices}
                      buylink={cval.buylink} />
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

export default Lamp;