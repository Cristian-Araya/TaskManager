import React from 'react'
import styled from 'styled-components'

const Navbar = () => {

    const Navbarstyled = styled.div`
    font-family: 'dancing Script', cursive;
    @media screen and (min-width: 769px){
        h1{
            font-size: 100px;
            background:linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
        }
        h5{
            font-size: 20px;
        }
    }
    @media screen and (max-width: 768px){
        h1{
            font-size: 60px;
            background:linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
        }
        h5{
            font-size: 20px;
        }
    }
    @media screen and (max-width: 567px){
        h1{
            font-size: 30px;
            background:linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
        }
        h5{
            font-size: 15px;
        }
    }

    `;
    return (
        <Navbarstyled>
            <div>
                <nav className="navbar navbar-dark bg-dark justify-content-center">
                    <div className="navbar-brand mb-0">
                        <span className="title-text d-flex">
                                <h1>Task Manager</h1>
                                <h5 className="float-right align-self-end">by Cristian Araya</h5>
                        </span>
                    </div>
                </nav>
            </div>
        </Navbarstyled>
    )
}

export default Navbar
