import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
function Home() {

    return (
        <div className='home'>
            <Navbar />
            <div className="bacgr-col">
                <img className='adv-row' src="https://citycenter.jo/image/catalog/banners/generic-fury-banner.jpg" alt="" />
            </div>

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

        </div>
    )
}

export default Home