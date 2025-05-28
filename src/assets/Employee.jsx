export default function Employee() {
  const users = [
    { id: 1, name: "Alice", role: "Admin" },
    { id: 2, name: "Bob", role: "Editor" },
    { id: 3, name: "Carol", role: "Viewer" },
  ];

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          Name: {user.name} | Role: {user.role}
        </li>
      ))}
    </ul>
  );
}
