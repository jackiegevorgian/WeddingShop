import './KnowUs.css';

const KnowUs = () =>{
     const KnowData = [
        {
            Image: 'https://qi3.qodeinteractive.com/wp-content/uploads/2020/10/h1-img-7.png',
            name: 'Sara Pierce',
            spec: 'FOUNDER',
            desc: 'Nulla vitae massa blandit felis sapien eget, feugiat nibh porta.'
        },
        {
            Image: 'https://qi3.qodeinteractive.com/wp-content/uploads/2020/10/h1-img-8.png',
            name: 'Diana Hamilton',
            spec: 'CREATIVE DIRECTOR',
            desc: 'Nulla vitae massa blandit felis sapien eget, feugiat nibh porta.'
        },
        {
            Image: 'https://qi3.qodeinteractive.com/wp-content/uploads/2020/10/h1-img-9.png',
            name: 'Judy Smith',
            spec: 'SALES MANAGER',
            desc: 'Nulla vitae massa blandit felis sapien eget, feugiat nibh porta.'
        }

     ]

    return(
<div className='KnowUs_Elements'>
    <div className='KnowUsTheme_Box'>
        <div>
            <span>GET TO KNOW US</span>
            <h1>Meet the Team</h1>
        </div>

    </div>
    <div className='KnowUs_Cont'>
        {       
        KnowData.map ((k) =>{
          return(
            <div className='KnowBox'>
            <div className='KnowImg'>
                <img src={k.Image}/>
            </div>
            <div className='KnowInfo'>
                <div>
                    <h2>{k.name}</h2>
                    <span>{k.spec}</span>
                </div> 
                <div>
                    <p> {k.desc}</p>
                </div>
            </div>
        </div>
          )       
        })
        }
    </div>
</div>
    )
}

export default KnowUs