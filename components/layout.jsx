import Footer from "./footer"
import Example from "./header"
import Navbar from "./navbar"

const Layout =({children})=>{
    return (
        <div>
            {/* <Navbar/> */}
            <Example/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout