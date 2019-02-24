import React from "react";
// import Router from "next/router";
import less from "./index.less";
import "./index.less";
import Hello from "./hello/index.js";

import Layout from "../../components/layout";

const Index = class extends React.Component {
  static async getInitialProps({ req }) {
    if (req) {
      console.log("这里是服务端");
    } else {
      console.log("这里是客户端");
    }
    const explain = `当页面初始化加载时，getInitialProps只会加载在服务端。
    只有当路由跳转（Link组件跳转或 API 方法跳转）时，客户端才会执行getInitialProps。
    注意：getInitialProps将不能使用在子组件中。只能使用在pages页面中。`;
    console.log(explain);
    const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
    return { userAgent };
  }
  render() {
    const style1 = {
      padding: "10px",
      backgroundColor: "red"
    };
    return (
      <Layout title="覆盖一下,也可以不传值">
        <Hello />
        <style jsx>{`
          .h1 {
            color: red;
          }
        `}</style>
        {this.props.userAgent}
        <div className="h1">
          Welcome to next.js! 这里是第一个next 页面,这里是 {`<style jsx >`}{" "}
          渲染的样式
        </div>
        <div style={{ ...style1, color: "green", backgroundColor: "yellow" }}>
          这里是 {`style`} 渲染的样式
        </div>
        <div style={style1}>这里是 style变量渲染 渲染的样式</div>
        <div className={less.less_style}>这里是 less import less from 渲染</div>
        <img
          style={{ width: "500px" }}
          src="../static/image/pa.jpg"
          alt="my image"
        />
      </Layout>
    );
  }
};

export default Index;
