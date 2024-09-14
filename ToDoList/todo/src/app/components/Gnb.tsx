import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
const Gnb = () => {
    return (
        <div className={styles.gnbBox}>
            <Link href={"/"}>
                <div className={styles.logo}>
                    <Image
                        src="/img/logo-Large.png"
                        alt="logo-Large"
                        className={styles.gnbLogo}
                        width={151}
                        height={40}
                    />
                </div>
            </Link>
        </div>
    );
};

export default Gnb;
