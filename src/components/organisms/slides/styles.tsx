import styled from 'styled-components';


interface IStyledSlides {
  backgroundColor: string
  toggle: boolean
}

export const StyledSlides = styled.div<IStyledSlides>`
  width: ${({toggle}) => toggle ? '70%' : '55%'};
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  background: ${(p) => p.backgroundColor} url('/test-bg.png') no-repeat right center;
  background-size: cover;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: all 1s;
`;

interface IStyledSlide {
  cardColor: string
  toggle: boolean
}

export const StyledSlide = styled.div<IStyledSlide>`
  position: relative;
  display: block;
  width: ${({toggle}) => toggle ? '800px' : '500px'};
  top: ${({toggle}) => toggle ? '100px' : '0px'};
  height: ${({toggle}) => toggle ? '100vh' : '75vh'};
  padding: 30px;
  color: white;
  transition: all 1.2s;
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
    backdrop-filter: blur(43px);
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
  left: 10%;
  position: absolute;
  display: block;
  max-width: 80%;
  overflow-x: hidden;
  overflow-y: scroll;
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
  height: 400px;
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
    transition: transform .4s;
  }
  &:hover{
    img{
      transform: scale(1.2);
    }
  }
`;