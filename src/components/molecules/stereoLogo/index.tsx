import StereoLogoSVG from "@/public/stereo-bg-element.svg";
import {StyledLogoGroup} from './styles';


interface Props {
  textColor: string;
}
const StereoLogo = (props:Props) => {
  return (
    <StyledLogoGroup {...props} >
      <StereoLogoSVG />
      <StereoLogoSVG />
    </StyledLogoGroup>
  )
}

export default StereoLogo;