"use client";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Item } from "../../types/todoItem";
import styles from "../../page.module.css";
import Image from "next/image";
import Editbtn from "@/app/components/btn/Editbtn";
import Updatebtn from "@/app/components/btn/Updatebtn";
import { UpdateItemDTO } from "@/app/types/UpdateItemDTO";
import Deletebtn from "@/app/components/btn/Deletebtn";

const TodoDetail: React.FC = () => {
    const params = useParams();
    const itemId = params.itemId; // 동적 라우팅에서 id 가져오기
    const tenantId = process.env.NEXT_PUBLIC_TENANT_ID; //내 이름
    const router = useRouter(); // useRouter 훅 사용
    const [todoItem, setTodoItem] = useState<Item>(); // 할 일 상태 관리
    const [loading, setLoading] = useState<boolean>(true); // 로딩 상태 관리
    const [error, setError] = useState<string | null>(null); // 에러 상태 관리
    const [uploadUrl, setUploadUrl] = useState<string | null>(null); // 업로드된 이미지 URL
    const [memo, setMemo] = useState<string>(""); // 메모 상태 관리
    const [name, setName] = useState<string>("");
    const fileInputRef = useRef<HTMLInputElement | null>(null); // 파일 입력 필드 접근을 위한 ref

    //제목 변경하기
    const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };
    // 파일 선택 핸들러
    const handleFileChange = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = event.target.files ? event.target.files[0] : null;
        if (file) {
            // 파일 업로드
            const formData = new FormData();
            formData.append("image", file);
            try {
                const response = await axios.post(
                    `https://assignment-todolist-api.vercel.app/api/${tenantId}/images/upload`,
                    formData
                );
                if (response.data.url) {
                    setUploadUrl(response.data.url); // 업로드된 이미지 URL 저장
                }
            } catch (error) {
                console.error("이미지 업로드 중 오류 발생:", error);
            }
        }
    };

    // 할 일 상세 정보
    useEffect(() => {
        const fetchDetail = async () => {
            try {
                setLoading(true);
                const response = await axios.get(
                    `https://assignment-todolist-api.vercel.app/api/${tenantId}/items/${itemId}`
                );
                setTodoItem(response.data); // 할 일 데이터 설정
                setMemo(response.data.memo || ""); // 메모 상태 설정
                setName(response.data.name);
            } catch (error) {
                console.error(
                    "데이터를 가져오는 중 오류가 발생했습니다:",
                    error
                );
                setError("데이터를 가져오는 중 오류가 발생했습니다.");
            } finally {
                setLoading(false);
            }
        };

        if (itemId && tenantId) {
            fetchDetail(); // itemId와 tenantId가 있는 경우에만 요청 실행
        }
    }, [itemId, tenantId]);

    // 할 일 업데이트 처리 함수
    const handleUpdate = async () => {
        if (!todoItem) return;

        try {
            const updatedItem: UpdateItemDTO = {
                name: name,
                isCompleted: todoItem.isCompleted,
                memo: memo, // 수정된 메모
                imageUrl: uploadUrl || todoItem.imageUrl, // 업로드된 이미지 URL 또는 기존 이미지
            };

            await axios.patch(
                `https://assignment-todolist-api.vercel.app/api/${tenantId}/items/${itemId}`,
                updatedItem
            );
            alert("할 일이 성공적으로 업데이트되었습니다.");
            router.push("/");
        } catch (error) {
            console.error("할 일 업데이트 중 오류 발생:", error);
            alert("할 일 업데이트 중 오류가 발생했습니다.");
        }
    };
    //삭제 함수
    const handleDelete = async () => {
        try {
            const response = await axios.delete(
                `https://assignment-todolist-api.vercel.app/api/${tenantId}/items/${itemId}`
            );
            alert(response.data.message + " 성공적으로 삭제되었습니다.");
            router.push("/");
        } catch (error) {}
    };

    // 파일 선택 창 열기
    const handleClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    if (loading) {
        return <div>로딩 중...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            {todoItem ? (
                <div>
                    <div
                        className={`${styles.detailBox} ${
                            todoItem.isCompleted ? styles.checked : ""
                        } font-bold-20px`}
                    >
                        <Image
                            src={
                                todoItem.isCompleted
                                    ? "/img/ic/checkbox/checked.png"
                                    : "/img/ic/checkbox/default.png"
                            }
                            alt={todoItem.isCompleted ? "done" : "default"}
                            width={32}
                            height={32}
                            //클릭시 iscompleted 토글
                            onClick={() => {
                                setTodoItem({
                                    ...todoItem,
                                    isCompleted: !todoItem.isCompleted,
                                });
                            }}
                            style={{ cursor: "pointer" }} // 클릭 가능한 이미지처럼 보이도록
                        />
                        <input
                            type="text"
                            value={name}
                            onChange={onChangeName}
                            className={`${styles.nameChange} font-bold-20px`}
                        />
                    </div>
                    <div className={styles.uploadContent}>
                        <div className={styles.imageUpload}>
                            {/* 삼항 연산자 2번 써서 업로드 url이 없을 땐 기존  url, 기존 url도 없으면 기본 박스 출력 */}
                            {uploadUrl ? (
                                <Image
                                    src={uploadUrl}
                                    alt="uploaded image"
                                    width={384}
                                    height={311}
                                />
                            ) : todoItem.imageUrl ? (
                                <Image
                                    src={todoItem.imageUrl}
                                    alt="uploaded image"
                                    width={384}
                                    height={311}
                                />
                            ) : (
                                <div className={styles.imageContent}>
                                    <Image
                                        src={"/img/ic/upload.png"}
                                        alt="upload"
                                        width={64}
                                        height={64}
                                    />
                                    <Editbtn onClick={handleClick} />
                                </div>
                            )}
                            <input
                                type="file"
                                ref={fileInputRef}
                                style={{ display: "none" }}
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                        </div>
                        <div className={styles.memoBox}>
                            <p className="font-800-16px">Memo</p>
                            <textarea
                                value={memo}
                                onChange={(e) => setMemo(e.target.value)}
                                name="memo"
                                id=""
                            />
                        </div>
                    </div>

                    <div className={styles.btnBox}>
                        <Updatebtn onClick={handleUpdate} />
                        <Deletebtn onClick={handleDelete} />
                    </div>
                </div>
            ) : (
                <div>할 일을 찾을 수 없습니다.</div>
            )}
        </div>
    );
};

export default TodoDetail;
