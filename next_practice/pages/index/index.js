import React from "react";
import Link from "next/link";
import less from "./index.less";
import "./index.less";
import Hello from "./hello/index.js";
import Router from "next/router";

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
  shallowRouter = () => {
    const href = "/?counter=10";
    const as = href;
    Router.push(href, as, { shallow: true });
  };
  componentDidUpdate(prevProps) {
    console.log("路有变化了");
    console.log(this.props);

    // const { pathname, query } = this.props.router;
    // console.log(pathname);
    // console.log(query);
    // console.log(prevProps);
    // verify props have changed to avoid an infinite loop
    // if (query.id !== prevProps.router.query.id) {
    //   // fetch data based on the new query
    // }
  }
  linkToRouter = () => {
    //点击监听
    const handleRouteChange = url => {
      console.log("App is changing to: ", url);
    };
    Router.events.on("routeChangeStart", handleRouteChange);
    //不利于seo
    Router.push({
      pathname: "/about",
      query: {
        name: 123,
        age: 24
      }
    });
  };
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
        <Link
          href={{ pathname: "/about", query: { name: "Zeit" } }}
          replace
          scroll={false}
        >
          <a target="_blank" className="link">
            a标签的跳转,利于SEO
          </a>
        </Link>
        ,
        <span
          className="link"
          style={{ color: "blue", cursor: "pointer" }}
          onClick={this.linkToRouter}
        >
          编程式导航
        </span>
        ,
        <span
          className="link"
          style={{ color: "blue", cursor: "pointer" }}
          onClick={this.shallowRouter}
        >
          浅层路由允许你改变 URL 但是不执行getInitialProps生命周期
        </span>
      </Layout>
    );
  }
};

export default Index;
