import styles from "./User.module.css";
import { useAuth } from "../contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";

// const FAKE_USER = {
//   name: "Jack",
//   email: "jack@example.com",
//   password: "qwerty",
//   avatar: "https://i.pravatar.cc/100?u=zz",
// };

function User() {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  function handleClick(e) {
    e.preventDefault();
    logout();
    navigate("/");
  }

  if (!isAuthenticated) return null;
  return (
    <div className={styles.user}>
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default User;

/*
CHALLENGE

1) Add `AuthProvider` to `App.jsx`
2) In the `Login.jsx` page, call `login()` from context
3) Inside an effect, check whether `isAuthenticated === true`. If so, programatically navigate to `/app`
4) In `User.js`, read and display logged in user from context (`user` object). Then include this component in `AppLayout.js`
5) Handle logout button by calling `logout()` and navigating back to `/`
*/
