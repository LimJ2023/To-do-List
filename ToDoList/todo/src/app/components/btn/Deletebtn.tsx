import Image from "next/image";
import styles from "../../page.module.css";

interface DeleteBtnProps {
    onClick: () => void;
}

const Deletebtn: React.FC<DeleteBtnProps> = ({ onClick }) => {
    return (
        <button onClick={onClick} className={styles.deleteBtn}>
            <Image
                src={"/img/ic/X.png"}
                alt="삭제하기"
                width={16}
                height={16}
            />{" "}
            삭제하기
        </button>
    );
};

export default Deletebtn;
