import "./PageNewsList.css";
import pic1 from "../assets/images/image-retro-pcs.jpg"
import pic2 from "../assets/images/image-top-laptops.jpg"
import pic3 from "../assets/images/image-gaming-growth.jpg"

const PageNewsList = () =>{
    return(
        <>
        <div className="newsContainer">
            <div className="newsList">
                <div className = "item">
                    <img src = {pic1} alt = "" width = '90px' height = "90px" />
                    <div className = "itemData">
                        <h2>01</h2>
                        <h3>Reviving Retro PCs</h3>
                        <p>What happens when old PCs get modern upgrades?</p>
                    </div>
                </div>
                <div className = "item">
                    <img src = {pic2} alt = "" width = '90px' height = "90px" /> 
                    <div className = "itemData">
                        <h2>02</h2>
                        <h3>Top 10 Laptops of 2022</h3>
                        <p>Our best picks for various needs and budgets</p> 
                    </div>
                </div>
                <div className = "item">
                    <img src = {pic3} alt = "" width = '90px' height = "90px" />
                    <div className = "itemData">
                        <h2>03</h2>
                        <h3>The Growth of gaming</h3>
                        <p>How the pandemic has sparked fresh opportunities.</p>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}

export default PageNewsList;