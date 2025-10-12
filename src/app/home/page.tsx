import React from 'react'
import './style.css'
import Header from '@/components/Header/Header'
import LottieHandler from '@/components/LottieHandler/LottieHandler'
import Button from '@/components/Button/Button'
import Link from 'next/link'
const Home = () => {
    return (
        <div className='landing'>
            <Header />
            <main className='container pt-40 px-10 mx-auto '>
                <div className=' flex lg:flex-row xl:flex-row md:flex-row  text-white items-center justify-between  max-sm:flex-col-reverse sm:flex-col-reverse '>
                    <div className="left w-[600px] xl:text-left md:text-left sm:text-center max-sm:text-center max-sm:w-[350px]">
                        <h1 className='text-4xl font-bold '>Welcome to Digibits</h1>
                        <p className='text-2xl '>Your gateway to innovative digital solutions,
                            learn more about our services and offerings,
                            Discover how we can help you achieve your digital goals
                        </p>
                        <div className="mt-6">
                            <Button><Link href={'#products'}>Go See Our Work</Link></Button>
                        </div>
                    </div>
                    <div className="right">
                        <LottieHandler type='main' style={{ width: '400px', height: '400px' }} />
                    </div>
                </div>

            </main>
        </div>
    )
}

export default Home