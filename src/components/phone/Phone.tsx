import PhoneIcon from "../icons/PhoneIcon";
import type { Props } from "./Phone.props";

const Phone = ({ number }: Props) => {
  return (
    <>
      <div className="flex items-center gap-[8px]">
        <PhoneIcon />
        <a
          className="text-[18px] leading-[150%] text-[#414141] underline"
          href="tel:+7 82140 91330"
        >
          {number}
        </a>
      </div>
    </>
  );
};

export default Phone;
