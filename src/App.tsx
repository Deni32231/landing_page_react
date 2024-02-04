import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Imageses from "./components/imageses/Imageses";
import Quiz from "./components/quiz/Quiz";

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Imageses />
        <Quiz />
      </main>
      <Footer />
    </>
  );
}

export default App;
