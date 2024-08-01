import { Link } from 'react-router-dom'
import './WeddPhotosh.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const PhotoshBanner = () => {
    return (
        <div className='PhotoshootsBanner'>
            <div>
                <div>
                    <h4>WE PROVIDE</h4>
                    <h1>Amazing Wedding Photoshoots</h1>
                </div>
                <div>
                    <h5>PLAY VIDEO</h5>
                    <Link to="/#"><FontAwesomeIcon icon={faPlay}></FontAwesomeIcon></Link>
                </div>
            </div>
        </div>
    )

}
export default PhotoshBanner