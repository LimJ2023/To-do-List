import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    let name = "LIMJ";
    let age = 30;
    let google = "http://google.com";
    return (
        <div>
            <h4 className="title">안녕하세요.</h4>
            <p className="title-sub">
                by {name}, {age}
            </p>
            <a href={google}>구글링크</a>
        </div>
    );
}
