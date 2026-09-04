import { useEffect, useState } from "react";
import { UserCard } from "./user-card";
import type { User } from "../types";

const DEFAULT_USERS = [
  { id: "1", name: "John Doe 1", email: "john.doe1@example.com" },
  { id: "2", name: "John Doe 2", email: "john.doe2@example.com" },
  { id: "3", name: "John Doe 3", email: "john.doe3@example.com" },
];

export function UserList() {

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setUsers(DEFAULT_USERS);
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
   <>
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
    </>

  )
}


