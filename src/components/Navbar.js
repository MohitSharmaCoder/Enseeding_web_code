import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbarstyle = ()=>{
    return (
      <style>
        {`
          *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            }
          .en-header{
            padding: 0px 100px;
           }
          .en-header .navbar{
            padding:20px 0px;
           }
          .navbar-logo img{
            width:200px;
            height:50px;
           }
          @media screen and (max-width:1170px){
            .en-header{
              padding: 0px 100px;
            }
          }
            
          @media screen and (max-width:960px){
            .en-header{
              padding: 0px 40px;
          }
            }
          @media screen and (max-width:768px){
            .en-header{
              padding: 0px 15px;
            }
          }
        `}
      </style>
    )
  }
  
const Navbar = () => {
  return (
    <div>
        <header className="en-header">
            <nav className="navbar">
                <div className="nav-container">
                    <Link className="navbar-logo" to="/">
                    <img src="./images/navbar/logo.jpg" alt="Logo"/>
                    </Link>
                </div>
            </nav>
        </header>
        <Navbarstyle/>
    </div>
  )
}

export default Navbar
