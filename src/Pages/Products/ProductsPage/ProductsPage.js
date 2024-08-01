import './ProductsPage.css'


const ProductsPage = () => {
    const PrPage = [
        {
            Image: 'https://qi3.qodeinteractive.com/wp-content/uploads/2020/10/shop-img-10.jpg',
            name: 'WEDDING SHOES',
            price: '1300',
            purch: 'ADD TO CART'
        },
        {
            Image: 'https://qi3.qodeinteractive.com/wp-content/uploads/2020/10/shop-img-11.jpg',
            name: 'SILVER RING',
            price: '2000',
            purch: 'ADD TO CART'
        },
        {
            Image: 'https://qi3.qodeinteractive.com/wp-content/uploads/2020/10/shop-img-12.jpg',
            name: 'HAIR ACCESSORIES',
            price: '650',
            purch: 'ADD TO CART'
        },
        {
            Image: 'https://qi3.qodeinteractive.com/wp-content/uploads/2020/10/shop-img-13.jpg',
            name: 'BOY TIES',
            price: '500',
            purch: 'ADD TO CART'
        },
        {
            Image: 'https://qi3.qodeinteractive.com/wp-content/uploads/2020/10/shop-img-14.jpg',
            name: 'GOLD RINGS',
            price: '1350',
            purch: 'ADD TO CART'
        },
        {
            Image: 'https://qi3.qodeinteractive.com/wp-content/uploads/2020/10/shop-img-15.jpg',
            name: 'ROSE DRESS',
            price: '1700',
            purch: 'ADD TO CART'
        },
        {
            Image: 'https://qi3.qodeinteractive.com/wp-content/uploads/2020/10/shop-img-16.jpg',
            name: 'DIAMOND RING',
            price: '1800',
            purch: 'ADD TO CART'
        },
        {
            Image: 'https://qi3.qodeinteractive.com/wp-content/uploads/2020/10/shop-img-17.jpg',
            name: 'CAKE AND GLITTER',
            price: '1300',
            purch: 'ADD TO CART'
        },
        {
            Image: 'https://qi3.qodeinteractive.com/wp-content/uploads/2020/10/shop-img-11.jpg',
            name: 'SILVER RING',
            price: '2000',
            purch: 'ADD TO CART'
        },
        {
            Image: 'https://qi3.qodeinteractive.com/wp-content/uploads/2020/10/shop-img-15.jpg',
            name: 'ROSE DRESS',
            price: '1700',
            purch: 'ADD TO CART'
        }
    ]
    return (
        <section className='Product_Box'>
            {
                PrPage.map((p) => {
                    return (
                        <div className="ProductPage_Cont">
                            <div className="ProductPage_Img">
                                <img src={p.Image} />
                            </div>
                            <div className="ProductPage_Info">
                                <div>
                                    <h4>{p.name}</h4>
                                </div>
                                <div>
                                    <span>${p.price}</span>
                                    <button>{p.purch}</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}
export default ProductsPage