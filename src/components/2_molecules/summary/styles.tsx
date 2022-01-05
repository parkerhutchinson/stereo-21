import styled from 'styled-components';

interface IStyledSummary {
  ready: boolean
}

export const StyledSummary = styled.article<IStyledSummary>`
  width: 100%;
  position: relative;
  margin-bottom: 80px;
  align-items: baseline;
  opacity: ${(p) => p.ready ? '1' : '0'};
  clip-path: ${(p) => p.ready ? 'polygon(0% 0%, 101% 0%, 101% 100%, 0% 100%)' : 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)'};
  transition: clip-path .8s var(--animation-curve), opacity .4s linear;
  transition-delay: .9s, 1s;
  img{
    transform: ${(p) => p.ready ? 'translateX(0px)':'translateX(100px)'};
    position: relative;
    display: block;
    width: 100%;
    height: auto;
    filter: grayscale(100%);
    transition: all .4s;
    transition-delay: 1.2s;
    z-index: 0;
  }
  
`;


interface StyledStatsProps {
  backgroundColor: string
}

export const StyledSummaryStats = styled.div<StyledStatsProps>`
  background: ${(p) => p.backgroundColor};
  color: white;
  position: relative;
  z-index: 1;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  h3{
    text-transform: uppercase;
    margin-bottom: 10px;
    font-weight: 500;
    font-family: 'Bebas Neue',sans-serif;
    font-size: 23px;
  }
  ul, li{
    margin: 0;
    padding: 0;
    li{
      list-style: none;
    }
  }
  p, li{
    color: white;
    font-size: 15px;
    line-height: 15px;
    margin-bottom: 7px;
  }
  @media screen and (min-width: 900px){
    position: absolute;
    right: -1px;
    bottom: 0;
    padding: 40px;
    width: 60%;
    border-right: 1px solid ${(p) => p.backgroundColor};
  }
`
