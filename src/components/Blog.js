import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogCart from './BlogCart';
import Card from 'react-animated-3d-card';

const BlogStyle = ()=>{
    return (
        <style>
            {`
             
                .blog-section{
                    padding: 0px 50px 40px 50px;
                    // background-color:orange;
                }
                .blog h2{
                  font-size:25px;
                  color:#9F005C;
                }
      
                @media screen and (max-width:1170px){
                  .blog-section{
                    padding: 0px 100px;
                  }
                }
                
                @media screen and (max-width:960px){
                  .blog-section{
                    padding: 0px 40px;
                  }
                }
                @media screen and (max-width:768px){
                  .blog-section{
                    padding: 0px 15px;
                  }
                }
            `}
        </style>
    )
}

const Blog = () => {
  return (
    <div>
      <section className='blog-section'>
        <div className="row d-flex justify-content-between align-items-center">
            <div className="col-12 col-md-12 blog text-center">
                <h2 className='mb-3'>Our blogs</h2>
                <h3>Get Business Solutions withSeo.com</h3>
            </div>
        </div>

        <div className="row d-flex justify-content-start align-items-center px-5 pt-5">
            <Card className="fbi" style={{
                backgroundColor: '#1C1210',
                width: '400px',
                cursor: 'pointer'
              }}>
                <BlogCart/>
            </Card>
        </div>
      </section>
      <BlogStyle/>
    </div>
  )
}

export default Blog
