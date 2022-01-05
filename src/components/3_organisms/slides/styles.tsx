import styled from 'styled-components';
import RichText from '@/src/components/2_molecules/richText';

interface IStyledSlides {
  backgroundColor: string
  toggle: boolean
  panelOpen: boolean
  slidePosition: boolean
}

export const StyledSlides = styled.section<IStyledSlides>`
  display: block;
  width: 100%;
  position: ${({ slidePosition }) => slidePosition ? 'absolute' : 'fixed'};
  top: 0;
  right: ${(p) => p.panelOpen ? '0%' : '-100%'};
  background-size: cover;
  z-index: 11;
  padding-bottom: 200px;
  transition: width 1s var(--animation-curve), background 1s, right 1s var(--animation-curve);
  overflow: hidden;
  @media screen and (min-width: 1024px) {
    width: ${({ toggle }) => toggle ? '100%' : '55%'};
    right: 0;
  }
`;

interface IStyledSlide {
  cardcolor: string
  toggle?: boolean
}

export const StyledSlide = styled.div<IStyledSlide>`
  position: relative;
  margin: 12.5vh auto 100px;
  display: block;
  width: 90%;
  top: 0px;
  padding: 30px;
  color: white;
  border-radius: 10px;
  will-change: height;
  transition: height .8s, width 1s var(--animation-curve), top 1s var(--animation-curve), background 1s;
  backdrop-filter: blur(50px);
  /* background: ${(p) => p.cardcolor}; */
  background: rgba(0,0,0,0);
  transform: translate3d(0px, 0px, 0px);
  backface-visibility: hidden;
  overflow: hidden;
  @media screen and (min-width: 1024px) {
    width: 80%;
  }
  @media (min-width: 1360px) {
    width: ${({ toggle }) => toggle ? '1000px' : '500px'};
  }
  @media (min-width: 1800px) {
    width: ${({ toggle }) => toggle ? '1000px' : '750px'};
  }
  &:before{
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    filter: saturate(1.2);
    transition: all 1s;
    border-radius: 10px;
  }
  canvas{
    opacity: .2;
    z-index: 3;
    transition: opacity 1s var(--animation-curve);
  }
  *{
    font-weight: 200;
  }
`;

export const StyledCardWrap = styled.div`
  position: absolute;
  height: calc(100% - 30px);
  width: calc(100% - 60px);
  top: 15px;
  z-index: 11;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 1024px) {
    height: calc(100% - 60px);
    top: 30px;
  }
`;

export const StyledCaseStudyCopy = styled.div`
  height: 100%;
  top: 0;
  position: relative;
  display: block;
  max-width: 100%;
  overflow-x: hidden;
  @media screen and (min-width: 1024px) {
    max-width: 70%;
    margin: 0 auto;
  }
  h2{
    font-weight: 100;
    margin: 30px auto 0px;
    font-size: 50px;
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 1px;
    text-align: center;
    overflow: hidden;
    height: 80px;
    transform: translate3d(0px, 0px, 0px);
    @media screen and (min-width: 800px) {
      font-size: 80px;
      height: 130px;
    }
    @media screen and (min-width: 1024px) {
      font-size: 120px;
      margin: 20px auto 80px;
    }
    span{
      display: inline-block;
      position: relative;
      transform: translate3d(0px, 0px, 0px);
    }
  }  
`;

interface IStyledHeadingLetter {
  ready: boolean
  index: number
  isSpace: boolean
}

export const StyledHeadingLetter = styled.span<IStyledHeadingLetter>`
  position: relative;
  display: inline-block;
  transform: ${(p) => p.ready ? 'rotate(0deg)' : 'rotate(30deg)'} transform3d(0px, 0px, 0px);
  filter: ${(p) => p.ready ? 'blur(0px)' : 'blur(20px)'};
  opacity: ${(p) => p.ready ? '1' : 0};
  transition: all .5s;
  transition-delay: ${(p) => `${p.index}00ms`};
  width: ${(p) => p.isSpace ? '30px' : 'inherit'};
`;

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
  padding-bottom: calc(367 / 463 * 100%);
  margin-top: 120px;
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

export const StyledLogoSmall = styled(StyledLogo)`
  padding-bottom: 0;
  cursor: auto;
  width: 80px;
  height: 80px;
  margin: 0 auto;
  div{
    width: 80px;
  }
  &:hover{
    img{
      transform: scale(1);
    }
  }
`


