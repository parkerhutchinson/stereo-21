import styled from "styled-components";

interface Props {
  className?: string
}

export const StyledRichText = styled.div<Props>`
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
    line-height: 32px;
    letter-spacing: -.16px;
    margin-bottom: 40px;
    font-size: 16px;
    color: #DADADA;
    a, a:visited, a:hover, a:active{
      color: #DADADA;
    }
    @media screen and (min-width: 900px){
      font-size: 19px;
      line-height: 38px;
      margin-bottom: 60px;
    }
  }
`;

export const StyledAsset = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: 15px;
  
`;

export const StyledAssetDescription = styled.p`
  font-size: 10px;
  opacity: .8;
  text-align: center;
  margin-bottom: 60px;
  letter-spacing: -.5px;
  
`

interface IStyledCopy {
  isNotBio: boolean;
}

export const StyledCopy = styled.p<IStyledCopy>`
  @media screen and (min-width: 900px){
    padding: ${(p) => p.isNotBio ? '0 30px' : '0px'}; 
  }
`