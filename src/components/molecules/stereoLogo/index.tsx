import StereoLogoSVG from "@/public/stereo-bg-element.svg";
import {StyledLogoGroup} from './styles';


const StereoLogo = () => {
  return (
    <StyledLogoGroup>
      <StereoLogoSVG />
      <StereoLogoSVG />
    </StyledLogoGroup>
  )
}

export default StereoLogo;