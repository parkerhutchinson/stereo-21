import styled from "styled-components";

interface Props {
  className?: string
  linkColor: string
}

export const StyledRichText = styled.div<Props>`
  h2{
    font-weight: 100;
    margin-bottom: 40px;
    font-size: 80px;
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 1px;
    text-align: center;
  }
  h4{
    font-weight: 300;
    margin-bottom: 40px;
    padding-top: 24px;
    font-size: 24px;
    font-family: 'roboto';
    letter-spacing: -.5px;
  }
  p{
    line-height: 30px;
    letter-spacing: -.20px;
    color: #d7d7d7;
    font-size: 16px;
    a, a:visited, a:hover, a:active{
      color: ${(p) => p.linkColor};
      transition: color .5s;
    }
    @media screen and (min-width: 900px){
      font-size: 22px;
      line-height: 36px;
      margin-bottom: 50px;
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
`;

interface IStyledCopy {
  isNotBio: boolean;
}

export const StyledCopy = styled.p<IStyledCopy>`
  @media screen and (min-width: 900px){
    padding: ${(p) => p.isNotBio ? '0 30px' : '0px'}; 
  }
`