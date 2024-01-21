import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const CardStyle = ()=>{
    return (
        <style>
            {`
                .card-carausel{
                    padding:30px 0px 10px 0px;
                }
                .card img{
                    width:100px;
                    height:100px;
                    margin:auto;
                    border-radius:10px;
                    
                }
                .card .card-body h3{
                    font-size:20px;
                }
                @media screen and (max-width:960px){
                    card img{
                        width:0px;
                        height:0px;
                    }
                  }
                  @media screen and (max-width:768px){
                    card img{
                        width:0px;
                        height:0px;
                    }
                  }
            `}
        </style>
    )
}
const Card = () => {
  return (
    <>
        <div className="card border-0 bg-transparent mx-4 rounded-5 card-carausel">
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/good-icon.png" className="card-img-top" alt="..."/>
            <div className="card-body text-center">
                <h3>Lorem ipsum dolor sit.</h3>
                <p className="card-text">Some quick card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        <CardStyle/>
    </>
  )
}

export default Card
