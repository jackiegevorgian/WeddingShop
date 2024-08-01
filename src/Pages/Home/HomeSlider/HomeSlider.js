import { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import './HomeSlider.css';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const HomeSwiper = () => {
    const [slidesPerView, setSlidesPerView] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 552) {
                setSlidesPerView(1);
            } else {
                setSlidesPerView(3);
            }
        };

        // Set initial value
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const Swiper_Data = [
        {
            img: 'https://qi3.qodeinteractive.com/wp-content/uploads/2020/10/blog-img-1-420x600.jpg',
            href: '#',
            href2: '#',
            inner: 'A Custom Wedding Cake Just for You'
        },
        {
            img: 'https://qi3.qodeinteractive.com/wp-content/uploads/2020/10/blog-img02-420x600.jpg',
            href: '#',
            href2: '#',
            inner: 'Essential Tips & Tricks from Weddings Planners'
        },
        {
            img: 'https://qi3.qodeinteractive.com/wp-content/uploads/2020/10/blog-img-3-420x600.jpg',
            href: '#',
            href2: '#',
            inner: 'Insider Secrets from Weddings Professionals'
        },
        {
            img: 'https://qi3.qodeinteractive.com/wp-content/uploads/2020/10/Untitled-3-420x600.jpg',
            href: '#',
            href2: '#',
            inner: 'How to Make Your Weeding Amazing'
        }, 
        // Repeat data to ensure multiple slides for demonstration
        {
            img: 'https://qi3.qodeinteractive.com/wp-content/uploads/2020/10/blog-img-1-420x600.jpg',
            href: '#',
            href2: '#',
            inner: 'A Custom Wedding Cake Just for You'
        },
        {
            img: 'https://qi3.qodeinteractive.com/wp-content/uploads/2020/10/blog-img02-420x600.jpg',
            href: '#',
            href2: '#',
            inner: 'Essential Tips & Tricks from Weddings Planners'
        },
        {
            img: 'https://qi3.qodeinteractive.com/wp-content/uploads/2020/10/blog-img-3-420x600.jpg',
            href: '#',
            href2: '#',
            inner: 'Insider Secrets from Weddings Professionals'
        },
        {
            img: 'https://qi3.qodeinteractive.com/wp-content/uploads/2020/10/Untitled-3-420x600.jpg',
            href: '#',
            href2: '#',
            inner: 'How to Make Your Weeding Amazing'
        }
    ];

    return (
        <section className='Swiper_Box'>
            <Swiper
                slidesPerView={slidesPerView}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {Swiper_Data.map((e, index) => (
                    <SwiperSlide key={index} className='swiper-slide2'>
                        <div>
                            <img src={e.img} alt={e.inner} />
                        </div>
                        <div>
                            <div><a href={e.href}>Weeding</a>/<a href={e.href2}>Gloria Cruz</a></div>
                            <p>{e.inner}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default HomeSwiper;
