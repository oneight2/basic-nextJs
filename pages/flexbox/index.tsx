import Link from "next/link"
import { Fragment } from "react"
import styles from "./flexbox.module.css"
export default function Flexbox() {
    return (
        <>
            <div className={styles['container-satu']}>
                <div className={styles['kolom-utama']}>
                    <h3>Kolom Utama</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, eum, nihil vitae autem itaque aliquam aut quam voluptatem a natus minima officiis at animi quod! Autem libero quia sapiente aspernatur nam consequuntur nisi incidunt a vitae reprehenderit facilis deserunt tenetur, iure, quibusdam, labore quidem error fuga inventore! A, iusto et.</p>
                </div>
                <div className={styles['siderbar-satu']}>
                    <h3>Sidebar 1</h3>
                    <ul>
                        <li>
                            <Link href="/">Halaman Utama</Link>
                        </li>
                        <li>

                            <Link href="/users">Halaman Users</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles['sidebar-dua']}>
                    <h3>Sidebar 2</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor amet qui tenetur expedita similique magnam quis voluptas deserunt repellendus. Sequi?</p>
                </div>
            </div>
            {/* LATIHAN 2 */}
            <div className={styles['container-dua']}>
                <div className={[styles.layanan, styles.satu].join('')}>
                    <h4>Layanan 1</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, excepturi?</p>
                </div>
                <div className={[styles.layanan, styles.dua].join('')}>
                    <h4>Layanan 2</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, voluptas.</p>
                </div>
                <div className={[styles.layanan, styles.tiga].join('')}>
                    <h4>Layanan 3</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, aspernatur.</p>
                </div>

            </div>
        </>
    )
}
