import FormCreateUser from "./components/FormCreateUser/FormCreateUser";
import Card from "./components/UI/Card/Card";
import UserList from "./components/UsersList/UsersList";

const INITIAL_USERS = [
  { name: "Joker", age: 24, id: "0.1653745419310675" },
  { name: "John", age: 17, id: "0.8491629535571732" },
];

const App = props => {
  return (
    <div className="global-container">
      <Card>
        <FormCreateUser />
      </Card>
      <Card>
        <UserList users={INITIAL_USERS} />
      </Card>
    </div>
  );
};

export default App;
