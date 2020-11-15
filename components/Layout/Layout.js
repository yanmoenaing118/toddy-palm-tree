import Head from "next/head";
import Navigation from "./Navigation/Navigation";
import styles from "./Layout.module.scss";

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>About toddy tree</title>
      </Head>
      <div className={styles.Layout}>
        <Navigation />
        {props.children}
        <footer></footer>
      </div>
    </>
  );
};

export default Layout;
