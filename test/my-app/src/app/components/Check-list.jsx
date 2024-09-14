import Image from "next/image";
import { useState } from "react";
import "./Check-list.css";

function CheckList({ initialChecked, todoText, onCheck }) {
    const [isChecked, setIsChecked] = useState(initialChecked);

    const toggleCheck = () => {
        setIsChecked((prevState) => !prevState);
        onCheck(!isChecked); // 부모 컴포넌트에 체크 상태 전달
    };

    return (
        <div className={`check-box ${isChecked ? "checked" : ""}`}>
            <div className="check-img" onClick={toggleCheck}>
                <Image
                    src={
                        isChecked
                            ? "/img/ic/checkbox/checked.png"
                            : "/img/ic/checkbox/default.png"
                    }
                    alt={isChecked ? "done" : "default"}
                    width={32}
                    height={32}
                />
            </div>
            <p
                className={`font-regular-16px ${
                    isChecked ? "line-through" : ""
                }`}
            >
                {todoText}
            </p>
        </div>
    );
}

export default CheckList;
