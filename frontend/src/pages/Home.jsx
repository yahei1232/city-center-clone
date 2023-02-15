import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import SlideItems from '../components/SlideItems'
import Sliders from '../components/Sliders'
function Home() {

    const bigImgLinks = [
        'https://citycenter.jo/image/catalog/banners/generic-fury-banner.jpg',
        'https://citycenter.jo/image/catalog/banners/save-the-universe.jpg',
        'https://citycenter.jo/image/catalog/2021/banners/flexweb.jpg',
    ]
    const smallImgLinks = [
        'https://image.citycenter.jo/cachewebp/catalog/0112022/P1I5-550x400.webp',
        'https://image.citycenter.jo/cachewebp/catalog/092022/KK340010-550x400.webp',
        'https://image.citycenter.jo/cachewebp/catalog/0112022/x15029-550x400.webp',
        'https://image.citycenter.jo/cachewebp/catalog/0112022/x15029-550x400.webp',
        'https://image.citycenter.jo/cachewebp/catalog/0112022/x15029-550x400.webp',
    ]
    const title = [
        'asd',
        'qwe',
        'zxc',
    ]
    const price = [
        321,
        3212,
        32123,
    ]
    const topDesc = [
        'TOP Laptops For Home & Office',
    ]

    return (
        <div className='home'>
            <Navbar />
            <div className="bacgr-col">
                <img className='adv-row' src="https://citycenter.jo/image/catalog/banners/generic-fury-banner.jpg" alt="" />
            </div>
            <Sliders asd={bigImgLinks} />
            <div className="row most-imb">
                <div className="column comp red">
                    <img src="https://citycenter.jo/image/catalog/banners/sale-icon-city3.png" alt="" width='40px' height="40px" />
                    <h4>END 2022 SALE !!</h4>
                </div>
                <div className="column comp">
                    <img src="https://citycenter.jo/image/catalog/banners/sale-icon-city3.png" alt="" width='40px' height="40px" />
                    <h4>a</h4>
                </div>
                <div className="column comp">
                    <img src="https://citycenter.jo/image/catalog/banners/sale-icon-city3.png" alt="" width='40px' height="40px" />
                    <h4>END 2022 SALE !!</h4>
                </div>
                <div className="column comp">
                    <img src="https://citycenter.jo/image/catalog/banners/sale-icon-city3.png" alt="" width='40px' height="40px" />
                    <h4>END 2022 SALE !!</h4>
                </div>
            </div>
            <div className="bacgr-col">
                <img className='adv-row' src="https://citycenter.jo/image/catalog/banners/save-the-universe.jpg" alt="" />
            </div>
            <div className="computer-C-G row">
                <div className="computer-hardware row">
                    <div className="words column">
                        <h1 className='asd'>COMPUTER HARDWARE</h1>
                        <p>System components, workstations and servers, storage, networking, peripherals and accessories</p>
                        <Link to='asd' className='link'>FIND OUT MORE</Link>
                    </div>
                    <img src="https://citycenter.jo/image/catalog/banners/pro-graphics-city.png" alt="" width='289.300px' height='289.300px' />
                </div>
                <div className="computer-hardware row">
                    <div className="words column">
                        <h1 className='asd'>COMPUTER HARDWARE</h1>
                        <p>System components, workstations and servers, storage, networking, peripherals and accessories</p>
                        <Link to='asd' className='link'>FIND OUT MORE</Link>
                    </div>
                    <img src="https://citycenter.jo/image/catalog/2021/banners/gungun-opt.png" alt="" width='289.300px' height='289.300px' />
                </div>
            </div>
            <SlideItems image={smallImgLinks} title={title} price={price} topDesc={topDesc} />
        </div>
    )
}

export default Home