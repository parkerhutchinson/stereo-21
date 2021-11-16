import styled from 'styled-components';


interface IStyledSlides {
  backgroundColor: string
  toggle: boolean
}

export const StyledSlides = styled.div<IStyledSlides>`
  width: ${({toggle}) => toggle ? '75%' : '55%'};
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  background: ${(p) => p.backgroundColor};
  background-size: cover;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: width 1s var(--animation-curve), background 1s;
`;

interface IStyledSlide {
  cardColor: string
  toggle: boolean
}

export const StyledSlide = styled.div<IStyledSlide>`
  position: relative;
  display: block;
  width: ${({toggle}) => toggle ? '90%' : '80%'};
  top: ${({toggle}) => toggle ? '100px' : '0px'};
  height: ${({toggle}) => toggle ? '100vh' : '75vh'};
  padding: 30px;
  color: white;
  transition: all 1s var(--animation-curve);
  @media (min-width: 1360px) {
    width: ${({toggle}) => toggle ? '800px' : '500px'};
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
    background: ${(p) => p.cardColor};
    filter: saturate(1.2);
    backdrop-filter: blur(35px);
    transition: all 1s;
    border-radius: 10px;
  }
  &:after{
    z-index: 2;
    background: url('/noise-texture.png') center center;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    top: 1px;
    left: 1px;
    mix-blend-mode: multiply;
    opacity: .18;
  }
  canvas{
    background: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    opacity: 1;
    pointer-events: none;
  }
  *{
    font-weight: 200;
  }
`;

export const StyledCardWrap = styled.div`
  position: absolute;
  height: calc(100% - 60px);
  width: calc(100% - 60px);
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
  height: 50px;
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
  overflow: hidden;
  height: 100%;
  top: 0;
  left: 15%;
  position: absolute;
  display: block;
  max-width: 70%;
  overflow-x: hidden;
  overflow-y: hidden;
  h2{
    font-weight: 200;
    margin-bottom: 40px;
    font-size: 36px;
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


interface IStyledThreeBg {
  open: boolean
}

export const StyledThreeBGCurtain = styled.div<IStyledThreeBg>`
  position: fixed;
  top: 0;
  right: 0;
  width: 75%;
  height: 100%;
  clip-path: ${(p) => !p.open ? 'polygon(100% 0%, 100% 100%, 26.5% 100%, 26.5% 0%)' : 'polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%)'};
  transition: clip-path 1s var(--animation-curve);
`

export const StyledThreeBackground = styled.div<any>`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden; 
`;