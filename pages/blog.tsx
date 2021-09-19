import Layout from '../components/layout'

interface post {
    id: number,
    title: string,
    body: string
}
interface blogProps {
    dataBlog: post[]
}

export default function blog(props: blogProps) {
    const { dataBlog } = props
    return (
        <Layout pageTitle="Halaman Blog">
            <>
                <h1>Halaman Blog</h1>
                <div className="flex">
                    {dataBlog.map((blog) => (
                        <div key={blog.id} className="card">
                            <h5>{blog.title}</h5>
                            <p>{blog.body}</p>
                        </div>
                    ))}
                </div>
            </>
        </Layout>
    )
}


export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const dataBlog = await res.json();

    return {
        props: {
            dataBlog
        }
    }
}
