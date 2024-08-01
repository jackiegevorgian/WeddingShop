import './Amazing.css'
import Progress from './components/Progress'
const AmazingServices = () => {
    return (
        <div className='AmazingServ_Cont'>
            <div className='AmazingServ_Img'></div>

            <div className='AMAZING_SERVICES_box'>
                <div>
                    <h4>AMAZING SERVICES</h4>
                    <h1>Prepare for the big day with us</h1>
                </div>
                <div>
                    <p>
                        Sed neque est, accumsan porta tempus ultricies, facilisis id justo. Curabitur interdum ornare nibh, sit amet dapibus velit sodales ut lorem ipsum dolor sit.
                    </p>
                </div>
                <Progress />
            </div>

        </div>

    )
}

export default AmazingServices