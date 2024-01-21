import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const ServiceStyle = ()=>{
    return (
      <style>
        {`
          .service-section{
              padding: 70px 100px 40px 100px;
            //   background-color:orange;
              // z-index:10;
          }
          .service h2{
            font-size:25px;
            color:#9F005C;
          }

          @media screen and (max-width:1170px){
            .service-section{
              padding: 0px 100px;
            }
          }
          
          @media screen and (max-width:960px){
            .service-section{
              padding: 0px 40px;
            }
          }
          @media screen and (max-width:768px){
            .service-section{
              padding: 0px 15px;
            }
          }
        `}
      </style>
    )
  }
//   variableWidth: true
const Services = () => {
  return (
    <div>
      <section className='service-section bd-danger'>
        <div className="row d-flex justify-content-between align-items-center">
            <div className="col-12 col-md-12 service text-center">
                <h2 className='mb-3'>Our Services</h2>
                <h3>Get Business Solutions withSeo.com</h3>
            </div>
        </div>
      </section>
      <ServiceStyle/>
    </div>
  )
}

export default Services
