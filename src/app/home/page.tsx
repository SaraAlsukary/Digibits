import Image from 'next/image'
import React from 'react'

const Home = () => {
    return (
        <div className='landing'>
            <Image width={1000} height={800} src={'/landing.jpg'} alt='landing'/>
        </div>
    )
}

export default Home