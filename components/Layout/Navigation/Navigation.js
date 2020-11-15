import Link from "next/link";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import styles from "./Navigation.module.scss";

const Navigation = (props) => {
  return (
    <div className={styles.Navigation}>
      <div className={styles.Logo}>
        <Logo />
      </div>
      <div className={styles.Menu}>
        <Menu />
      </div>
      <nav>
        <Link href="/#about">
          <a>ထန်းပင်အကြာင်း</a>
        </Link>
        <Link href="/#products">
          <a>ထန်းပင်ထွက်ပစ္စည်းများ</a>
        </Link>
        <Link href="/">
          <a>ပုံများ</a>
        </Link>
        <Link href="/">
          <a>ဝယ်ရန်</a>
        </Link>
        <Link href="/">
          <a>ဆက်သွယ်ရန်</a>
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;
