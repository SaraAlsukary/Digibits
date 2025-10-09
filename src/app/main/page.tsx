import React from 'react'
import Home from '../home/page'
import About from '../about/page'
import Tech from '../tech/page'
import Caring from '../caring/page'
import Workflow from '../workflow/page'
import Products from '../products/page'
import Social from '../social/page'
import Contact from '../contact/page'

const Main = () => {
    return (
        <div>
            <Home />
            <About />
            <Caring />
            <Tech />
            <Workflow />
            <Products />
            <Social />
            <Contact />
        </div>
    )
}

export default Main