// app/layout.js

import Head from "next/head";
import "@styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = ({ children }) => {
  return (
    <html>
      <body>
        <div className="layout">
          <Head>
            <link rel="stylesheet" href="/bootstrap.min.css" />
          </Head>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default Layout;
