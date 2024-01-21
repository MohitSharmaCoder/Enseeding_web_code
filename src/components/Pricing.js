import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const PricingStyle = ()=>{
    return (
      <style>
        {`
          .pricing-section{
              padding: 0px 100px 70px 100px;
            //   background-color:orange;
              // z-index:10;
          }
          .price-col h2{
            font-size:25px;
            color:#9F005C;
          }
          .price-col .price-h2{
            font-size:25px;
            color:#010101;
          }
          .price-h3{
            font-size:40px;
            color:#9F005C;
          }

          .pricing-section .normal-btn{
            width:170px;
            height:50px;
            font-size:16px;
            color:#ffffff;
            padding:10px 15px;
            background-color:#9F005C;
          }
          

          @media screen and (max-width:1170px){
            .pricing-section{
              padding: 0px 100px;
            }
          }
          
          @media screen and (max-width:960px){
            .pricing-section{
              padding: 0px 40px;
            }
          }
          @media screen and (max-width:768px){
            .pricing-section{
              padding: 0px 15px;
            }
            
          }
        `}
      </style>
    )
  }

const Pricing = () => {
  return (
    <div>
      <section className='pricing-section'>
        <div className="d-flex justify-content-between align-items-center flex-column">
            <div className="col-12 col-md-12 price-col text-center pb-4">
                <h2 className='mb-3'>Pricing Us</h2>
                <h3>Get Business Solutions withSeo.com</h3>
                <p className='mt-3 mb-4'>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet</p>
                <button className='shadow border normal-btn  rounded-5'  target="_blank">
                    <p className='Pricing-btn-text text-white'>See Live Video</p>
                </button>
            </div>
            <div className="mb-3 rounded-3 shadow p-5 col-12 col-md-9 mt-4 price-col d-flex justify-content-between align-items-center flex-wrap">
                <div className="col-12 col-md-3 text-center">
                <h2 className='mb-3 price-h2'>Basic</h2>
                <h3 className='price-h3'>$56</h3>
                </div>
                <div className="col-12 col-md-9 text-center">
                <h4>Buld monthly, no set up free</h4>
                <p className='mt-3 mb-4'>Lorem ipsum ds quis molestiae <br /> Lorem sit amet consectetur <br />adipisic Lorem ipsum ds quis molestiae</p>
                </div>
            </div>
            <div className="col-12 col-md-6 price-col text-center pt-4">
                <h3 className='mb-3'>2 Monthes free when you pay anually</h3>
                <p>All prices in us dollar</p>
            </div>
        </div>
      </section>
      <PricingStyle/>
    </div>
  )
}

export default Pricing
