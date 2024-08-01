import './FeatShopItems.css'
import FeatShopItemsContext from './FeatShopItemsContext';
import Child from './FeatShopItemsChild';






const FeatShopI = () => {

    const FshProductData = [
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
        }
    ]
    return (

        <div className='FeaturedSop_Box'>
            <div className='Title_Box'>
                <div>
                    <h5>FEATURED SHOP ITEMS</h5>
                    <h1>For the Big Day</h1>
                </div>
                <div>
                    <p>Nam dolor tellus, lacinia sit amet dapibus vel, auctor eget augue sed dolor. Suspendisse ultrices rhoncus congue curabitur cursus purus.</p>
                </div>
            </div>

            {/* //...........products */}
            <div className='FshProducts_Box'>
                <FeatShopItemsContext.Provider value={FshProductData}>
                    <Child />
                </FeatShopItemsContext.Provider>
            </div>



        </div>

    )
}

export default FeatShopI
