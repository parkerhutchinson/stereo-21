import Button from "@/src/components/atoms/button";
import ArrowIcon from "@/src/components/atoms/arrowIcon";

interface Props {
  color: string
}

const SlidesNavigation = (props:Props) => {
  const {color} = props;
  return (
    <nav>
      <Button borderStyle="begin" color={color}>
        <ArrowIcon />
      </Button>
      <Button borderStyle="end" color={color}>
        <ArrowIcon />
      </Button>
      <Button borderStyle="symetrical" color={color}>
        <ArrowIcon />
      </Button>
    </nav>
  );
}

export default SlidesNavigation;