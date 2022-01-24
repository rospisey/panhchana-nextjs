import Footer from "./footer"
import Navbar from "./navbar"

const Layout =({children})=>{
    return (
        <div>
            {/* <Navbar/> */}
            {children}
            {/* <Footer/> */}
        </div>
    )
}

export default Layout