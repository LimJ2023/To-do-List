// number
// string
// boolean
// null
// undefined
// any

let a: number = 3;
a = 4;
let b: string = "hi";

let c: any = 4;
c = "1234";

let d: number | string = "number string";
// d=null 안됨

let e: string[] = ["apple", "melon"];

function addNumber(a: number, b: number): number {
    return a + b;
}
addNumber(3, 7);

//타입스크립트 구동하는 법
// tsc index.ts
//설정 파일
// tsconfig.json
