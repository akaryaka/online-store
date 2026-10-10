import Container from "@/widgets/container/Container";
import Crumbs from "@/widgets/crumbs/Crumbs";
import Title from "@/shared/ui/title/Title";
import Layout from "@app/layout";
import ContactsItems from "./items/ContactsItems";
import ContactsMap from "./map/ContactsMap";
import ContactsStores from "./stores/ContactsStores";

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
