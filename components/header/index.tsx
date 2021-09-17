import Link from "next/link"
export default function Header() {
    return (
        <header>
            <ul>
                <li>
                    <Link href="/users">Halman user</Link>
                </li>
                <li>
                    <Link href="/">Halman Utama</Link>
                </li>
            </ul>
        </header>
    )
}
