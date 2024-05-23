import React from 'react'
import Image from './assets/images/logo.png'
import Sun from './assets/images/sun.png'
import Moon from './assets/images/moon.png'

function Navbar() {
    const changeTheme = () => {
        var element = document.body
        if (element.dataset.bsTheme == 'light') {
            element.dataset.bsTheme = 'dark'
            document.getElementById('image').src = Sun
        } else {
            element.dataset.bsTheme = 'light'
            document.getElementById('image').src = Moon
        }
    }

    return (
        <nav className="navbar bg-body-tertiary bg-light">
            <div className='container px-5'>
                <a className="navbar-brand fw-semibold" href="#">
                    <img
                        src={Image}
                        width={90}
                        height={60}
                        className="d-inline-block align-top"
                        alt="Logo" />
                </a>
                <a className='themeChanger' onClick={changeTheme}>
                    <img id='image' src={Sun} />
                </a>
            </div>
        </nav>
    )
}

export default Navbar
