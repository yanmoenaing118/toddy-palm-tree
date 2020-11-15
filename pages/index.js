import AboutToddyTree from "../components/AboutToddyTree/AboutToddyTree";
import Hero from "../components/Hero/Hero";
import Layout from "../components/Layout/Layout";
import Products from "../components/Products/Products";

const index = (props) => {
  return (
    <Layout>
      <Hero />
      <AboutToddyTree />
      {/* <Products /> */}
    </Layout>
  );
};

export default index;
