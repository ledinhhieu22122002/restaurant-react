import Blog from "./Component/Blog/Blog";
import More from "./Component/CnowMore/More";
import Contacts from "./Component/Contact/Contact";
import Headers from "./Component/Header/Headers";
import Menu from "./Component/Menu/Menu";
import Navbar from "./Component/Navbar/Navbar";
import Quote from "./Component/Quote/Quote";
import Serving from "./Component/Serving/Serving";

function App() {
  return (
    <>
      <Navbar />
      <Headers />
      <More />
      <Serving />
      <Menu />
      <Quote />
      <Blog />
      <Contacts />
    </>)
}

export default App;
