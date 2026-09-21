import type { Props } from "./Button.props";

const ButtonSecondary = ({ children }: Props) => {
  return (
    <>
      <button className="text-[16px] font-[Rubik] leading-[150%] p-[8px_16px] bg-secondary text-[#fff] rounded-[4px] transition-all cursor-pointer">
        {children}
      </button>
    </>
  );
};

export default ButtonSecondary;
