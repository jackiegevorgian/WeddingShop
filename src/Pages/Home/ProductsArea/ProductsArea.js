import './productsArea.css'

const ProductArea = () => {
    const ProductData = [
        {
            img: 'https://qi3.qodeinteractive.com/wp-content/uploads/2020/10/shop-img-5.jpg',
            name: 'Accessories'
        },
        {
            img: 'https://qi3.qodeinteractive.com/wp-content/uploads/2020/10/shop-img-2.jpg',
            name: 'Wedding Rings'
        },
        {
            img: 'https://qi3.qodeinteractive.com/wp-content/uploads/2020/10/shop-img-3.jpg',
            name: 'Bridal Gowns'
        }
    ]

    return (
        <div className='ProductArea_Box'>
            {
                ProductData.map((e) => {
                    return (
                        <div className='Products_Cont'>
                            <div className='ProductsAr_Img'>
                                <img src={e.img} />
                            </div>
                            <div className='ProductsAr_Info'>
                                <div>
                                    <h1>{e.name}</h1>
                                </div>
                                <div>
                                    <button>SEE MORE</button>
                                </div>
                            </div>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductArea