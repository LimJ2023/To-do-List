// import Image from "next/image";
// import styles from "../page.module.css";
// import Uploadbtn from "./btn/Editbtn";
// import { useRef, useState } from "react";

// const ImageUpload: React.FC = () => {
//     const [selectedFile, setSelectedFile] = useState<File | null>(null); // 파일 상태 관리
//     const [uploadUrl, setUploadUrl] = useState<string | null>(null); // 업로드 후 이미지 URL 저장
//     const fileInputRef = useRef<HTMLInputElement | null>(null); // 파일 입력 필드 접근을 위한 ref
//     const tenantId = process.env.NEXT_PUBLIC_TENANT_ID;

//     // 파일 업로드 처리 함수
//     const handleUpload = async (file: File) => {
//         const formData = new FormData();
//         formData.append("image", file); // FormData에 파일 추가

//         try {
//             const response = await fetch(
//                 `https://assignment-todolist-api.vercel.app/api/${tenantId}/images/upload`,
//                 {
//                     method: "POST",
//                     body: formData,
//                 }
//             );

//             if (response.ok) {
//                 const data = await response.json();
//                 setUploadUrl(data.url); // 업로드된 이미지 URL 저장
//                 alert("업로드 성공!");
//             } else {
//                 alert("업로드 실패!");
//             }
//         } catch (error) {
//             console.error("업로드 중 오류 발생:", error);
//             alert("업로드 중 오류가 발생했습니다.");
//         }
//     };

//     // 파일 선택 핸들러 (선택 시 즉시 업로드)
//     const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         const file = event.target.files ? event.target.files[0] : null;
//         console.log("파일 업로드 진입 : ", file);
//         if (file) {
//             setSelectedFile(file); // 파일 상태 업데이트
//         }
//     };

//     // 파일 선택 창 열기 (UploadBtn 클릭 시 실행)
//     const handleClick = () => {
//         if (fileInputRef.current) {
//             fileInputRef.current.click(); // 파일 입력 필드 클릭 트리거
//         }
//     };

//     return (
//         <div className={styles.imageUpload}>
//             {/* 업로드된 이미지가 있으면 해당 이미지 표시, 없으면 기본 이미지 표시 */}
//             {uploadUrl ? (
//                 <Image
//                     src={uploadUrl}
//                     alt="uploaded image"
//                     width={384}
//                     height={311}
//                 />
//             ) : (
//                 <div className={styles.imageContent}>
//                     <Image
//                         src={"/img/ic/upload.png"}
//                         alt="upload"
//                         width={64}
//                         height={64}
//                     />
//                     {/* Uploadbtn 클릭 시 파일 선택 트리거 */}
//                     <Uploadbtn onClick={handleClick} />{" "}
//                 </div>
//             )}
//             {/* 숨겨진 파일 입력 필드 */}
//             <input
//                 type="file"
//                 ref={fileInputRef} // ref로 파일 입력 필드에 접근
//                 style={{ display: "none" }} // 숨김 처리
//                 accept="image/*"
//                 onChange={handleFileChange} // 파일 선택 시 즉시 업로드
//             />
//         </div>
//     );
// };

// export default ImageUpload;
