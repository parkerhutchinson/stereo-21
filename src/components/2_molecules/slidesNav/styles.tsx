import styled from 'styled-components';
import { StyledLogo } from '@/src/components/3_organisms/slides/styles';

export const StyledNav = styled.nav`
  width: 100%;
  position: relative;
  z-index: 1;
  & > div{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  & > div > div:not(.logo){
    display: none;
  }
  @media screen and (min-width: 768px) {
    & > div > div:not(.logo){
      display: block;
    }
  }
`;

export const StyledButtonGroup = styled.div`
  position: relative;
  z-index: 1;
`;

interface IStyledBrand {
  color: string
}

export const StyledBrandTransitionGroup = styled.div<IStyledBrand>`
  position: absolute;
  width: 100%;
  height: 42px;
  z-index: 0;
  top: 7px;
  h2{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 19px;
    text-align: center;
    font-weight: 100;
    color: ${(p) => p.color};
  }
`;

export const StyledLogoSmall = styled(StyledLogo)`
  padding-bottom: 0;
  cursor: auto;
  width: 40px;
  height: 40px;
  margin: 0 auto;
  position: relative;
  div{
    width: 40px;
  }
  @media screen and (min-width: 768px) {
    top: 2px;
    left: -15px;
    width: 60px;
    height: 60px;
    div{
      width: 60px;
    }
  }
`