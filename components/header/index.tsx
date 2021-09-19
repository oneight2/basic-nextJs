import Link from "next/link"
import styles from "./header.module.css"
export default function Header() {
    return (
        <header className={styles.header}>
            <ul className={styles.flex}>
                <li>
                    <Link href="/users">user</Link>
                </li>
                <li>
                    <Link href="/">Utama</Link>
                </li>
                <li>
                    <Link href="/flexbox">flexbox</Link>
                </li>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
            </ul>
        </header >
    )
}

