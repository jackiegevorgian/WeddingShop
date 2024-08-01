import './WeddingBliss.css'


const WeddBliss = (props) => {
    var title = props.title;
    var title2 = props.title2;
    var descript = props.descript;

    return(
        <div className='WedBliss_Info'>
            <div>
                <h5>{title}</h5>
                <h1>{title2}</h1>
            </div>
            <div>
                <p> {descript} </p>
            </div>

        </div>
    )
   
}
export default WeddBliss

// return (
//     <div className='WedBliss_Info'>
//         <div>
//             <h5>
//                 THE WEDDING BLISS
//             </h5>
//             <h1>Let’s make magic!</h1>
//         </div>
        
//         <div>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget nulla est.
//                 Tristique sollicitudin nisl in diam finibus, et pharetra mauris placerat.
//                 Pellentesque semper turpis nunc orci sed mollis lacus tincidunt quis.
//                 Quisque at elit sit amet purus.
//             </p>
//         </div>
//     </div>
// )
