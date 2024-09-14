import Image from "next/image";
import styles from "../../page.module.css";

interface UploadBtnProps {
    onClick: () => void;
}

const Editbtn: React.FC<UploadBtnProps> = ({ onClick }) => {
    return (
        <div className={styles.uploadBtn} onClick={onClick}>
            <Image src={"/img/Plus.png"} alt="plus" width={64} height={64} />
        </div>
    );
};

export default Editbtn;
