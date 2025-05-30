import { useState } from "react";

export default function Employee() {
  const [employeesData, setEmployeesData] = useState([]);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const addEmployee = (e) => {
    e.preventDefault();
    if (name.trim() === "" || role.trim() === "") return;
    const newEmployee = {
      id: Date.now(),
      name,
      role,
    };

    setEmployeesData((prevData) => [...prevData, newEmployee]);
    setName("");
    setRole("");
  };

  const employeeList = employeesData.map((employee, index) => (
    <li key={employee.id}>
      Name:{employee.name} | Role: {employee.role}
    </li>
  ));

  return (
    <div>
      <form
        onSubmit={addEmployee}
        className="flex gap-2 mt-2 w-50 items-center justify-center"
      >
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          className="border border-2 "
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="role">Role:</label>
        <input
          type="text"
          id="role"
          className="border border-2"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <button type="submit" className="border border-1 p-2 rounded">
          Add
        </button>
      </form>
      <ul>{employeeList}</ul>
    </div>
  );
}
