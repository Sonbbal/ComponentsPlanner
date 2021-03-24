import React from "react";
import Main from "./Components/Main";
import Sidebar from "./Components/Sidebar";
import styles from "./styles/App.module.scss";

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Main />
        <Sidebar />
      </div>
    );
  }
}
