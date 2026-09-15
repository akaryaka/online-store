import type { Props } from "./Button.props";

const Button = ({ children }: Props) => {
  return (
    <>
      <button className="border border-[#70C05B] text-[16px] font-[Rubik] w-[100%] p-[8px] bg-[#fff] text-[#70C05B] rounded-[4px] cursor-pointer">
        {children}
      </button>
    </>
  );
};

export default Button;

/* Desc/Text/S */
// font-family: 'Rubik';
// font-style: normal;
// font-weight: 400;
// font-size: 16px;
// line-height: 150%;
