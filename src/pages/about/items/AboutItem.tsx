import CheckIcon from "@/widgets/icons/aboutPage/CheckIcon";

interface AboutItemProps {
  title: string;
  desc: string;
}

const AboutItem = ({ title, desc }: AboutItemProps) => {
  return (
    <>
      <div className="flex gap-[10px]">
        <div>
          <CheckIcon />
        </div>
        <div>
          <div className="text-[20px] leading-[150%] text-[#414141] mb-[16px]">
            {title}
          </div>
          <div className="text-[24px] leading-[150%] text-[#414141] font-bold">
            {desc}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutItem;
