import React from 'react'
import Navbar from '../Components/Navbar/Navbar.jsx'
import Footer from '../Components/Footer/Footer.jsx'
import MainContent from '../Components/MainContent/MainContent.jsx'
import styled from 'styled-components'

const MainStyled = styled.div`

    
   
@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
    }
    @media screen and (min-width: 768px){
        .main{
        min-height: 80vh;
        padding-bottom:1em;
        background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	    background-size: 400% 400%;
	    animation: gradient 15s ease infinite;
        }
    }
    @media screen and (min-width: 567px){
        .main{
            min-height:100vh;
            background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	        background-size: 400% 400%;
	        animation: gradient 15s ease infinite;
        }
    }
    @media screen and (max-width: 566px){
        .main{
            min-height:100vh;
            background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	        background-size: 400% 400%;
	        animation: gradient 15s ease infinite;
        }
    }

`;

const MainPage = () => {
    return (
        <MainStyled>
            <div className="main">
                <Navbar/>
                <div>
                <MainContent/> 
                </div>
                <Footer/>         
            </div>   
        </MainStyled>
    )
}

export default MainPage
