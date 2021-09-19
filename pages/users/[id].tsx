import { useRouter } from "next/dist/client/router";
import Layout from "../../components/layout";

interface User {
    id: number,
    name: string,
    email: string,
    website: string
}
interface userDetailProps {
    user: User,
}
export default function UserDetail(props: userDetailProps) {

    const { user } = props
    return (
        <Layout pageTitle="User Detail">
            <div>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.website}</p>
            </div>
        </Layout>
    )
}


export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataUsers = await res.json();

    const paths = dataUsers.map((user: User) => ({
        params: {
            id: `${user.id}`
        }
    }));
    return {
        paths,
        fallback: false,
    }
}

interface getStaticProps {
    params: {
        id: string
    }
}

export async function getStaticProps(context: getStaticProps) {
    const { id } = context.params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await res.json();
    return {
        props: {
            user,
        }
    }


}