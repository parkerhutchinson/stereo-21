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
    line-height: 38px;
    letter-spacing: -.16;
    margin-bottom: 50px;
    font-size: 19px;
    color: #DADADA;
  }
`