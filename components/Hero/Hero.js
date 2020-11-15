import Image from "next/image";
import Link from "next/link";
import Fade from "react-reveal/Fade";

import styles from "./Hero.module.scss";

export default function Hero(props) {
  return (
    <section className={`${styles.Hero}`}>
      <div className={styles.TextBox}>
        <Fade delay={500} bottom>
          <h1>ထန်းပင်ထွက်ပစ္စည်းများကို မှာယူလိုက်ပါ</h1>

          <p>
            မြန်မာ့ရိုးရာစစ်စစ် ထန်းပင်ထွက်ပစ္စည်း ကိုမှသုံးစွဲလိုသူများအတွက်
            ကျွန်တော်တို့ရဲ့ဝန်ဆောင်မှုကို အကောင်းဆုံးဖြစ်အောင်ဆောင်ရွက်
            ပေးနေပါပီ။
            <Link href="/buy">
              <a>အခုပဲမှာယူလိုက်ပါ!</a>
            </Link>
          </p>
        </Fade>
      </div>

      <div className={`${styles.Trees}`}>
        <div className={`${styles.Tree} ${styles.Tree_Left}`}>
          <Fade bottom>
            <Image src="/images/tree.png" width="200px" height="600px" />
          </Fade>
        </div>

        <div className={`${styles.Tree} ${styles.Tree_Right}`}>
          <Fade delay={500} bottom>
            <Image src="/images/tree.png" width="200px" height="600px" />
          </Fade>
        </div>
      </div>

      <div className={`${styles.Circle} ${styles.Circle_Left}`}></div>
      <div className={`${styles.Circle} ${styles.Circle_Middle}`}></div>
      <div className={`${styles.Circle} ${styles.Circle_Right}`}></div>
    </section>
  );
}
