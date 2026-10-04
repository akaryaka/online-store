import Phone from "@/shared/ui/phone/Phone";

interface ContactsStoreProps {
  marketIcon: any;
  locationIcon: any;
  phoneNumber: string;
}

const ContactsStore = ({
  marketIcon,
  locationIcon,
  phoneNumber,
}: ContactsStoreProps) => {
  return (
    <>
      <div>
        <div className="mb-[8px]">{marketIcon}</div>
        <div className="flex items-center gap-[8px] mb-[8px]">
          {locationIcon}
          <span className="text-[18px] leading-[150%] text-[#414141]">
            ул. Дорожная 10
          </span>
        </div>
        <Phone number={phoneNumber} />
      </div>
    </>
  );
};

export default ContactsStore;
