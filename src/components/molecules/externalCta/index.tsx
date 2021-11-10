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
    <StyledButton href={props.link} target="_blank">
      {getIconFromProps(props.icon)}
      <Button borderStyle="symetrical" color="#ff0000">
        <ArrowIcon color="#ffffff" direction="se" />
      </Button>
    </StyledButton>
  )
}

export default ExternalCTA;