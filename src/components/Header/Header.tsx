'use client'
import React, { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import Button from '../Button'
import styles from './Header.module.css'

import { usePathname } from 'next/navigation'
const Header = () => {
    const pathname = usePathname()
    const [isScrolled, setIsScrolled] = useState(false)


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

    return (
        <header className={`p-10 ${styles.header} ${isScrolled || pathname !== '/' ? `${styles.scrolled}` : ''} `}>
            <div className='container flex justify-between items-center '>
                <div className="logo text-white">
                    <h1 className='font-bold text-4xl'><Link href={'/'}>Digibits</Link></h1>
                </div>
                <nav>
                    <ul className={`flex justify-center gap-7 items-center text-white `}>
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
            </div>
        </header>

    )
}

export default Header