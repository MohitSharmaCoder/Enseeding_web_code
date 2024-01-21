import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import WaterWave from './WaterWave';
const AboutStyle = ()=>{
    return (
      <style>
        {`
          .about-section{
              padding: 0px 100px 0px 100px;
            //   background-color:orange;
              // z-index:10;
          }
          .about-us h2{
            font-size:25px;
            color:#9F005C;
          }

          .about-section .normal-btn{
            width:170px;
            height:50px;
            font-size:16px;
            color:#ffffff;
            padding:10px 15px;
            background-color:#9F005C;
          }
          .about-section .react-icon{
            font-size:18px;
            padding-top:4px;
            color:#ffffff;
          }
          .about-img img{
            width:100%;
            height:400px;
          }

          @media screen and (max-width:1170px){
            .about-section{
              padding: 0px 100px;
            }
          }
          
          @media screen and (max-width:960px){
            .about-section{
              padding: 0px 40px;
            }
          }
          @media screen and (max-width:768px){
            .about-section{
              padding: 0px 15px;
            }
            .about-img img{
              width:100%;
              height:300px;
            }
          }
        `}
      </style>
    )
  }

const About = () => {
  return (
    <div>
      <section className='about-section bd-danger'>
        <div className="row d-flex justify-content-between align-items-center">
            <div className="about-img col-12 col-md-7">
                <img src="./images/navbar/w2.png" alt="" />
                <div style={{height:"70px", overflow:"hidden"}}>
                <WaterWave/>
                </div>
            </div>
            <div className="col-12 col-md-5 about-us">
                <h2 className='mb-3'>About Us</h2>
                <h3>Get Business Solutions withSeo.com</h3>
                <p className='mt-3 mb-4'>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eaque, neque quos non similique consequatur vero alias quis molestiae doloremque. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quidem tempora magnam optio cum, excepturi alias cupiditate vel est non molestiae, ea modi magni, sapiente dolores! Aliquam quis itaque minima. consectetur adipisicing elit. Laborum eveniet unde amet?</p>
                <button className='shadow border normal-btn  rounded-5' rel="noreferrer" href="https://www.youtube.com/watch?v=2ZSdhEKB5no" target="_blank">
                    <p className='About-btn-text text-white'>See Live Video</p>
                    {/* <p className='re-one'><i class="react-icon fa-regular fa-circle-play"></i></p>  */}
                </button>
            </div>
            
        </div>
      </section>
      <AboutStyle/>
    </div>
  )
}

export default About
