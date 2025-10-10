import React from 'react'

const Button = ({children}:{children:React.ReactNode}) => {
    return (
        <button className='rounded-full py-2 px-6'
            style={{ backgroundImage:"linear-gradient(to right,var(--purple),var(--orange))"}}
        >{children}</button>
    )
}

export default Button