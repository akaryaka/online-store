import ArrowIcon from "@/widgets/icons/ArrowIcon";
import { Link } from "react-router";
import type { LinkHomeProps } from "./LinkHome.props";
import Text from "@/shared/ui/text";

const LinkHome = ({ title, path }: LinkHomeProps) => {
  return (
    <>
      <Link
        className="flex items-center gap-[25px] max-[767px]:gap-[0]"
        to={path}
      >
        <Text size="s" className="text-[#606060]">
          {title}
        </Text>
        <ArrowIcon />
      </Link>
    </>
  );
};

export default LinkHome;
