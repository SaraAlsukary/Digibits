'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Button from '../Button/Button'
import styles from './Header.module.css'
import { IoIosCloseCircleOutline } from "react-icons/io"
import { TfiAlignCenter } from "react-icons/tfi";
import { usePathname } from 'next/navigation'
import Image from 'next/image'
const Header = () => {
    const pathname = usePathname()
    const [isScrolled, setIsScrolled] = useState(false)
    const [isNav, setIsNav] = useState(false)


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const activeNavHandler = () => {
        setIsNav(!isNav)
    }

    const closeNavHandler = () => {
        setIsNav(false)
    }


    useEffect(() => {
        const clickHandler = (e: Event): void => {
            const target = e.target as Element;
            if (!target.closest('nav') && !target.closest('.burger')) {
                setIsNav(false)
            }
        }

        window.addEventListener('click', clickHandler)
        return () => {
            window.removeEventListener('click', clickHandler)
        }
    }, [])

    useEffect(() => {
        setIsNav(false)
    }, [pathname])
    // lg:block xl:block md:block sm:hidden max-sm:hidden
    return (
        <header className={`p-10 ${styles.header} ${isScrolled || pathname !== '/' ? `${styles.scrolled}` : ''} `}>
            <div className='container flex justify-between items-center '>
                <div className="logo text-white">
                    <h1 className='font-bold text-4xl'><Link href={'/'}>
                        {/* Digibits */}
                        <Image src="/logo.png" alt="Digibits Logo" width={100} height={100} />
                    </Link></h1>
                </div>
                <nav className={` ${isNav ? styles.active : ""}`}>
                    <ul className={`flex justify-center gap-7 items-center text-white `}>
                        <li className=' md:hidden lg:hidden xl:hidden sm:block max-sm:block cursor-pointer' >
                            <IoIosCloseCircleOutline size={40} onClick={closeNavHandler} />
                        </li>
                        <li className={`text-xl ${pathname === '/' ? 'active' : ""}`}><Link href={'/'}>Home</Link></li>
                        <li className={`text-xl ${pathname === '/products' ? 'active' : ""}`}><Link href={'/products'}>Products</Link></li>
                        <li className={`text-xl ${pathname === '/about' ? 'active' : ""}`}><Link href={'/about'}>About</Link></li>
                        <li>
                            <Button>
                                <Link href={'/contact'}>Contact</Link>
                            </Button>
                        </li>
                    </ul>
                </nav>

                <TfiAlignCenter size={40} onClick={activeNavHandler} color='white' className='burger md:hidden lg:hidden xl:hidden sm:block max-sm:block cursor-pointer' />
            </div>
        </header >

    )
}

export default Header