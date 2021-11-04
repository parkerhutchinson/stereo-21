import styled from 'styled-components';

export const StyledSlides = styled.div`
  width: 100%;
`;

interface IStyledSlide {
  cardColor: string
}

export const StyledSlide = styled.div<IStyledSlide>`
  position: absolute;
  top: 0px;
  right: 0;
  width: 500px;
  max-width: 500px;
  height: 750px;
  background: ${(p) => p.cardColor};
  backdrop-filter: blur(30px);
  transition: all .4s;
  margin: 200px auto 0;
  padding: 30px;
  border-radius: 10px;
  color: white;
  .container{
    position:relative;
    z-index:20;
  }
  &:before{
    content: '';
    display: block;
    position: absolute;
    background: url('http://3.bp.blogspot.com/--dMisR7TgNA/UIHRULv4jkI/AAAAAAAADqI/etnJOMllhqw/s400/Tileable+metal+surface+texture.jpg') repeat;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    top: 1px;
    left: 1px;
    mix-blend-mode: darken;
    opacity: .1;
    z-index: 0;
  }
  h2{
    font-weight: 200;
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
`;