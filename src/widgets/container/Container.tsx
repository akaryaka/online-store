import type { Props } from "./Container.props";

const Container = ({ children }: Props) => {
  return (
    <>
      <div className="w-[1208px] max-[1300px]:w-[1080px] ml-[auto] mr-[auto]">
        {children}
      </div>
    </>
  );
};

export default Container;
