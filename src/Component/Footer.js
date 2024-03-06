import React from 'react'

const Footer = () => {
  return (
    <>
    
      <div className=" footer-bottom container-fluid">
        <div className="row">
          <div className="col-md-3 footer-bottom-cols ">
            <h4 className="text-center text-dark">ABOUT US</h4>
            <hr className="text-dark" />

            <p className="text-dark">
              Integer cursus scelerisque ipsum idefficitur. Donec a dui fringilla, gravidalorem ac, semper magna.
              Aeneanrhoncus ac lectus a interdum. Vivamussemper posuere dui, at ornare turpisultrices sit amet. Nulla
              cursus lorem utnisi porta, ac eleifend arcu ultrices.
            </p>

          </div>
          <div className="col-md-3 footer-bottom-cols ">
            <h4 className="text-center text-dark">OPENING HOURS</h4>
            <hr className="text-dark" />

            <p className="text-dark text-center">
              Monday : Closed<br />
              Tue-Wed : 09am - 10pm<br />
              Thu-Fri : 09am - 10pm<br />
              Sat-Sun : 09am - 10pm<br />
            </p>

          </div>
          <div className="col-md-3 footer-bottom-cols">
            <h4 className="text-center text-dark">CONTACT INFORMATION</h4>
            <hr className="text-dark" />

            <p className="text-dark text-center">
              Ipsum Street,Lorem Tower,MO,<br />
              Columbia,508000 <br />

              +01 2000 800 9999 <br />

              info@admin.com
            </p>
          </div>

          <div className="col-md-3 footer-bottom-cols">
            <h4 className="text-center text-dark">SUBSCRIBE</h4>
            <hr className="text-dark" />

            <input type="text" placeholder="Email" value="" name="email" />
            <a href="#" className="btn3 btn btn-outline-primary" tabindex="-1" role="button"
              aria-disabled="true">SUBSCRIBE</a><br />
            <span>
              <i className="call fa-brands fa-facebook text-dark m-2"></i>
              <i className="call fa-brands fa-instagram text-dark m-2"></i>
              <i className="call fa-brands fa-twitter text-dark m-2"></i>
              <i className="call fa-brands fa-linkedin text-dark m-2"></i>
              <i className="call fa-brands fa-google-plus-g text-dark m-2"></i>
            </span>

          </div>

          <p className="text-light text-center bg-dark">All Rights Reserved &copy. 2022 The Home Decor</p>


        </div>
      </div>















    </>

  );
}
export default Footer;









