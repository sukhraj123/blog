import "../styles/globals.css";
import Nav from "../components/Nav";
import Main from "../components/main";
import footer from "../components/footer";


function MyApp({ Component, pageProps }) {
  return (
    <>
    
      <Nav />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
