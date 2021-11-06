import styled from 'styled-components';


interface IStyledSlides {
  backgroundColor: string
}

export const StyledSlides = styled.div<IStyledSlides>`
  width: 55%;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  background: ${(p) => p.backgroundColor} url('/test-bg.png') no-repeat right center;
  background-size: cover;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

interface IStyledSlide {
  cardColor: string
}

export const StyledSlide = styled.div<IStyledSlide>`
  position: relative;
  display: block;
  width: 500px;
  height: 750px;
  padding: 30px;
  color: white;
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
    z-index: 10;
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
    z-index: 99;
    opacity: 1;
    pointer-events: none;
  }
  *{
    font-weight: 200;
  }
`;


export const StyledLogo = styled.div`
  width: 100%;
  text-align: center;
  padding-bottom: 50px;
  cursor: pointer;
  img{
    position: relative;
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
`


export const StyledCaseStudyCopy = styled.div`
  opacity: 0;
  overflow: hidden;
  height: 100%;
  pointer-events: none;
  position: absolute;
  display: none;
`

export const StyledCardWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  height: calc(100% - 60px);
  width: calc(100% - 60px);
  z-index: 11;
`;