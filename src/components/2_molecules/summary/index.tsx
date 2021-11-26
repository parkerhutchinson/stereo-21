import {StyledSummary, StyledSummaryStats} from "./styles";

interface Props {
  color: string,
  image: string,
  technology: string[],
  year: string
}

const Summary = (props:any) => {
  const {image, color, technology, year} = props;
  return (
    <StyledSummary image={image}>
      <StyledSummaryStats backgroundColor={color}>
        <div>
          <h3>Year</h3>
          <p>{year}</p>
        </div>
        <div>
          <h3>Technology</h3>
          <ul>
          {technology.map((tech:string,index:number) => (<li key={tech + index}>{tech}</li>))}
          </ul>
        </div>
      </StyledSummaryStats>
     
    </StyledSummary>
  )
}

export default Summary;