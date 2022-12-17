import "../styles/globals.css";
import Nav from "./Nav";
import Main from "./main";

function MyApp({ Component, pageProps }) {
  return (
    <>
    
      <Nav />
      
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
