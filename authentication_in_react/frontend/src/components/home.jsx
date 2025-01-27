import Nav from "./nav"

function HomePage(){
    return(
        <div className="section">
        <Nav/>
        
        <div className="container">
            <div className="divs">
                <h1>Zee e-commerce</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus odit beatae amet, ut architecto maiores aspernatur eos dolore impedit rem dignissimos modi perferendis sunt velit expedita totam eaque qui labore.</p>
            </div>
            <div className="divs">
                <img src="./asset/Screenshot 2024-10-06 043457.png" alt="" id="img1"/>
            </div>
        </div>
        <div className="container" id="cnt">
            <div className="divs">
                <h1>Zee e-commerce</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus odit beatae amet, ut architecto maiores aspernatur eos dolore impedit rem dignissimos modi perferendis sunt velit expedita totam eaque qui labore.</p>
            </div>
            <div className="divs">
              <img src="" alt="" />
                <img src="./asset/football-boot-guide-removebg-preview.png" alt="" id="img2" />
            </div>
        </div>
        </div>
    )
}
export default HomePage