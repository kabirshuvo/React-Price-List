import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid';
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
             <XMarkIcon className="h-6 w-6 text-blue-500" />: <Bars4Icon className="h-6 w-6 text-blue-500" />}</span>
            </div>

            <ul className={`md:flex absolute md:static duration-300 pl-4 bg-purple-700 text-white ${open ? 'top-6': '-top-32'}`}>
                
{
    routes.map(route => <Link key={route.id} route={route}> {route.name}</Link>)
}
                
            </ul>
        </nav>
    );
};

export default NavBar;