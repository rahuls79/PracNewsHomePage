import "./PageHeader.css";

<link rel="stylesheet"
          href="https://fonts.google.com/specimen/Inter"></link>

const Homepageheader = () =>{

    return(
        <>
        <div className="newsHead">
            <div className="logo">
                <p>W.</p>
            </div>
            <div className="newsHead-nav">
                <button>Home</button>
                <button>New</button>
                <button>Popular</button>
                <button>Trending</button>
                <button>Categories</button>
            </div>
        
        </div>
        </>
    )
}

export default Homepageheader;