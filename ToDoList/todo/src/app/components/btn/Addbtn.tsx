import React from "react";
import styles from "../../page.module.css";
import Image from "next/image";

interface AddbtnProps {
    onClick: () => void; // 클릭 이벤트 함수
}

const Addbtn: React.FC<AddbtnProps> = ({ onClick }) => {
    return (
        <button onClick={onClick} className={styles.addBtn}>
            <Image
                src={"/img/ic/Variant2.png"}
                alt="추가하기"
                width={24}
                height={24}
            />
            <p>추가하기</p>
        </button>
    );
};

export default Addbtn;
