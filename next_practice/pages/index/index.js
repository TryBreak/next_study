import React from "react";
// import Router from "next/router";
import less from "./index.less";
import "./index.less";
import Hello from "./hello/index.js";

const Index = class extends React.Component {
  render() {
    const style1 = {
      padding: "10px",
      "background-color": "red"
    };
    return (
      <>
        <Hello />
        <style jsx>{`
          .h1 {
            color: red;
          }
        `}</style>
        <div className="h1">
          Welcome to next.js! 这里是第一个next 页面,这里是 {`<style jsx >`}{" "}
          渲染的样式
        </div>
        <div
          style={{ ...style1, color: "green", "background-color": "yellow" }}
        >
          这里是 {`style`} 渲染的样式
        </div>
        <div style={style1}>这里是 style变量渲染 渲染的样式</div>
        <div className={less.less_style}>这里是 less import less from 渲染</div>
        <img
          style={{ width: "500px" }}
          src="../static/image/pa.jpg"
          alt="my image"
        />
      </>
    );
  }
};

export default Index;
