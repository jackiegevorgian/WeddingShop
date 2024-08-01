import './MeetTT2.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/fontawesome-free-brands';
import { faTwitter } from '@fortawesome/fontawesome-free-brands';
import { faInstagram } from '@fortawesome/fontawesome-free-brands';


const Team =()=>{ 
    const TeamData =[
        {
            Image: 'https://qi3.qodeinteractive.com/wp-content/uploads/2020/10/h1-img-7.png',
            name: 'Sara Pierce',
            spec: 'FOUNDER',
            desc: 'Phasellus vel nulla eu dolor lacinia posuere. Cras in arcu congue, aliquam turpis et, consectetur dui. Nunc pharetra nisi eu semper sagittis. Sed libero magna, maximus vel auctor sit amet odio pretium a dolor donec a feugiat. Donec sodales metus tortor, et ultricies nisi posuere nec. Aenean nec sem imperdiet, felis ante et, ultricies augue. Curabitur pellentesque porta justo.'
        },
        {
            Image: 'https://qi3.qodeinteractive.com/wp-content/uploads/2020/10/h1-img-8.png',
            name: 'Diana Hamilton',
            spec: 'CREATIVE DIRECTOR',
            desc: 'Phasellus vel nulla eu dolor lacinia posuere. Cras in arcu congue, aliquam turpis et, consectetur dui. Nunc pharetra nisi eu semper sagittis. Sed libero magna, maximus vel auctor sit amet odio pretium a dolor donec a feugiat. Donec sodales metus tortor, et ultricies nisi posuere nec. Aenean nec sem imperdiet, felis ante et, ultricies augue. Curabitur pellentesque porta justo.'

        },
        {
            Image: 'https://qi3.qodeinteractive.com/wp-content/uploads/2020/10/h1-img-9.png',
            name: 'Judy Smith',
            spec: 'SALES MANAGER',
            desc: 'Phasellus vel nulla eu dolor lacinia posuere. Cras in arcu congue, aliquam turpis et, consectetur dui. Nunc pharetra nisi eu semper sagittis. Sed libero magna, maximus vel auctor sit amet odio pretium a dolor donec a feugiat. Donec sodales metus tortor, et ultricies nisi posuere nec. Aenean nec sem imperdiet, felis ante et, ultricies augue. Curabitur pellentesque porta justo.'
            
        }
    ]
    return(
        <div className='Team_Container'>
            {
                TeamData.map((T) =>{
                    return(
                        <div className='TeamBox'>
                        <div className='TeamImg'>
                            <img src={T.Image}/>
                        </div>
                        <div className='TeamInfo'>
                            <div>
                               <span>{T.spec}</span>
                                <h2>{T.name}</h2>
                            </div> 
                            <div>
                                <p> {T.desc}</p>
                            </div>
                            <div>
                        <ul className='Team_Icons'>
                            <li><a href='#'><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a></li>
                            <li><a href='#'><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a></li>
                            <li><a href='#'><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a></li>
                        </ul>
                    </div>
                        </div>
                    </div>
                    )

                }
                   
                )
            }
            <div className='TeamBanner'>
                
            </div>
        </div>
    
    )

} 

export default Team