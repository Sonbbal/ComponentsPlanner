import React from "react";
import styled from "styled-components";
import { BoxData } from "./types";

export default class BaseComponent extends React.Component<BoxData> {
  constructor(props: BoxData) {
    super(props);
  }
  BoxComponent = styled.div`
    width: 100%;
    height: 100px;
    border-radius: 10px;
    border: 3px solid #000;
    padding: 15px;
    position: relative;
    display: flex;
    order: ${this.props.order ? this.props.order : 0};
  `;
  ComponentName = styled.p`
    padding: 5px 10px;
    background: #fff;
    position: absolute;
    height: 40px;
    line-height: 30px;
    top: -20px;
    left: 20px;
  `;
  AddButton = styled.button`
    height: 30px;
    padding: 5px 10px;
    margin-top: 10px;
  `;
  addChildren() {}
  moveChildren() {}
  openData() {}

  render() {
    return (
      <this.BoxComponent>
        <this.ComponentName>{this.props.name}</this.ComponentName>
        <this.AddButton>추가</this.AddButton>
      </this.BoxComponent>
    );
  }
}
