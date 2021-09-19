import { useRouter } from "next/dist/client/router";
import Layout from "../../components/layout";
import UserDetail from "./[id]";

interface UserProps {
  dataUsers: Array<any>;
}
export default function Users(props: UserProps) {
  const { dataUsers } = props;
  const router = useRouter();
  return (
    <Layout pageTitle="Halaman User">
      <h1>Halaman User</h1>
      <div className="flex">
        {dataUsers.map((user) => (
          <div key={user.id} onClick={() => { router.push(`users/${user.id}`) }} className="card">
            {console.log(user.email)}
            <p>{user.name} - {user.email}</p>
          </div>
        ))
        }
      </div>
      {/* <UserDetail /> */}
    </Layout >
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    }
  }
}
