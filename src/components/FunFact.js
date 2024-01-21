import React from 'react';
import WaterWave from './WaterWave';
import 'bootstrap/dist/css/bootstrap.min.css';


const FunStyle = ()=>{
    return (
        <style>
            {`
            .fun-section,.fun-section-two{
                background-color:#9F005C;
            }
            .fun-section-two,.fun-section-three{
                padding:0px 150px;
            }
          .fun-section{
              padding: 0px 100px 0px 100px;
            //   background-color:orange;
              z-index:1001;
              position:relative;
          }
          .fun-fact p{
            color:#ffffff;
          }
          .fun-fact h3{
            color:#ffffff;
          }
          .fun-fact h2{
            font-size:25px;
            color:#ffffff;
          }

          .company-logo img{
            width:150px;
            height:100px;
          }
          @media screen and (max-width:1170px){
            .fun-section{
              padding: 0px 100px;
            }
          }
          
          @media screen and (max-width:960px){
            .fun-section{
              padding: 0px 40px;
            }
          }
          @media screen and (max-width:768px){
            .fun-section{
              padding: 0px 15px;
            }
          }
            `}
        </style>
    )
}
const FunFact = () => {
  return (
    <div>
      <WaterWave/>
      <section className='fun-section pb-5'>
        <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="col-12 col-md-12 fun-fact text-center text-white">
                <h2 className='mb-3'>Our fun-facts</h2>
                <h3>Get Business Solutions withSeo.com</h3>
            </div>
        </div>
      </section>
      <section className="fun-section-two pb-5">
        <div className="d-flex justify-content-between align-items-center flex-wrap">
                <div className="col-6 col-md-3 fun-fact text-center">
                    <h2 className='mb-3'>100</h2>
                    <p>Get Business</p>
                </div>
                <div className="col-6 col-md-3 fun-fact text-center">
                    <h2 className='mb-3'>430</h2>
                    <p>Get Business</p>
                </div>
                <div className="col-6 col-md-3 fun-fact text-center">
                    <h2 className='mb-3'>43</h2>
                    <p>Get</p>
                </div>
                <div className="col-6 col-md-3 fun-fact text-center">
                    <h2 className='mb-3'>546</h2>
                    <p>withSeo.com</p>
                </div>
            </div>
      </section>
      <section className='fun-section-three py-5'>
        <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="col-4 col-md-2 company-logo text-center ">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn2QnZ1IMQtvsRnzI73YfJQq7BIa8wCSctng&usqp=CAU" alt="" />
            </div>
            <div className="col-4 col-md-2 company-logo text-center ">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn2QnZ1IMQtvsRnzI73YfJQq7BIa8wCSctng&usqp=CAU" alt="" />
            </div>
            <div className="col-4 col-md-2 company-logo text-center ">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn2QnZ1IMQtvsRnzI73YfJQq7BIa8wCSctng&usqp=CAU" alt="" />
            </div>
            <div className="col-4 col-md-2 company-logo text-center ">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn2QnZ1IMQtvsRnzI73YfJQq7BIa8wCSctng&usqp=CAU" alt="" />
            </div>
            <div className="col-4 col-md-2 company-logo text-center ">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn2QnZ1IMQtvsRnzI73YfJQq7BIa8wCSctng&usqp=CAU" alt="" />
            </div>
            <div className="col-4 col-md-2 company-logo text-center ">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn2QnZ1IMQtvsRnzI73YfJQq7BIa8wCSctng&usqp=CAU" alt="" />
            </div>
        </div>
      </section>

      <FunStyle/>
    </div>
  )
}

export default FunFact
