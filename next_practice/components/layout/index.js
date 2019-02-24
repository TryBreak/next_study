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
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
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
