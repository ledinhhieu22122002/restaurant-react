import Blog from "../Component/Blog/Blog";
import More from "../Component/CnowMore/More";
import Contacts from "../Component/Contact/Contact";
import Footer from "../Component/Footer/Footer";
import Headers from "../Component/Header/Headers";
import Menu from "../Component/Menu/Menu";
import Quote from "../Component/Quote/Quote";
import Serving from "../Component/Serving/Serving";

function Home() {
    return (
        <>
            <Headers />
            <More />
            <Serving />
            <Menu />
            <Quote />
            <Blog />
            <Contacts />
            <Footer />
        </>)
}

export default Home;
