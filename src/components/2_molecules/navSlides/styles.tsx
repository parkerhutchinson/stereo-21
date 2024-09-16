import styled from 'styled-components';

interface IStyledPill {
  show: boolean
}

export const StyledPill = styled.div<IStyledPill>`
  left: 50%;
  width: 100%;
  height: 80%;
  max-width: 700px;
  position: absolute;
  top: 10px;
  margin: 0 auto;
  border-radius: 5000px 5000px 0px 0px;
  transform: translateX(-50%);
  background: linear-gradient(180deg, rgba(255,255,255,.5), rgba(0,0,0,0));
  opacity: ${(p) => p.show ? '.1' : '0'};
  transition: all 1s;
  @media screen and (min-width: 900px){
    left: 50%;
    width: 90%;
    height: 80%;
    max-width: 600px;
    top: 20px;
  }
`;

export const StyledLogo = styled.div`
  width: 100%;
  text-align: center;
  cursor: pointer;
  position: relative;

  div{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  img{
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    display: inline-block;
    transform: scale(1);
    max-width: 700px;
    transition: transform .4s var(--animation-curve);
  }
  
  @media screen and (min-width: 900px){

    img{
      width: 80%;
    }
    &:hover{
      img{
        transform: scale(1.2);
      }
    }
  }
`;

export const StyledNav = styled.nav`
  width: 100%;
  position: relative;
  z-index: 1;
  & > div{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  & > div > div:not(.logo){
    display: none;
  }
  @media screen and (min-width: 768px) {
    & > div > div:not(.logo){
      display: block;
    }
  }
`;

export const StyledButtonGroup = styled.div`
  position: relative;
  z-index: 1;
`;

interface IStyledBrand {
  color: string
}

export const StyledBrandTransitionGroup = styled.div<IStyledBrand>`
  position: relative;
  width: max-content;
  height: 60px;
  z-index: 0;
  top: -20px;
  h2{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 5.0rem;
    text-align: center;
    font-weight: 100;
    white-space: nowrap;
    color: ${(p) => p.color};
  }
`;

export const StyledLogoSmall = styled(StyledLogo)`
  padding-bottom: 0;
  cursor: auto;
  width: 40px;
  height: 40px;
  margin: 0 auto;
  position: relative;
  div{
    width: 40px;
  }
  @media screen and (min-width: 768px) {
    top: 2px;
    left: -15px;
    width: 60px;
    height: 60px;
    div{
      width: 60px;
    }
  }
`