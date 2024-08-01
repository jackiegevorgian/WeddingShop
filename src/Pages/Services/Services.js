import Banner from "../../Components/Banner/Banner"
import FindPerfect from "./FindPerfect/FindPerfect"
import EveryDetail from "./EveryDetail/EveryDetail"
import ServProg from "./ServProgr/ServProg"
import EventsStatistics from "../../Components/Banner/Statistics/Statistics"


const Services = ()=>{
    return(
       
        <>
        <Banner img ="https://qi3.qodeinteractive.com/wp-content/uploads/2020/10/p3-img-2.jpg" title="OUR SERVICES" title2="Choose Your Own Adventure"/>
        <EveryDetail/>
        <ServProg/>
        <FindPerfect/>
        <EventsStatistics/>
        </>
    )
    }
    
    export default Services