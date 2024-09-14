import Image from "next/image";
import styles from "../../page.module.css";
interface UpdateBtnProps {
    onClick: () => void;
}
const Updatebtn: React.FC<UpdateBtnProps> = ({ onClick }) => {
    return (
        <button className={styles.updateBtn} onClick={onClick}>
            <Image
                src={"/img/ic/check.png"}
                alt="체크"
                width={16}
                height={16}
            />
            수정 완료
        </button>
    );
};

export default Updatebtn;
