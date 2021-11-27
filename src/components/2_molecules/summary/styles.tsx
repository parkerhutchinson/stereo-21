import styled from 'styled-components';


export const StyledSummary = styled.article`
  width: 100%;
  position: relative;
  margin-bottom: 50px;
  display: flex;
  align-items: baseline;
  img{
    position: relative;
    display: block;
    width: 100%;
    height: auot;
    filter: grayscale(100%);
    z-index: 0;
  }
`;


interface StyledStatsProps {
  backgroundColor: string
}
export const StyledSummaryStats = styled.div<StyledStatsProps>`
  background: ${(p) => p.backgroundColor};
  padding: 40px;
  color: white;
  position: absolute;
  z-index: 1;
  width: 60%;
  display: flex;
  bottom: 0;
  right: 0;
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
`
