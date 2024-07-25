import React from 'react'

const CalculateCost = () => {
  return (
    <section className='calculate-section'>
        <div className="background"></div>
      <div className='calculate-con'>
        <div className='left'>
            <h2>Calculate Your Cost</h2>
            <div className='currency'>
                <h6>Currency:</h6>
                <p>MXN</p>
            </div>

            <h6 className='money'>How much money:</h6>
            <input type="range" className='range'/>

            <div className='range-price'>
                <p>$500</p>
                <p>$1000000</p>
            </div>

            <div className='selected-range'>
            <span >$500</span>
            </div>

            <div className='year-sec'>
                <p>Year : </p>
                <select className='select'>
                    <option value="1" >1 year</option>
                    <option value="2">2 year</option>
                    <option value="3">3 year</option>
                    <option value="4">4 year</option>
                </select>
            </div>

            <div className='btn'>
            <button>Java Times Guarantee</button>
            </div>

            <div className='cal-btn'>

            <button >Calculate</button>
            </div>
        </div>

        <div className='right'>
            <h3>
            Result
            </h3>

            <div className='div'>
                <h6>Year Of Investment:</h6>
                <h5>Year 01</h5>
            </div>

            <div className='div'>
                <h6>Investment :</h6>
                <h5>$500</h5>
            </div>

            <div className='div'>
                <h6>Share Price :</h6>
                <h5>$20</h5>
            </div>

            <div className='div'>
                <h6>Investor Shares :</h6>
                <h5>18</h5>
            </div>

            <div className='div'>
                <h6>Profit :</h6>
                <h5>$60</h5>
            </div>

            <div className='div'>
                <h6>Participant:</h6>
                <h5>$350</h5>
            </div>
            
            <div className='div'>
                <h6>Exit:</h6>
                <h5>$410</h5>
            </div>

            

        </div>
      </div>
    </section>
  )
}

export default CalculateCost
