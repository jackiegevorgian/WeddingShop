import './Home.css'
import Banner from '../../Components/Banner/Banner'
import WeddBliss from '../../Components/Banner/WeddingBliss/WeddingBliss'
import HomeSwiper from './HomeSlider/HomeSlider'
import HomeTestSl from './ProductsArea/HomeTestimonials/HomeTestimon'
import PhotoshBanner from './WeddingPhotoshoots/WeddPhotosh'
import FeatShopI from './FeatShopItems/FeatShopItems'
import ProductArea from './ProductsArea/ProductsArea'
import KnowUs from './GToKnowUs/KonwUs'
import EventsStatistics from '../../Components/Banner/Statistics/Statistics'
import PrepareBigDay from './Prepare/Prepare'
import AmazingServices from './AmazingServices/Amazing'
import Partners from './Partners/Partners'
import ChooseYours from '../../Components/Banner/Chooseyours/Chooseyours'
const Home = () => {
    return (
        <>
            <Banner img="https://i.pinimg.com/originals/f9/ed/b7/f9edb7cb0553ce197dd94744744d67f9.jpg" title="MADE WITH LOVE" title2="Your wedding inspiration" />
            <WeddBliss title=" THE WEDDING BLISS" title2="Let’s make magic!" descript="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget nulla est.
//                 Tristique sollicitudin nisl in diam finibus, et pharetra mauris placerat.
//                 Pellentesque semper turpis nunc orci sed mollis lacus tincidunt quis.
//                 Quisque at elit sit amet purus."/>
            <HomeSwiper />
            <HomeTestSl />
            <PhotoshBanner />
            <FeatShopI />
            <ProductArea />
            <KnowUs />
            <EventsStatistics />
            <PrepareBigDay />
            <AmazingServices/>
            <Partners />
            <ChooseYours />

           
        </>
    )
}

export default Home