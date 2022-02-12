import Footer from "./footer"
import Header1 from "./header"
import Example from "./header"
import Header2 from "./header2"


const Layout =({children})=>{
    return (
        <div>
            <Header2/>
            {/* <Example/> */}
            {children}
            <Footer/>
        </div>
    )
}

export default Layout