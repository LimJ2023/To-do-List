export interface Item {
    id: number; // number 타입, 필수
    tenantId: string; // string 타입, 필수
    name: string; // string 타입, 필수
    memo: string | null; // string 또는 null을 허용
    imageUrl: string | null; // string 또는 null을 허용
    isCompleted: boolean; // boolean 타입, 기본값은 false
}
