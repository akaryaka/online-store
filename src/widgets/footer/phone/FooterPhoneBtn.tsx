import PhoneIcon from "@widgets/icons/PhoneIcon";

const FooterPhoneBtn = () => {
  return (
    <>
      <div className="phone">
        <a className="flex items-center gap-[8px]" href="tel:8 800 777 33 33">
          <PhoneIcon />
          <span className="text-[16px]">8 800 777 33 33</span>
        </a>
      </div>
    </>
  );
};

export default FooterPhoneBtn;
