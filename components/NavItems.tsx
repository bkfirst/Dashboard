import React from 'react'
import { Link } from 'react-router'
import { sidebarItems } from '~/constants/'

const NavItems = () => {
  return (
    <section className="nav-items">
                <Link to="/" className='link-logo'>
                <img src={'/assets/icons/logo.svg'} alt="logo" 
                className='size-[30px]'/>
                <h1>AfordableTours</h1>
                </Link>

                <div className="container">
                    <nav>
                        {sidebarItems.map(({id, label, href, icon}) => (
                            <div>
                                {label}
                            </div>
                        ))}
                    </nav>
                </div>

    </section>
  )
}

export default NavItems