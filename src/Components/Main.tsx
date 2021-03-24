import React from "react";
import styles from "../styles/Main.module.scss";
import BaseComponent from "./BaseComponent";
import { BoxData } from "./types";

export default class Main extends React.Component {
  private readonly dafalutData: BoxData = {
    id: 0,
    name: "테스트중",
    order: 0,
    parent: 0,
  };
  render() {
    return (
      <section id="main" className={styles.container}>
        <BaseComponent
          id={this.dafalutData.id}
          name={this.dafalutData.name}
          order={this.dafalutData.order}
          parent={this.dafalutData.parent}
        />
      </section>
    );
  }
}
