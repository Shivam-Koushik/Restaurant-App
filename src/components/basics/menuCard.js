import React from 'react'
function menuCard({menuData}) {

  return (
    <>
      <section className='main-card--cointainer'>
       {menuData.map((currElem)=>{
        const {id,name,category,image,description} = currElem
            return (
                <>
                   <div className='card-container' key={id}>
                    <div className='card'>
                        <div className='card-body'>
                            <span className='card-number card-circle subtle'>{id}</span>
                            <span className='card-author subtle'>{name}</span>
                            <h2 className='card-title'>{name}</h2>
                            <span className='card-description subtle'>{description}</span>
                          <div className='car d-read'>Read more..</div>
                      </div>
                      <img src={currElem.image} alt="images" className='card-media'/>
                      <span className='card-tag subtle'>Order Now</span>
                  </div>
              </div>  
              </>
                 )
             })
        }
        </section>
    </>
  )
}

export default menuCard;
