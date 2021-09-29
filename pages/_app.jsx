import React from "react";
import "../styles/main.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Component {...pageProps} />
      {/* <style jsx global>
        {`
          body {
            font-family: "Roboto", sans-serif;
          }
        `}
      </style> */}
    </React.Fragment>
  );
}
