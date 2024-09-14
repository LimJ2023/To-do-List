import React from "react";
import { Item as TodoItemType } from "../types/todoItem";
import styles from "../page.module.css";
import Link from "next/link";
import Image from "next/image";

interface ToDoItemProps {
    todo: TodoItemType;
    onToggle: (id: number) => void;
}

const ToDoItemcomponent: React.FC<ToDoItemProps> = ({ todo, onToggle }) => {
    return (
        <li
            //체크될 시 스타일에 .checked 추가됨
            className={`${styles.todoItem} ${
                todo.isCompleted ? styles.checked : ""
            }`}
        >
            <Image
                src={
                    todo.isCompleted
                        ? "/img/ic/checkbox/checked.png"
                        : "/img/ic/checkbox/default.png"
                }
                alt={todo.isCompleted ? "done" : "default"}
                width={32}
                height={32}
                onClick={() => onToggle(todo.id)} // 클릭 시 onToggle 호출
                style={{ cursor: "pointer" }} // 클릭 가능한 이미지처럼 보이도록
            />
            <span>
                <Link href={"/items/" + todo.id} className={styles.itemLink}>
                    {todo.name}
                </Link>
            </span>
        </li>
    );
};

export default ToDoItemcomponent;
