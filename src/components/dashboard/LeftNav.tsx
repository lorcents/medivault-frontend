// components/LeftNav.js
import Link from 'next/link';

const LeftNav = () => {
  return (
    <div className='pt-20 bg-slate-100'>
    <nav className="w-64 p-4  text-deep-royal-blue">
      <ul>
        <li>
          <Link href="/dashboard" className="hover:underline py-2">
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/diaries " className="hover:underline py-2">
            Diaries
          </Link>
        </li>
        <li>
          <Link href="/appointments" className="hover:underline py-2">
             Appointments
          </Link>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default LeftNav;
