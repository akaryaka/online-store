import LocationIcon from "@/widgets/icons/contacts/LocationIcon";
import PercentIcon from "@/widgets/icons/contacts/PercentIcon";
import ContactsItem from "./ui/ContactsItem";

const ContactsItems = () => {
  return (
    <>
      <div className="flex mb-[120px] gap-[80px]">
        <ContactsItem
          title="Бухгалтерия, склад"
          phone="+7 82140 92619"
          icon={<LocationIcon />}
        />
        <ContactsItem
          title="Вопросы по системе лояльности"
          phone="+7 908 716 33 97"
          icon={<PercentIcon />}
        />
      </div>
    </>
  );
};

export default ContactsItems;
