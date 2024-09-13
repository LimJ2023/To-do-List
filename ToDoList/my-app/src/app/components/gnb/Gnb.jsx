import React from "react";
import Link from "next/link";
import Image from "next/image";
import logoLarge from "../../../../public/img/logo-Large.png";
import styles from "./Gnb.css";

function Gnb() {
    return (
        <div className="gnb-box gnb-large">
            <Link href={"/"}>
                <div className={styles.logo}>
                    <Image
                        src={logoLarge}
                        alt="logo-Large"
                        className="gnb-logo"
                    />
                </div>
            </Link>
        </div>
    );
}

export default Gnb;
