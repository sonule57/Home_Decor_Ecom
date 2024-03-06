import React from 'react'

const About = () => {
  return (
    <div>
      <div className='About container'>

<h1 className='text-center mt-4'>Abouts Me</h1>

<div class="row g-0 bg-light position-relative mt-2" >
    <div class="col-md-6 mb-md-0 p-md-4" data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
          <img src={'./assets/Image/swiper2.jpg'} class="w-100 h-60 mt-1" alt="..." id='image1' />
        {/* <img src={'.assets/Image/swipe5.jpg'} class="w-100" alt="..." id='image1' /> */}
    </div>
    <div class="our-story col-md-6 ps-md-0">
        <h4 class="mt-0" style={{ 'fontSize': '2.3rem' }}>Our Story</h4>
        <p style={{ 'color': '#aba09b' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris consequat consequat enim, non auctor massa ultrices non.
            Morbi sed odio massa. Quisque at vehicula tellus, sed tincidunt augue.
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Maecenas varius egestas diam, eu sodales metus scelerisque congue.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            Maecenas gravida justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus ipsum eget, dictum enim.
            Donec non neque ut enim dapibus tincidunt vitae nec augue. Suspendisse potenti. Proin ut est diam.
            Donec condimentum euismod tortor, eget facilisis diam faucibus et. Morbi a tempor elit.<br /><br />
            Donec gravida lorem elit, quis condimentum ex semper sit amet.
            Fusce eget ligula magna. Aliquam aliquam imperdiet sodales.
            Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida.
            Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis.
            Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem.
            Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum,
            et maximus enim ligula ac ligula.
        </p>
    </div>
</div>


<div class="row g-0 om bg-light position-relative mt-5">
    <div className="col-md-6 ps-md-0">
        <h4 class="mt-0" style={{ 'fontSize': '2.3rem' }}>Our Mission</h4>
        <p style={{ 'color': '#aba09b' }}>Mauris non lacinia magna. Sed nec lobortis dolor.
            Vestibulum rhoncus dignissim risus, sed consectetur erat.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            Nullam maximus mauris sit amet odio convallis, in pharetra magna gravida.
            Praesent sed nunc fermentum mi molestie tempor.
            Morbi vitae viverra odio. Pellentesque ac velit egestas, luctus arcu non, laoreet mauris.
            Sed in ipsum tempor, consequat odio in, porttitor ante.
            Ut mauris ligula, volutpat in sodales in, porta non odio.
            Pellentesque tempor urna vitae mi vestibulum, nec venenatis nulla lobortis.
            Proin at gravida ante. Mauris auctor purus at lacus maximus euismod.
            Pellentesque vulputate massa ut nisl hendrerit, eget elementum libero iaculis.<br /><br />
            Creativity is just connecting things. When you ask creative people how they did something,
            they feel a little guilty because they didn't really do it, they just saw something.
            It seemed obvious to them after a while.
        </p>
    </div>
    <div class="col-md-6 mb-md-0 p-md-4" data-aos="flip-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
        <img src={'./assets/Image/swiper2.jpg'} class="w-100 h-60 mt-1" alt="..." id='image2' />
    </div>
</div>
</div>

    </div>
  )
}

export default About;