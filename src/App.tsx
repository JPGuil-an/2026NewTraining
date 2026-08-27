import { useState } from "react";
import { useEffect } from "react";

type User = {
  id: string;
  name: string;
  email: string;
}

const DEFAULT_USERS: User[] = [
  { id: "1", name: "John Doe 1", email: "john.doe1@example.com" },
  { id: "2", name: "John Doe 2", email: "john.doe2@example.com" },
  { id: "3", name: "John Doe 3", email: "john.doe3@example.com" },
];

export default function App() {

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setUsers(DEFAULT_USERS);
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <h1>Users Lists</h1>
      <div className="flex flex-col gap-4">
        {users.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
          />
        ))}
      </div>
    </div>

  )
}

type UserCardProps = User;
//function here is called a component and it is used to render the user card
// inside the function we are passing the name and email as props
// props are the data that is passed to the component
function UserCard(props: UserCardProps) {
  return (
    <div>
      <div className="bg-gray-100">
      <p>{props.id}</p>
      <h2>{props.name}</h2>
      <p>{props.email}</p>
      </div>
    </div>
  )
}

