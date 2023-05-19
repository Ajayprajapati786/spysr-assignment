import React from 'react'
import cnn from '../images/CNN.svg'
import forbse from '../images/Forbes.svg'
import fortune from '../images/Fortune.svg'
import wired from '../images/Wired.svg'
import wsj from '../images/WSJ.svg'
import london from '../images/London-Stock-Exchange.svg'


const Component3 = () => {
  return (
    <div className='component3'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4 col-md-4 pictures col-sm-6 d-flex align-items-center justify-content-center'>
                    <img src={cnn} className='img-fluid'/>
                </div>
                <div className='col-lg-4 col-md-4 pictures col-sm-6 d-flex align-items-center justify-content-center'>
                    <img src={forbse} className='img-fluid'/>
                </div>
                <div className='col-lg-4 col-md-4 pictures col-sm-6 d-flex align-items-center justify-content-center'>
                    <img src={fortune} className='img-fluid'/>
                </div>
                <div className='col-lg-4 col-md-4 pictures col-sm-6 d-flex align-items-center justify-content-center'>
                    <img src={wired} className='img-fluid'/>
                </div>
                <div className='col-lg-4 col-md-4 pictures col-sm-6 d-flex align-items-center justify-content-center'>
                    <img src={wsj} className='img-fluid'/>
                </div>
                <div className='col-lg-4 col-md-4 pictures col-sm-6 d-flex align-items-center justify-content-center'>
                    <img src={london} className='img-fluid'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Component3