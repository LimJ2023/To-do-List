"use client";
import { useState } from "react";
import styles from "../page.module.css";
import Addbtn from "./btn/Addbtn";
import axios from "axios";
import { Item } from "../types/todoItem";
interface SearchProps {
    addTodo: (todoItem: Item) => void; // 상위 컴포넌트에서 전달받은 함수
}

const Search: React.FC<SearchProps> = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState<string>("");

    // 엔터키 입력 시 호출될 함수 (onClick과 동일하게 동작)
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleAddClick();
        }
    };
    const handleAddClick = async () => {
        if (inputValue.trim()) {
            try {
                // API 요청을 보내기 위해 tenantId 고정
                const tenantId = "yohanLim";

                // API에 POST 요청을 보내서 할 일 추가
                const response = await axios.post(
                    `https://assignment-todolist-api.vercel.app/api/${tenantId}/items`,
                    {
                        name: inputValue,
                    }
                );

                // 성공 시 상위 컴포넌트에 새 할 일 전달
                addTodo(response.data);
                setInputValue(""); // 입력 필드 초기화
            } catch (error) {
                console.error("할 일 추가 중 오류가 발생했습니다:", error);
            }
        }
    };

    return (
        <>
            <input
                type="text"
                placeholder="할 일을 입력하세요"
                className={`font-regular-16px ${styles.search}`}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress} // 엔터키를 눌렀을 때 실행 // 입력 필드 값 상태 업데이트
            />
            <Addbtn onClick={handleAddClick} /> {/* 버튼 클릭 시 할 일 추가 */}
        </>
    );
};

export default Search;
