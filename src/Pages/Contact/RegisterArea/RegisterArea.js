import './RegisterArea.css'

const Register = ()=>{
    return(
        <div className='Register_Cont'>
              <div className='Register_Info'>
            <div><h3>Contact us</h3></div>
            <div>
                <input type='text' placeholder='Name'/>
                <input type='text' placeholder='Email'/>
                <input type='text' placeholder='Message'/>               
                <button>SEND</button>   
            </div>
            </div>
            <div className='Find_Us'>
                <div><h3>Find us</h3></div>
                <ul>
                <li>carrier@codeinteractive.com</li>
                <li>grand@codeinteractive.com</li>
                </ul>

            </div>
        </div>
    )
}

export default Register

