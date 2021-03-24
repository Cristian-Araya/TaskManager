import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
    const NavbarStyled = styled.div`
    .title-text{
        color:red;
    }
    `;
    return (

        <NavbarStyled>
            <nav className="navbar navbar-light bg-light">
                <div className="navbar-brand mb-0">
                    <span className="title-text text-center">
                        Task Manager
                    </span>
                </div>
            </nav>
        </NavbarStyled>
    )
}

export default Navbar
