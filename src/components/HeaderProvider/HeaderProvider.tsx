'use client'
import React from 'react'
import Header from '../Header/Header'
import { usePathname } from 'next/navigation'

export const HeaderProvider = () => {
    const pathname = usePathname()
    return (
        <>
            {pathname !== '/' && <Header />}
        </>
    )
}
