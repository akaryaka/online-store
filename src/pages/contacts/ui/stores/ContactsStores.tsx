import MarketIcon1 from "@/widgets/icons/contactsPage/MarketIcon1";
import MarketIcon2 from "@/widgets/icons/contactsPage/MarketIcon2";
import MarketIcon3 from "@/widgets/icons/contactsPage/MarketIcon3";
import MarketIcon4 from "@/widgets/icons/contactsPage/MarketIcon4";
import LocationIcon from "@/widgets/icons/contacts/LocationIcon";
import Button from "@/shared/ui/button/Button";
import ContactsStore from "./ui/ContactsStore";

const storeList = [
  {
    id: 1,
    marketIcon: <MarketIcon1 />,
    locationIcon: <LocationIcon />,
    phoneNumber: "+7 904 271 35 90",
  },
  {
    id: 2,
    marketIcon: <MarketIcon2 />,
    locationIcon: <LocationIcon />,
    phoneNumber: "+7 82140 91330",
  },
  {
    id: 3,
    marketIcon: <MarketIcon3 />,
    locationIcon: <LocationIcon />,
    phoneNumber: "+7 82140 91101",
  },
  {
    id: 4,
    marketIcon: <MarketIcon4 />,
    locationIcon: <LocationIcon />,
    phoneNumber: "+7 82140 91300",
  },
];

const ContactsStores = () => {
  return (
    <>
      <div>
        <h2 className="text-[36px] leading-[150%] font-bold text-[#414141] mb-[40px]">
          Наши магазины
        </h2>
        <div className="flex gap-[24px] mb-[32px]">
          <Button className="text-[#fff] bg-[#70C05B]">п.Щельяюр</Button>
          <Button className="text-[#606060] bg-[#F3F2F1]">д.Вертеп</Button>
          <Button className="text-[#606060] bg-[#F3F2F1]">с.Краснобор</Button>
          <Button className="text-[#606060] bg-[#F3F2F1]">д.Диюр</Button>
        </div>
        <div className="flex gap-[80px] mb-[32px]">
          {storeList.map((store) => {
            return (
              <ContactsStore
                marketIcon={store.marketIcon}
                locationIcon={store.locationIcon}
                phoneNumber={store.phoneNumber}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ContactsStores;
