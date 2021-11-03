import styled, {css} from 'styled-components';

const TOTAL_COLUMNS = 24;

const calculateGridColumns = (cols:number) => {
  let finalStyles;

  if (cols > TOTAL_COLUMNS) {
    finalStyles = css`
      grid-template-columns: repeat(1fr, 24);
    `;
  } else {
    finalStyles = css`
      grid-template-columns: repeat(1fr, cols);
    `;
  }
  
  return finalStyles;
}

interface IGrid {
  subGrid: number
}

const Grid = styled.div<IGrid>`
  display: grid;
  ${(p) => calculateGridColumns(p.subGrid)};
  grid-column: 1 / -1;
`;

export default Grid;