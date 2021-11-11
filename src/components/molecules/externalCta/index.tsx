import Button from "@/src/components/atoms/button";
import ArrowIcon from "@/src/components/atoms/arrowIcon";
import { StyledButton } from "./styles";
import IconCode from "@/public/icn-code.svg";
import IconArt from "@/public/icn-art.svg";
import IconResume from "@/public/icn-resume.svg";


type Icon =  "code"|"art"|"resume"
interface Props {
  icon: Icon
  link: string
  highlight: string
  seed: string
}

const getIconFromProps = (icon:Icon) => {
  switch(icon) {
    case 'code':
      return <IconCode />;
      break;
    case 'art':
      return <IconArt />;
      break;
    case 'resume':
      return <IconResume />;
      break;
    default:
      return null
  }
}

const ExternalCTA = (props:Props) => {
  return (
    <StyledButton 
      href={props.link} 
      target="_blank" 
      highlight={props.highlight} 
      seed={props.seed}
    >
      {getIconFromProps(props.icon)}
      <Button borderStyle="symetrical" color="#ff0000">
        <ArrowIcon color={"black"} direction="se" />
      </Button>
    </StyledButton>
  )
}

export default ExternalCTA;