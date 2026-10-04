interface ContactsItemProps {
  icon: any;
  title: string;
  phone: string;
}

const ContactsItem = ({ icon, title, phone }: ContactsItemProps) => {
  return (
    <>
      <div>
        <div className="flex items-center gap-[8px] mb-[16px]">
          <div>{icon}</div>
          <span className="text-[24px] leading-[150%] text-[#414141]">
            {title}
          </span>
        </div>
        <a
          className="underline leading-[150%] text-[#414141] text-[24px] font-bold ml-[38px]"
          href="tel:+7 82140 92619"
        >
          {phone}
        </a>
      </div>
    </>
  );
};

export default ContactsItem;
