import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../css/User.css"
import Carousel from './Carousel'




interface Props { }



export const User = (props: Props) => {

    const handleUser1 = () => {
        console.log("1")
    }

    const handleUser2 = () => {
        console.log("1")
    }

    return (
        <div className='main'>
            <h3 className='textfront text-xl text-center text-lime-400 break-normal my-5 underline'>Characters</h3>
            <div className="grid-container flex flex-row w-1/2 p-10 m-auto">

                <div className="grid-item basis-1/2">
                    <div className='img'><img src="https://cdn-icons-png.flaticon.com/128/4140/4140048.png" alt="" /></div>
                    <div className="btn px-7 py-2 my-5"><button className="btns" onClick={handleUser1}>Me</button></div>
                </div>
                <div className="grid-item basis-1/2">
                    <div className='img'><img src="https://cdn-icons-png.flaticon.com/128/663/663080.png" alt="" /></div>
                    <div className="btn px-7 py-2 my-5"><button className='btns' onClick={handleUser2}>SuperHero</button></div>
                </div>
                <div className="grid-item basis-1/2">
                    <div className='img'><img src="https://cdn-icons-png.flaticon.com/128/742/742863.png" alt="" /></div>
                    <div className="btn px-7 py-2 my-5"><button className='btns' onClick={handleUser2}>Zombie</button></div>
                </div>
            </div>
            <div>
                <Carousel />
            </div>

            <div className='text-center'>
                <Link to="/game">
                    <button className='btns px-7 py-2 my-5' onClick={handleUser2}>Start</button></Link>
            </div>

        </div>

    )
}
