import "./App.css";
import Login from "./componant/Login";
import Profile from "./componant/Profile";
import UserContextProvider from "./context/UserconstextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>Hello my name is Jeevendra singh</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
