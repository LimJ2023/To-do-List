import Image from "next/image";

export default function Home() {
    return (
        <>
            <h2>hello</h2>
            <Image
                src="/Pictures/kita1.jpg"
                alt=""
                width="200"
                height={"400"}
            />
        </>
    );
}
