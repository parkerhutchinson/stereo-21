import styled from 'styled-components';


interface IStyledSlides {
  backgroundColor: string
  toggle: boolean
  panelOpen: boolean
}

export const StyledSlides = styled.section<IStyledSlides>`
  display: flex;
  width: 100%;
  position: absolute;
  top: 0;
  right: ${(p) => p.panelOpen ? '0%' : '-100%'};
  height: ${(p) => p.panelOpen ? '100%' : '100vh'};
  /* background: ${(p) => p.backgroundColor}; */
  background-size: cover;
  justify-content: space-around;
  align-items: center;
  z-index: 11;
  transition: width 1s var(--animation-curve), background 1s, right 1s var(--animation-curve);
  @media screen and (min-width: 1024px) {
    width: ${({toggle}) => toggle ? '100%' : '55%'};
    /* background: ${(p) => p.backgroundColor}; */
    right: 0;
  }
`;

interface IStyledSlide {
  cardColor: string
  toggle: boolean
}

export const StyledSlide = styled.div<IStyledSlide>`
  position: relative;
  display: block;
  width: ${({toggle}) => toggle ? '90%' : '80%'};
  right: 0;
  top: ${({toggle}) => toggle ? '40px' : '0px'};
  height: ${({toggle}) => toggle ? '100%' : '75vh'};;
  padding: 30px;
  color: white;
  border-radius: 10px;
  transition: 
    width 1s var(--animation-curve),
    top 1s var(--animation-curve),
    height 1s var(--animation-curve),
    background 1s linear;
  backdrop-filter: blur(35px);
  background: ${(p) => p.cardColor};
  @media (min-width: 1024px) {
    top: ${({toggle}) => toggle ? '100px' : '0px'};
  }
  @media (min-width: 1360px) {
    width: ${({toggle}) => toggle ? '1000px' : '500px'};
  }
  @media (min-width: 1800px) {
    width: ${({toggle}) => toggle ? '1000px' : '750px'};
  }
  &:before, &:after{
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  &:before{
    z-index: 1;
    filter: saturate(1.2);
    transition: all 1s;
    border-radius: 10px;
  }
  canvas{
    opacity: ${({toggle}) => toggle ? '.2' : '.5'};
    z-index: 3;
    transition: opacity 1s var(--animation-curve);
  }
  *{
    font-weight: 200;
  }
`;

export const StyledCardWrap = styled.div`
  position: absolute;
  height: calc(100% - 60px);
  width: calc(100% - 60px);
  top: 30px;
  z-index: 11;
  & > div{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const StyledBrandTransitionGroup = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  top: 0;
  h2{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;


export const StyledCaseStudyCopy = styled.div`
  opacity: 1;
  height: 100%;
  top: 0;
  position: relative;
  display: block;
  max-width: 100%;
  overflow-x: hidden;
  @media screen and (min-width: 1024px) {
    max-width: 70%;
    left: 15%;
  }
  h2{
    font-weight: 100;
    margin-bottom: 40px;
    font-size: 80px;
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 1px;
    text-align: center;
    @media screen and (min-width: 1024px) {
      font-size: 120px;
    }
  }
  p{
    line-height: 38px;
    letter-spacing: -.16;
    margin-bottom: 50px;
    font-size: 19px;
    color: #DADADA;
  }
`;

export const StyledLogo = styled.div`
  width: 100%;
  text-align: center;
  cursor: pointer;
  position: relative;
  padding-bottom: calc(367 / 463 * 100%);
  margin-top: 40px;
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
    width: 80%;
    height: auto;
    display: inline-block;
    transform: scale(1);
    transition: transform .4s var(--animation-curve);
  }
  &:hover{
    img{
      transform: scale(1.2);
    }
  }
`;


