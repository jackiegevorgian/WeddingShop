import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/fontawesome-free-brands';
import { faTwitter } from '@fortawesome/fontawesome-free-brands';
import { faInstagram } from '@fortawesome/fontawesome-free-brands';


const Footer_Area = () => {
    const Footer_Data = [
        {
            image: 'https://qi3.qodeinteractive.com/wp-content/uploads/sb-instagram-feed-images/184551483_592574748388712_4597392873874180018_nlow.jpg',
            link: 'https://www.instagram.com/p/COsIu6RNs1L/'
        },
        {
            image: 'https://qi3.qodeinteractive.com/wp-content/uploads/sb-instagram-feed-images/185067907_511608316507918_6035131122422905923_nlow.jpg',
            link: 'https://www.instagram.com/p/COsItcvNWxd/'
        },
        {
            image: 'https://qi3.qodeinteractive.com/wp-content/uploads/sb-instagram-feed-images/174775279_956517498488659_4890412377569226490_nlow.jpg',
            link: 'https://www.instagram.com/p/COsIrPNtkQa/'
        },
        {
            image: 'https://qi3.qodeinteractive.com/wp-content/uploads/sb-instagram-feed-images/183281697_217425829858248_4201342858062180627_nlow.jpg',
            link: 'https://www.instagram.com/p/COsIp9XNpVD/'
        }
    ]
    return (
        <footer>
            <div className='Footer_Theme'>
                <h5>BROWSE OUR GALLERY</h5>
                <h1>Instagram</h1>
            </div>
            <div className='Social_Links'>
                {Footer_Data.map((e) => {
                    return (
                        <a href={e.link}><img src={e.image} /></a>
                    )
                })}
            </div>
            <div className='Footer_info'>
                <div className='Contact_Box'>
                    <div><h3>Contact</h3></div>
                    <ul>
                        <li><a href='https://www.google.rs/maps/search/7398+Colonial+Rd,+Brooklyn+242+Wythe+Ave+%234,+Brooklyn/@40.6754981,-74.0390908,13z/data=!3m1!4b1?entry=ttu'><span>7398 Colonial Rd, Brooklyn 242</span>
                            Wythe Ave #4, Brooklyn</a></li>
                        <li>+(123) 124-567-8901</li>
                        <li>+(123) 124-567-8900</li>
                    </ul>
                </div>

                <div className='Working_Hours'>
                    <div><h3>Working Hours</h3></div>
                    <ul>
                        <li>Monday-Friday:</li>
                        <li>07:00-21:00</li>
                        <li>Saturday:</li>
                        <li>07:00-16:00</li>
                        <li>Sunday Closed</li>
                    </ul>
                </div>
                <div className='Our_Newsletter'>
                    <div><h3>Our Newsletter</h3></div>
                    <div><input type='text' placeholder='your email' />
                        <button>SEND</button>
                    </div>
                    <div><p>Cras egestas leo vel mauris efficitur! Mauris varius mi vitae ipsum facilisis.</p></div>
                    <div><h4>Follow us:</h4></div>
                    <div>
                        <ul className='Social_Icons'>
                            <li><a href='#'><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a></li>
                            <li><a href='#'><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a></li>
                            <li><a href='#'><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer_Area