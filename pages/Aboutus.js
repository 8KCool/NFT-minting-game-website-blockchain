import react from "react";
import Navbar from "../components/NavAbout";
import About from "../components/About";
import Footer from "../components/Footer";


function Aboutus () {
    return (

        <div>
            <Head>
        <title>DexBattle-About Us</title>
        <meta name="Description" content="Dex Battle Game!" />
        <link rel="icon" href="/Dex.png" />
      </Head>
            <Navbar/>
            <div>
            <About/>
            </div>
            <Footer/>
            
            

        </div>
    )
}

export default Aboutus