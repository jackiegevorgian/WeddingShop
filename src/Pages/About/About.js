
import './About.css'
import Banner from '../../Components/Banner/Banner'
import WeddBliss from '../../Components/Banner/WeddingBliss/WeddingBliss'
import Team from './MeetTheTeam2/MeetTT2'
import ChooseYours from '../../Components/Banner/Chooseyours/Chooseyours'








const About = ()=>{
    return(
        <>
         <Banner img="https://qi3.qodeinteractive.com/wp-content/uploads/2020/10/p1-img1.jpg" title="ABOUT US" title2="Let’s dream up something beautiful together."/>
         <WeddBliss title="OUR MISSION" title2="With authenticity in every detail, we want to help you tell your story"
         descript="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget nulla est. Tristique sollicitudin nisl in diam finibus, et pharetra mauris placerat. Pellentesque semper turpis nunc orci sed mollis lacus tincidunt quis. Quisque at elit sit amet purus.Tincidunt massa lacus at nibh. Vestibulum ultricies, elit eu cursus tincidunt, tortor lorem mollis vel at molestie augue felis consectetur ante. In vestibulum dapibus ex.
         Nam sollicitudin consectetur nulla sed hendrerit. In non lacinia velit, id consectetur nisl. Proin risus odio, semper eu semper et, gravida id erat. Duis eget libero efficitur lorem laoreet feugiat eget in purus. Pellentesque sed est eget ligula finibus sagittis in eget risus. Cras varius sagittis lectus ut hendrerit vestibulum vestibulum velit. " />
         <Team/>
         <ChooseYours/>

        </>
    )

}

export default About