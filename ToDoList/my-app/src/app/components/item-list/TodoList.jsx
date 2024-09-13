"use client";
import { useState } from "react";
import Image from "next/image";
import CheckList from "../Check-list";
import InputAddItem from "../search/InputAddItem";
import AddBtn from "../btn/AddBtn";
import "./TodoList.css";
function TodoList() {
    // 할 일 목록과 완료된 항목 목록 상태
    const [allItems, setAllItems] = useState([]);
    const [todoItems, setTodoItems] = useState([]);
    const [doneItems, setDoneItems] = useState([]);
    const [newItem, setNewItem] = useState("");

    // 할 일 추가
    const handleAddItem = () => {
        if (newItem.trim() !== "") {
            setAllItems([...allItems, newItem]);
            setNewItem("");
        }
    };

    // 항목 상태 변경 (todo -> done)
    const handleToggleItem = (index, isChecked) => {
        if (isChecked) {
            // 체크된 항목은 done으로 이동
            const itemToMove = todoItems[index];
            setDoneItems([...doneItems, itemToMove]);
            setTodoItems(todoItems.filter((_, i) => i !== index));
        }
    };

    return (
        <>
            <div className="input-container">
                <InputAddItem
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                />
                <AddBtn onClick={handleAddItem} />
            </div>

            <div className="list-container">
                {/* todo 항목 */}
                <div className="item-list">
                    <Image
                        src={"/img/todo/todo.png"}
                        alt="todo"
                        width={101}
                        height={36}
                    />
                    <ul>
                        {todoItems.map((item, index) => (
                            <li key={index}>
                                <CheckList
                                    initialChecked={false}
                                    todoText={item}
                                    onCheck={() =>
                                        handleToggleItem(index, true)
                                    }
                                />
                            </li>
                        ))}
                    </ul>
                </div>

                {/* done 항목 */}
                <div className="item-list">
                    <Image
                        src={"/img/todo/done.png"}
                        alt="done"
                        width={101}
                        height={36}
                    />
                    <ul>
                        {doneItems.map((item, index) => (
                            <li key={index}>
                                <CheckList
                                    initialChecked={true}
                                    todoText={item}
                                    onCheck={() => {}}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default TodoList;
