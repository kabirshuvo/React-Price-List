import { Bars4Icon, XCircleIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import Link from '../links/Link';

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        {id: 0, name: 'home', path: '/' },
        {id: 1, name: 'About', path: '/about' },
        {id: 2, name: 'contact', path: '/contact'},
        {id: 3, name: 'Products', path: '/products'},
        {id: 4, name: 'Services', path: '/services'},
      ]
    return (
        <nav >
            <div onClick={() => setOpen(!open)} className='md:hidden'>
            <span>{open === true ? 
            <Bars4Icon className="h-6 w-6 text-blue-500" /> : <XCircleIcon className="h-6 w-6 text-blue-500" />}</span>
            </div>

            <ul className={`md:flex ${open ? 'top-10': '-top-120'}`}>
                
{
    routes.map(route => <Link key={route.id} route={route}> {route.name}</Link>)
}
                
            </ul>
        </nav>
    );
};

export default NavBar;