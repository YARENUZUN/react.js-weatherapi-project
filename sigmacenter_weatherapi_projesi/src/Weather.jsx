import React from 'react'



export default function Weather({date,mintemp,maxtemp,condition,icon}) {


  return (


    <div>

      <div className="result">
          <div className="container">
            <div className="row">

              <div className="col">
                  <div className="card">
                      <div className="card-title text-center">
                          <h6>{date}</h6>
                      </div>

                      <div className="card-body text-center">
                        <img src={icon} alt=''/>
                      </div>

                      <div className="card-footer text-center">
                        {condition} <br/>
                        <h6 className='mt-3'>{mintemp} °C / {maxtemp} °C</h6>
                      </div>
               </div>
              </div>
            </div>
          </div>
        </div>

    </div>
      
  )
}

// ? ilk önce liste şeklinde yapmıştım fakat tasarımsal olarak beğenmediğim için değiştirdim.
{/* <h6>{date}</h6>
        <ul>
            <li><img src={icon} alt=''/></li>
            <li>{condition}</li>
            <li>{mintemp} °C / {maxtemp} °C</li>
        </ul> */}