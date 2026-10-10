import Container from "@/widgets/container";
import Crumbs from "@/widgets/crumbs";
import Title from "@/shared/ui/title";
import Layout from "@app/layout";
import ContactsItems from "./ui/items/ContactsItems";
import ContactsMap from "./ui/map/ContactsMap";
import ContactsStores from "./ui/stores/ContactsStores";

const Contacts = () => {
  return (
    <>
      <Layout title="Контакты">
        <div className="pb-[80px]">
          <Container>
            <div className="p-[24px_0px]">
              <Crumbs page="Контакты" />
            </div>
            <Title className="mb-[40px]">Контакты</Title>
            <ContactsItems />
            <ContactsStores />
            <ContactsMap />
          </Container>
        </div>
      </Layout>
    </>
  );
};

export default Contacts;
