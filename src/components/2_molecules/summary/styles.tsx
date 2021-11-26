import styled from 'styled-components';


interface StyledProps {
  image: string
}
export const StyledSummary = styled.article<StyledProps>`
  width: 100%;
  position: relative;
  padding-bottom: 30%;
  &:before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: ${({image}) => `url('${image}') no-repeat center`};
    background-size: cover;
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
  position: relative;
  z-index: 1;
  width: 80%;
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
`
