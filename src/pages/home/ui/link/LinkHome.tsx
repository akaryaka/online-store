import ArrowIcon from "@/widgets/icons/ArrowIcon";
import { Link } from "react-router";
import type { LinkHomeProps } from "./LinkHome.props";
import Text from "@/shared/ui/text";

const LinkHome = ({ title, path }: LinkHomeProps) => {
  return (
    <>
      <Link className="flex gap-[25px]" to={path}>
        <Text size="s" className="text-[#606060]">
          {title}
        </Text>
        <ArrowIcon />
      </Link>
    </>
  );
};

export default LinkHome;
