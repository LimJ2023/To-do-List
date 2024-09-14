import Image from "next/image";
import styles from "../page.module.css";

interface CheckListDetailProps {
    name: string;
    isCompleted: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const CheckListDetail: React.FC<CheckListDetailProps> = ({
    name,
    isCompleted,
    onChange,
}) => {
    return (
        <div className={`${styles.detailBox} font-bold-20px`}>
            <Image
                src={
                    isCompleted
                        ? "/img/ic/checkbox/checked.png"
                        : "/img/ic/checkbox/default.png"
                }
                alt={isCompleted ? "done" : "default"}
                width={32}
                height={32}
                // onClick={() => onToggle(todo.id)} // 클릭 시 onToggle 호출
                style={{ cursor: "pointer" }} // 클릭 가능한 이미지처럼 보이도록
            />
            <input type="text" value={name} onChange={onChange} />
        </div>
    );
};

export default CheckListDetail;
