import "./App.css";
import Counter from "./components/Counter/Counter";
// import FormComponent from "./components/Form/Form";
// import UserEvent from "./components/UserEvent/UserEvent";
// import FruitList from "./components/FruitList/FruitList";
// import PrimaryButton from "./components/PrimaryButton";
// import Users from "./components/Users/User";
// import UserTable from "./components/UserTable/UserTable";
// import { users } from "./utils/userList";

function App() {
  // const fruits = ["apple", "banana", "orange", "mango", "pineapple"];

  return (
    <div>
      <h1>Hellow World!</h1>
      {/* <PrimaryButton />
      <PrimaryButton actionType="Delete" /> */}
      {/* <Users />
      <FruitList fruits={fruits} /> */}
      {/* <UserTable users={users} /> */}
      {/* <UserEvent /> */}
      {/* <FormComponent
        onSubmit={(data) => {
          console.log(data);
        }}
      /> */}
      <Counter />
    </div>
  );
}

export default App;
