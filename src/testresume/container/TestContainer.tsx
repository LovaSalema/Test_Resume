import Main from "../component/Main"
import SideBar from "../component/SideBar"

const TestContainer =()=>{
    return(
        <>
           <div style={{display:"flex", flexDirection:"row"}}>
           <section>
                <SideBar/>
            </section>
            <section>
                <Main/>
            </section>
           </div>
        </>
    )
}
export default TestContainer