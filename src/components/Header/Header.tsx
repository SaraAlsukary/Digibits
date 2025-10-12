'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Button from '../Button/Button'
import styles from './Header.module.css'
import { IoIosCloseCircleOutline } from "react-icons/io"
import { TfiAlignCenter } from "react-icons/tfi";
import { usePathname } from 'next/navigation'
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
    const activeNavHandler = (e) => {
        setIsNav(!isNav)
    }
    useEffect(() => {
        const clickHandler = (e: any) => {
            if (!(e.target as Element).classList.contains('burger')) {
                document.querySelector('nav')?.classList.remove(styles.active)
            }
        }
        window.addEventListener('click', clickHandler)
        return () => {
            window.removeEventListener('click', clickHandler)
        }
    }, [])
    return (
        <header className={`p-10 ${styles.header} ${isScrolled || pathname !== '/' ? `${styles.scrolled}` : ''} `}>
            <div className='container flex justify-between items-center '>
                <div className="logo text-white">
                    <h1 className='font-bold text-4xl'><Link href={'/'}>Digibits</Link></h1>
                </div>
                <nav className={`lg:block xl:block md:block sm:hidden max-sm:hidden ${isNav ? styles.active : ""}`}>
                    <ul className={`flex justify-center gap-7 items-center text-white `}>
                        <li className=' md:hidden lg:hidden xl:hidden sm:block max-sm:block cursor-pointer' >
                            <IoIosCloseCircleOutline size={40} />
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