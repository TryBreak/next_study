import React from "react";
import Link from "next/link";
import Head from "next/head";
import PropTypes from "prop-types";
const Layout = class extends React.Component {
  static defaultProps = {
    title: "This is a title"
  };
  static propTypes = {
    title: PropTypes.string
  };
  render() {
    const { title, children } = this.props;
    return (
      <div>
        <Head>
          <title>{title}</title>
          {/* <meta charset="utf-8" /> 这个默认会存在 */}
          <meta name="renderer" content="webkit" />
          <meta httpEquiv="Cache-Control" content="no-siteapp" />
          <meta httpEquiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
          <meta name="viewport" content="width=width=device-width" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta name="format-detection" content="telephone=no, email=no" />
          <meta name="keywords" content="个人的nextdemo,next,demo,react" />
          <meta name="description" content="私人使用的工具集合" />
          <meta name="author" content="Mark,670188307@qq.com" />
          <meta name="robots" content="index,follow" />
          <meta name="apple-mobile-web-app-title" content="next" />
          <link rel="shortcut icon" href="../../static/image/favicon.ico" />
        </Head>
        <header>
          <nav>
            <Link href="/">
              <a>Home</a>
            </Link>{" "}
            |
            <Link href="/about">
              <a>About</a>
            </Link>{" "}
            |
            <Link href="/about/my">
              <a>about-my</a>
            </Link>
          </nav>
        </header>
        {children}
        <footer>{"I`m here to stay"}</footer>
      </div>
    );
  }
};

export default Layout;
