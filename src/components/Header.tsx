import React from 'react'
import Link from 'next/link'
import Button from './Button'
const Header = () => {
    return (
        <header className='p-10'>
            <div className='container flex justify-between items-center'>
                <div className="logo text-white">
                    <h1 className='font-bold text-4xl'>Digibits</h1>
                </div>
                <nav>
                    <ul className='flex justify-center gap-7 items-center text-white'>
                        <li className='text-xl'><Link href={'/'}>Home</Link></li>
                        <li className='text-xl'><Link href={'/products'}>Products</Link></li>
                        <li className='text-xl'><Link href={'/about'}>About</Link></li>
                        <li className='text-xl'>
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