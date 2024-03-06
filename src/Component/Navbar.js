import React from 'react'
// import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import Wall from './Wall'
// import DumData from './DumData'

import { NavLink } from 'react-router-dom'



const Navbar = ({setShow}) => {

  //   const [value,setValue] = useState()
  //   const navigate = useNavigate()

  //   const handleChange = (e) => {
  //            setValue(e.target.value)
  //            navigate('/decor')
  //   }

  // const Handler = ()=>{
  //   props.onLamp();
  // }


  return (
    <>
    <nav>
        <div className='nav_box'>
          <span className='my_shop' onClick={() => setShow(true)}></span>
          <div className='cart' onClick={() => setShow(false)}>
            <span>
              <i class='fas fa-cart-plus'></i>
            </span> 
            
            <span> 0 </span> 
          </div>
        </div>
       </nav>
      <div className=' top-div text-center container-fluid bg-dark'>
      <i class="fa fa-brands fa-facebook m-2" >  </i>
 
      <i class="fa fa-brands fa-instagram m-2" >  </i> 

      <i class="fa fa-light fa-envelope m-2" >  </i>
         FREE SHIPPING | COD AVAILABLE | SAME DAY DISPATCH
       
      
        </div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgaIOPkVs0W1tOEbvkzYeiNhNRBEEvBjUKiQ&usqp=CAU" height="70px" width="80px"/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mb-left mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="btn btn-outline" to={'/'} >Home</NavLink>
                </li>
                <li>

                  <NavLink className="btn btn-outline " to={'/decor'} >Decor</NavLink>
                  {/* <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" href="#">WALL DECOR</NavLink></li>
            <li><NavLink className="dropdown-item" href="#">DINING DECOR</NavLink></li>
            <li><NavLink className="dropdown-item" href="#">KITCHEN DECOR</NavLink></li>
            <li><NavLink className="dropdown-item" href="#">TABLE DECOR</NavLink></li>
          </ul> */}
                  {/* <select className="my-dropdown nav-item" onChange={handleChange}>
            

            <option value="wall-decor"> <Link to='/Wall'>WALL DECOR</Link></option>
            <option value="dining-decor">DINING DECOR</option>
            <option value="kitchen-decor">KITCHEN DECOR</option>
            <option value="table-decor">TABLE DECOR</option>
            

        </select> */}
                </li>

                <li className="nav-item">
                  <NavLink className="btn btn-outline" to={'/lamp'} >Lamp</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="btn btn-outline" to={'/sale'} >Sale</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="btn btn-outline" to={'/cart'} >Cart</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="btn btn-outline" to={'/blog'}>Blog</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="btn btn-outline" to={'/contact'}>Contact</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="btn btn-outline" to={'/about'}>About</NavLink>
                </li>




              </ul>

            </div>
          </div>
        </nav>
      </>
      )
}

      export default Navbar;