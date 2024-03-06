import React from 'react'

const Blog = () => {
  return (
    <>
    {/* Blog section */}
    <div class="our-blog">
        <h1 class="text-center ">Summery </h1>
        <p class="text-center ">adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim <br/> veniam, quis nostrud exercitation ullamco laboris</p>

    </div>

   <div class="our-blog">
    <div class="grid"> 
        <div class="container">
            <div class="row">
                <div class="col-md-3 grid-cols  mt-5">
                    <img src=".\assets\Image\swiper1.jpg"
                        height="240vh" width="290vw" alt=""/>
                </div>
                <div class="col-md-6 grid-cols mt-2">
                    <img src=".\assets\Image\swiper4.jpg"
                       height="350vh" width="600vw" alt=""/>
                    <p class="text-center">magna aliqua. Ut enim ad minim veniam,quis nostrud <br/>
                        exercitation ullamco laboris</p>
                </div>
                <div class="col-md-3 grid-cols  mt-5">
                    <img src=".\assets\Image\swiper3.jpg"
                        height="240vh" width="290vw" alt=""/>
                </div>
            </div>
        </div>
    </div>
    </div>


      {/* <!-- bakground-imga --> */}
      <div class="scroll-me"></div>
      <div class="bg-image container">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris consequat consequat enim, non auctor massa ultrices non."
        <br />
        <p class="text-center h4">- Michael Strahan </p>


      </div>
      <div class="scroll-me"></div>

      
      

  {/* <!-- About-info --> */}
  <div class="about-info container">
    <div class="row g-0  position-relative">
      {/* <div class="col-md-6 mb-md-0 p-md-4 mt-5">
        
      </div> */}
      <div class="col-md-12 p-4 ps-md-0">
        <h5 class="mt-5 text-center">The Little Summery</h5>
        {/* <h6 class="text-center mt-3">Little Story</h6> */}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris consequat consequat enim, non auctor massa ultrices non.
            Morbi sed odio massa. Quisque at vehicula tellus, sed tincidunt augue.
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Maecenas varius egestas diam, eu sodales metus scelerisque congue.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            Maecenas gravida justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus ipsum eget, dictum enim.
            Donec non neque ut enim dapibus tincidunt vitae nec augue. Suspendisse potenti. Proin ut est diam.
            Donec condimentum euismod tortor, eget facilisis diam faucibus et. Morbi a tempor elit.
            Donec gravida lorem elit, quis condimentum ex semper sit amet.
            Fusce eget ligula magna. Aliquam aliquam imperdiet sodales.
            
      </p>
        
      </div>
    </div>
  </div>

    </>
  )
}

export default Blog;