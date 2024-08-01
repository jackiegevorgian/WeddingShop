import './Chooseyours.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const ChooseYours = () =>{
     const ChooseData = [
        {
            type:'BACIS',
            servname: 'per package',
            price: '1000',
            inner1:' Built distinctively',
            inner2:'Cross-unit leadership skills',
            inner3: ' Truly productive collaborations',
            inner4: 'Six month support',
            inner5: 'Enthusiastic team',
        },
        {
            type:'STANDART',
            servname: 'per package',
            price: '1600',
            inner1:' Built distinctively',
            inner2:'Cross-unit leadership skills',
            inner3: ' Truly productive collaborations',
            inner4: 'Six month support',
            inner5: 'Enthusiastic team',
        },
        {
            type:'EXCLUSIVE',
            servname: 'per package',
            price: '1800',
            inner1:' Built distinctively',
            inner2:'Cross-unit leadership skills',
            inner3: ' Truly productive collaborations',
            inner4: 'Six month support',
            inner5: 'Enthusiastic team',
        }
      
     ]



    return(
        <div className='Service_Container'>
            <div className='Service_Theme'>
                <div>
                    <h5>CHOOSE YOURS</h5>
                    <h1>Pricing Plans</h1>
                </div>
                <div>
                    <p>
                    Etiam ultricies vehicula vestibulum. Nullam auctor eget odio id maximus. Quisque venenatis urna elit felis venenatis vulputate. Aliquam dictum urna sed sem vulputate.
                    </p>
                </div>
            </div>
            <div className='Service_Box'>
            {ChooseData.map((c) =>{
                return(
                    <div className='Service'>
                        <span>{c.type}</span>
                        <h1>{c.price}$</h1>
                        <span>/{c.servname}</span>
                        <ul>
                            <li><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>{c.inner1}</li>
                            <li><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>{c.inner2}</li>
                            <li><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>{c.inner3}</li>
                            <li><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>{c.inner4}</li>
                            <li><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>{c.inner5}</li>
                        </ul>
                        <button>READ MORE</button>
                </div>
                )
            })}
            </div>
        </div>
    )
}


export default ChooseYours