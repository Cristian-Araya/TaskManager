import React from 'react';
import styled from 'styled-components'

const FooterStyled = styled.div`
    
`;

const Footer = () => {
    return (
        <FooterStyled>
            <footer className="bg-dark text-light text-center text-lg-start fixed-bottom">
                <div className="text-center p-4">
                    © 2021 Copyright: CristianAraya.com
                </div>
            </footer>
        </FooterStyled>
    )
}

export default Footer
