import Layout from "@/app/layout";
import Container from "@/widgets/container";
import Crumbs from "@/widgets/crumbs";

const Article = () => {
    return(
        <>
            <Layout title="Статья">
            <div className="pt-[24px] pb-[80px]">
          <Container>
            <Crumbs page="Статья" />
          </Container></div>
            </Layout>
        </>
    )
}

export default Article;