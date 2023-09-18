// components/AppBar.js
import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link'

function AppBar() {
  return (
    <header className="bg-white shadow-lg py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side: Title */}
        <div className="text-deep-royal-blue font-bold text-2xl">Medivault</div>

        {/* Right side: Login and Register buttons */}
        <div className="space-x-4 ">
          <Link href="/" className="text-deep-royal-blue hover:text-red-500">
            Login
          </Link>
        <Button className='hover:bg-deep-royal-blue rounded-full'> <a className='px-2' href="/auth" >
            Register
          </a></Button> 
        </div>
      </div>
    </header>
  );
}

export default AppBar;
