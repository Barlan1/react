const users = [
  { id: 1, name: "vikas", age: 30 },
  { id: 2, name: "Vijay", age: 20 },
  { id: 3, name: "Ajay", age: 28 },
];

export default function UserList() {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {" "}
          {user.name} is {user.age} old{" "}
        </li>
      ))}
    </ul>
  );
}
