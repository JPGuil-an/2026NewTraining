import type { User } from "../types";

export type UserCardProps = User;
//function here is called a component and it is used to render the user card
// inside the function we are passing the name and email as props
// props are the data that is passed to the component
export function UserCard(props: UserCardProps) {
  return (
    <div className="flex flex-col gap-2 p-4 bg-gray-100 rounded-md max-w-sm">    
      <p>{props.id}</p>
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </div>
  )
}