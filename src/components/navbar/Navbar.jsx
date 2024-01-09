'use client';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const Navbar = () => {

  const links = [
    {name: 'Home', path: '/'},
    {name: 'Blog', path: '/blog'},
    {name: 'Contact', path: '/contact'},
    {name: 'About', path: '/about'},
    {name: 'Login', path: '/login'}
  ];
  return (
    <Disclosure as="nav" className="font-medium mx-5 my-2 border border-accent rounded-lg shadow-md">
      {({ open, close }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="flex items-center justify-between h-16 ">
              {/* Logo */}
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="ml-2 text-xl font-semibold ">
                    Logo
                  </span>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className='flex items-center'>
                <div>
                  <Disclosure.Button
                    className="flex ml-3 rounded-md p-2 sm:hidden"
                  >
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>

              {/* Links for larger screens */}
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {links.map((item) => (
                    <Link key={item.name} href={item.path} className={`hover:bg-primary px-3 py-2 rounded-lg transition duration-300 ease-in-out
                    ${item.name === 'Login' ? ' border border-accent' : ''}
                    `}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Collapsible panel for mobile screens */}
          <Disclosure.Panel className={`sm:hidden absolute inset-x-6 rounded top-20 border border-accent shadow-md z-50  bg-background`}>
            <div className="flex flex-col space-y-3 px-4 my-2">
              {links.map((item) => (
                <Link key={item.name} href={item.path}
                onClick={() => close()}
                 className={            
                  `hover:bg-primary px-4 py-2 rounded-lg transition duration-300 ease-in-out
                  ${item.name === 'Login' ? ' border border-accent' : ''}

                  `

                  }>
                  {item.name}

                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
