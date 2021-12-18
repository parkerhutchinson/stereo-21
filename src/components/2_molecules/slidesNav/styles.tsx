import styled from 'styled-components';

export const StyledNav = styled.nav`
  width: 100%;
  position: relative;
  z-index: 1;
  & > div{
    width: 100%;
    display: flex;
    justify-content: space-between;
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