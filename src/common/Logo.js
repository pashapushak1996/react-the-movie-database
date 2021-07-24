import styled from "styled-components";
import logoImage from '../assets/images/Logo.svg'

const StyledLogo = styled.img`
  width: 50px;`

export const Logo = () => {
    return (
        <StyledLogo src={ logoImage }/>
    );
}


