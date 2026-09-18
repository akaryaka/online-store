import type { Props } from "./Button.props";

const Button = ({ children }: Props) => {
  return (
    <>
      <button className="border border-[#70C05B] text-[16px] font-[Rubik] w-[100%] p-[8px] bg-[#fff] text-[#70C05B] rounded-[4px] hover:text-[#fff] hover:bg-[#FF6633] hover:border-[#FF6633] transition-all cursor-pointer">
        {children}
      </button>
    </>
  );
};

export default Button;
