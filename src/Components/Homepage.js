import "./HomePage.css";
import PageHeader from "./PageHeader.js";
import PageBody from "./PageBody";
import PageNewsList from "./PageNewsList";

const HomePage = () =>{

    return (
        <div className="homepage-outer">
            <PageHeader />
            <PageBody />
            <br></br>
            <br></br>
            <PageNewsList />
        </div>
    )
}

export default HomePage;