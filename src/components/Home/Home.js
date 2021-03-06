import { useContext } from "react";
import AuthContext from "../../context/authContext";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import styles from "./Home.module.css";

const Home = () => {
  const ctx = useContext(AuthContext);

  return (
    <Card className={styles.home}>
      <h1>Welcome back!</h1>
      <Button onClick={ctx.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
