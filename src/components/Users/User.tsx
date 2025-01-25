import { useState } from "react";
import "./user.css";

interface User {
  name: string;
  email: string;
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState<string>("PH");
  const [email, setEmail] = useState<string>("");
  const [editMode, setEditMode] = useState(false);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newUser: User = { name, email };
    setUsers([...users, newUser]);
    setName("");
    setEmail("");
    setEditMode(true);
  };

  return (
    <div className="formWrapper">
      <h1>React Testing Library</h1>
      <h2>Raact Testing Library 2</h2>
      <p>Enter the form data</p>

      <div data-testid="paragraph">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          sunt, fugit nisi rerum labore nulla tempora rem veniam corrupti
          officiis voluptate odio sequi tempore perspiciatis deleniti nostrum
          aspernatur minus quod, expedita magni facere reiciendis hic quibusdam?
          Expedita animi sequi quo vel, totam magnam vitae, impedit fuga
          delectus odio soluta minus?
        </p>
      </div>

      <img src="https://imag.jpg" alt="person" />

      <div title="open">Open</div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          id="name"
          placeholder="User name"
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          id="email"
        />
        <br />
        <label>
          Terms:&nbsp;
          <input type="checkbox" />
        </label>
        <br />

        {editMode ? (
          <button type="submit">Submit</button>
        ) : (
          <button type="submit">Edit</button>
        )}
      </form>
      {users.length > 0 && (
        <div>
          <h2>Users:</h2>
          <ul>
            {users.map((user, index) => (
              <li key={index}>
                {user.name} - {user.email}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Users;
