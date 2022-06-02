import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { FcSearch } from 'react-icons/fc';
import {BiImageAdd} from 'react-icons/bi'
// import {$} from 'jquery'




export default function Navbar() {

    // $(document).ready(function(){
    //     $('.sidenav').sidenav();
    //   });

    

    return (
        <>
            <IconContext.Provider value={{ className: 'react-icons' }}>
                <div className="navbar-fixed">
                <nav className='white moto'>
                    <div className="nav-wrapper white">
                        <Link to="/" className="brand-logo left">KANISTA</Link>

                        {/* <Link to="#" className="sidenav-trigger right" data-target="nav-mobile">
                            <i className="material-icons">menu</i>
                        </Link> */}

                        <ul id="nav-mobile" className="right">
                            <li><Link to="/search"><FcSearch size='1.7em' /></Link></li>
                            <li><Link to="/createpost"><BiImageAdd size='1.7em' /></Link></li>
                            <li><Link to="/userprofile"><FaUserCircle size='1.7em' /></Link></li>
                            <li><Link to="/signin">SignIn</Link></li>
                            <li><Link to="signup">SignUp</Link></li>
                        </ul>
                    </div>
                </nav>
                </div>

            </IconContext.Provider>
            <Outlet />

        </>
    )
}
