import React from 'react';
const BCartStyle =()=>{
    return (
        <style>
            {`  
            .card-w{
                background-color:#1C1210;
                width:100%;
            }
                .b-img{
                    width:100%;
                    height:200px;
                }
                .b-button{
                    background-color:orange;
                }
                .cb-content{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .card-text{
                    padding:0px 0px;
                    margin:0px 0px;
                }
                
            `}
        </style>
    )
}

const BlogCart = () => {
  return (
    <div>
      <div class="text-decoration-none card-w text-white">
        <img className='b-img card-img-topd' src="https://images.hdqwalls.com/download/craziness-is-another-persons-reality-ip-1920x1080.jpg" alt="" />
            <div class="card-b p-3 text-white">
                <h5 class="card-title card-text text-light">Card title</h5>
                <p class="card-date my-2 card-text text-light">Some quick example text</p>
                <p class="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="cb-content mt-2">
                    <p className='text-light'>Read More</p>
                    <button href="#" class="btn b-button btn-sm px-4 pb-2">Blog</button>
                </div>
            </div>
       </div>

        <BCartStyle/>
    </div>
  )
}

export default BlogCart
