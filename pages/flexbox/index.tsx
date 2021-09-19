import Link from "next/link"
import styles from "./flexbox.module.css"
import Image from "next/image"
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
                <div className={styles.satu}>
                    <h4>Layanan 1</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, excepturi?</p>
                </div>
                <div className={styles.dua}>
                    <h4>Layanan 2</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, voluptas.</p>
                </div>
                <div className={styles.tiga}>
                    <h4>Layanan 3</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, aspernatur.</p>
                </div>

            </div>
            {/* LATIHAN 3 */}
            <div className={styles['container-tiga']}>
                <div className={styles.card}>
                    <div className={styles.header}></div>
                    <div className={styles.body}>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, delectus.</p>
                        <button>Button</button>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.header}></div>
                    <div className={styles.body}>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, delectus.</p>
                        <button>Button</button>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.header}></div>
                    <div className={styles.body}>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, delectus.</p>
                        <button>Button</button>
                    </div>
                </div>
            </div>
            {/* latihan 4 */}
            <div className={styles['container-empat']}>
                <div className={styles.thumbnail}>
                    <Image src="/pc.jpg" width={200} height={200} />
                </div>
                <div className={styles.thumbnail}>
                    <Image src="/pc.jpg" width={200} height={200} />
                </div>
                <div className={styles.thumbnail}>
                    <Image src="/pc.jpg" width={200} height={200} />
                </div>
                <div className={styles.thumbnail}>
                    <Image src="/pc.jpg" width={200} height={200} />
                </div>
                <div className={styles.thumbnail}>
                    <Image src="/pc.jpg" width={200} height={200} />
                </div>
                <div className={styles.thumbnail}>
                    <Image src="/pc.jpg" width={200} height={200} />
                </div>
                <div className={styles.thumbnail}>
                    <Image src="/pc.jpg" width={200} height={200} />
                </div>

            </div>
        </>
    )
}
