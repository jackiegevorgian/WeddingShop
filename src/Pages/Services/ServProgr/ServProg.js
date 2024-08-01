import './ServProg.css'

import ServPComp from './ServPComp/ServPComp'
const ServProg =() => {
    return (
        <div className='ServProg_Cont'>
            <div className='ServProg_Img'></div>

            <div className='ServProg_Box'>
                <div>
                    <h4>OUR SERVICES</h4>
                    <h1>Prepare for the big day with us</h1>
                </div>
                <div>
                    <p>
                        Sed neque est, accumsan porta tempus ultricies, facilisis id justo. Curabitur interdum ornare nibh, sit amet dapibus velit sodales ut lorem ipsum dolor sit.
                    </p>
                </div>
                <ServPComp/>
       
            </div>

        </div>

    )
}

export default ServProg