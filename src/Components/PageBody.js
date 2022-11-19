import './PageBody.css';
import pxr from "../assets/images/image-web-3-desktop.jpg"

const PageBody = () =>{

    return(
        <>
        <div className = "pageData">
            <div className = "NewsHeadline">
                <div className = "NewsHeadline-image">
                    <img src = {pxr} alt = "" width = "97%" />
                </div>
                <div className = "NewsHeadline-data">
                    <div className ="NewsHeadline-heading">
                        <h1>The Bright Future of    Web 3.0?</h1>
                    </div>
                    <div className = "NewsHeadline-desc">
                        <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                            But is it really fulfilling its promise?
                        </p>
                        <button>READ MORE</button>
                    </div>
                </div>    
            </div>
            <div className = "NewNews">
                    <h2>New</h2>
                    <h3>Hydrogen vs Electric Cars</h3>
                    <p>Will Hydrogen-fueled cars ever catch up to EVs?</p><br></br>
                    <hr></hr>
                    <br></br>
                    <h3>The Downsides of AI History</h3>
                    <p>What are the possible adverse effects of on-demand AI image generation?</p><br></br>
                    <hr></hr>
                    <br></br>
                    <h3>Is VC funding drying up?</h3>
                    <p>Private funding by VC firms is down 50% YOY.We take a look on what it means.</p>
                    <br></br>
            </div>
        </div>

        </>
    )

}

export default PageBody;