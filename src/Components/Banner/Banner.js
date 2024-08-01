import './Banner.css'
import { Link } from 'react-router-dom'
const Banner = (props) => {
    var img = props.img;
    var title = props.title;
    var title2 = props.title2;
    const bannerstyle = {
        backgroundImage:`url(${img})`
    }
    return (
        <div className='Banner_Box' style={bannerstyle}>
            <div className='Banner_Info'>
                <div>
                    <h5>{title}</h5>
                    <h1>{title2}</h1>
                </div>

                <div>
                    <Link to="/about">discover me</Link>
                </div>
            </div>

        </div>
    )
}

export default Banner