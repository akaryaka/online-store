import type { Props } from "./Button.props";

const ButtonGreyscale = ({ children }: Props) => {
  return (
    <>
      <button className="text-[16px] font-[Rubik] p-[8px_16px] bg-[#F3F2F1] text-[#606060] rounded-[4px] transition-all cursor-pointer">
        {children}
      </button>
    </>
  );
};

export default ButtonGreyscale;
