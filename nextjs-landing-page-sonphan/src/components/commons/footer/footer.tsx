"use client";
import styles from "@/styles/common/footer.module.scss";
import FooterNavigation from "@/components/commons/footer-navigation/footer-navigation";
import ContactUs from "@/components/commons/contact-us/contact-us";
import UserSubscribe from "@/components/commons/user-subcribe/user-subcribe";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footer__contents}>
          <section className={styles.footer__navigation}>
            <FooterNavigation />
          </section>
          <section className={styles.footer__contact__us}>
            <ContactUs />
          </section>
          <section className={styles.footer__subcribe}>
            <UserSubscribe />
          </section>
        </div>
      </div>
    </>
  );
};
export default Footer;
