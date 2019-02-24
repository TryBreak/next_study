import React from "react";
import Router from "next/router";

const index = class extends React.Component {
  render() {
    const style1 = {
      padding: "10px",
      "background-color": "red"
    };
    return (
      <>
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
          Welcome to next.js! 这里是第一个next 页面,这里是 {`style`} 渲染的样式
        </div>
        <div style={style1}>
          Welcome to next.js! 这里是第一个next 页面,这里是 style变量渲染
          渲染的样式
        </div>
      </>
    );
  }
};

export default index;
