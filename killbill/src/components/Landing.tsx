import React from 'react'
import { Link } from 'react-router-dom'
import "../css/Landing.css"
import { Img } from '@chakra-ui/react'

export const Landings = () => {
    return (

        <div className='body' style={{marginTop:"30px"}}>
            <h1 className='gameName'>Kill Bill</h1>

            <div className="birds">
                <img src="https://media.tenor.com/8IACY9DoB4MAAAAM/dead-bird.gif" alt="" />

                {/* <div className="birds__hatdove">
                    <div className="birds__hatdove-shadow"></div>
                    <div className="birds__hatdove-head">
                        <div className="birds__hatdove-hat"></div>
                        <div className="birds__hatdove-forehead"></div>
                        <div className="birds__hatdove-eye"></div>
                        <div className="birds__hatdove-eye"></div>
                        <div className="birds__hatdove-beak"></div>
                    </div>
                    <div className="birds__hatdove-backwing"></div>
                    <div className="birds__circles-1"></div>
                    <div className="birds__hatdove-backleg">
                        <div className="birds__curly"></div>
                    </div>
                    <div className="birds__hatdove-body"></div>
                    <div className="birds__hatdove-frontleg">
                        <div className="birds__curly"></div>
                    </div>
                    <div className="birds__hatdove-frontwing"></div>
                    <div className="birds__circles-2"></div>
                    <div className="birds__hatdove-frontwing-finger"></div>
                    <div className="birds__hatdove-frontwing-finger"></div>
                    <div className="birds__hatdove-frontwing-finger"></div>
                </div>
                <div className="birds__table">
                    <div className="birds__table-shadow"></div>
                </div>
                <div className="birds__laptop"></div>
                <div className="birds__laptop">
                    <div className="birds__monitor">
                        <div className="birds__code"></div>
                    </div>
                </div>
                <div className="birds__coffee"></div>
                <div className="birds__feather"></div>
                <div className="birds__feather"></div>
                <div className="birds__rundove-shadow"></div>
                <div className="birds__rundove">
                    <div className="birds__rundove-backwing">
                        <div className="birds__finger"></div>
                        <div className="birds__finger"></div>
                        <div className="birds__finger"></div>
                        <div className="birds__circles"></div>
                    </div>
                    <div className="birds__rundove-head">
                        <div className="birds__rundove-eye"></div>
                        <div className="birds__rundove-eye"></div>
                        <div className="birds__rundove-beak"></div>
                    </div>
                    <div className="birds__rundove-backleg">
                        <div className="birds__curly"></div>
                    </div>
                    <div className="birds__rundove-body"></div>
                    <div className="birds__rundove-frontleg">
                        <div className="birds__curly"></div>
                    </div>
                    <div className="birds__rundove-frontwing">
                        <div className="birds__finger"></div>
                        <div className="birds__finger"></div>
                        <div className="birds__finger"></div>
                        <div className="birds__circles"></div>
                    </div>
                </div> */}

                            </div>



           <div className='startButton'>
           <Link to="/user"><button className='star'>Start</button></Link>
           </div>
        </div>
    )
}

