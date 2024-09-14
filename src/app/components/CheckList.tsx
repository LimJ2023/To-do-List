"use client";
import Image from "next/image";
import styles from "../page.module.css";
import { Item, Item as TodoItem } from "../types/todoItem";
import { useEffect, useState } from "react";
import ToDoItemcomponent from "./ToDoItemcomponent";
import Search from "./Search";
import axios from "axios";

export const CheckList: React.FC = () => {
    const [todoList, setTodoList] = useState<TodoItem[]>([]);
    const [error, setError] = useState<string | null>(null); // 에러 상태 추가
    const [loading, setLoading] = useState<boolean>(true); // 로딩 상태 추가

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const tenantId = "yohanLim";
                const response = await axios.get(
                    `https://assignment-todolist-api.vercel.app/api/${tenantId}/items/`
                );
                console.log(response.data); // 할 일 목록 출력
                setTodoList(response.data);
            } catch (error) {
                console.error(
                    "할 일 목록을 가져오는 중 오류가 발생했습니다:",
                    error
                );
                setError("할 일 목록을 가져오는 중 오류가 발생했습니다.");
            } finally {
                setLoading(false); // 로딩 완료
            }
        };
        fetchTodos();
    }, []);

    // 체크박스 토글 기능
    const toggleTodo = (id: number) => {
        setTodoList((prevList) =>
            prevList.map((todo) =>
                todo.id === id
                    ? { ...todo, isCompleted: !todo.isCompleted }
                    : todo
            )
        );
    };

    // 새로운 할 일 추가
    const addTodo = (item: Item) => {
        setTodoList((prevList) => [...prevList, item]); // 리스트에 새 할 일 추가
    };

    if (loading) {
        return <div>로딩 중...</div>; // 로딩 상태 표시
    }

    if (error) {
        return <div>{error}</div>; // 에러 메시지 표시
    }

    return (
        <>
            {/* 할 일 추가하기 */}
            <Search addTodo={addTodo} />

            {/* 아이템 목록 */}
            <div className={styles.listContainer}>
                <div className={styles.titles}>
                    <Image
                        src={"/img/todo/todo.png"}
                        alt="todo"
                        width={97}
                        height={36}
                    />
                    <Image
                        src={"/img/todo/done.png"}
                        alt="done"
                        width={97}
                        height={36}
                    />
                </div>
                <div className={styles.listContent}>
                    {/* 체크되지 않은 아이템 리스트 */}
                    {todoList.filter((todo) => !todo.isCompleted).length ===
                    0 ? (
                        <div className={styles.emptyTodo}>
                            <Image
                                src={"/img/Type=Todo, Size=Large.png"}
                                alt="empty"
                                width={240}
                                height={240}
                            />
                            <p className="font-700-16px">할 일이 없어요.</p>
                            <p className="font-700-16px">
                                TODO를 새롭게 추가해주세요!
                            </p>
                        </div>
                    ) : (
                        <ul>
                            {todoList
                                .filter((todo) => !todo.isCompleted)
                                .map((todo) => (
                                    <ToDoItemcomponent
                                        key={todo.id}
                                        todo={todo}
                                        onToggle={toggleTodo}
                                    />
                                ))}
                        </ul>
                    )}

                    {/* 체크 된 아이템 리스트 */}
                    {todoList.filter((todo) => todo.isCompleted).length ===
                    0 ? (
                        <div className={styles.emptyDone}>
                            <Image
                                src={"/img/Type=Done, Size=Large.png"}
                                alt="done"
                                width={240}
                                height={240}
                            />
                            <p className="font-700-16px">
                                아직 다 한 일이 없어요.
                            </p>
                            <p className="font-700-16px">
                                해야 할 일을 체크해보세요!
                            </p>
                        </div>
                    ) : (
                        <ul>
                            {todoList
                                .filter((todo) => todo.isCompleted)
                                .map((todo) => (
                                    <ToDoItemcomponent
                                        key={todo.id}
                                        todo={todo}
                                        onToggle={toggleTodo}
                                    />
                                ))}
                        </ul>
                    )}
                </div>
            </div>
        </>
    );
};
