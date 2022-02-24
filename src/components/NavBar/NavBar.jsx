import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
const LinkClass = 'text-slate-700 font-medium p-4 hover:border-b-4'

return (
<nav className='flex justify-around sticky top-0 bg-white h-[60px] shadow-md'>
    <div>
        <Link to='/' ><svg height="60px" width="60px" fill="#111" viewBox="0 0 69 32" className='fill-zinc-900 hover:fill-neutral-500'><path d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z"></path></svg></Link>
    </div>
    <div className='flex justify-center'>
        <Link to='/products' className={LinkClass}>Zapatillas</Link>
        <Link to='/shopingCart' className={LinkClass}>Carrito</Link>
    </div>
</nav>
)
}

export default NavBar;