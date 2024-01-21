import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const Herostyle = ()=>{
    return (
      <style>
        {`
          .hero-section{
              padding: 0px 100px 0px 100px;
              // background-color:orange;
              // z-index:10;
          }

          .hero-section .normal-btn{
            width:170px;
            height:50px;
            font-size:16px;
            color:#ffffff;
            padding:10px 15px;
            background-color:#9F005C;
          }
          .hero-section .react-icon{
            font-size:18px;
            padding-top:4px;
            color:#ffffff;
          }
          .hero-img img{
            width:100%;
            height:400px;
          }

          @media screen and (max-width:1170px){
            .hero-section{
              padding: 0px 100px;
            }
          }
          
          @media screen and (max-width:960px){
            .hero-section{
              padding: 0px 40px;
            }
          }
          @media screen and (max-width:768px){
            .hero-section{
              padding: 0px 15px;
            }
            .hero-img img{
              width:100%;
              height:300px;
            }
          }
        `}
      </style>
    )
  }

const Hero = () => {
  return (
    <div>
      <section className='hero-section bd-danger'>
        <div className="row d-flex justify-content-between align-items-center">
            <div className="col-12 col-md-6">
                <h1>Get Business Solutions withSeo.com</h1>
                <p className='mt-3 mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum eveniet unde amet?</p>
                <a className='shadow border normal-btn d-flex justify-content-between text-decoration-none rounded-5' rel="noreferrer" href="https://www.youtube.com/watch?v=2ZSdhEKB5no" target="_blank">
                    <p className='hero-btn-text text-white'>See Live Video</p>
                    <p className='re-one'><i class="react-icon fa-regular fa-circle-play"></i></p> 
                </a>
            </div>
            <div className="hero-img col-12 col-md-6">
                <img src="./images/navbar/w2.png" alt="" />
            </div>
        </div>
      </section>
      <Herostyle/>
    </div>
  )
}

export default Hero
