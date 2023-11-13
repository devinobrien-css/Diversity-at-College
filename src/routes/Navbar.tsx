import { Icon } from '@iconify/react';
import { DiversitySvg } from '../shared/components/assets/DiversitySvg';
import { useState } from 'react';
import cx from 'classnames';
import { Link } from 'react-scroll';

export const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav
      className="navbar sticky top-0 flex justify-between gap-x-2 bg-white p-6 shadow"
      id="navbar"
    >
      <DiversitySvg className="md:w-1/3" />
      <div className="font-nunito hidden gap-x-6 md:flex">
        <Link smooth={true} to="home" className="cursor-pointer">
          <a className="text-black">HOME</a>
        </Link>
        <Link smooth={true} to="about" offset={-60} className="cursor-pointer">
          <a className="text-black">ABOUT</a>
        </Link>
        <Link
          smooth={true}
          to="subscribe"
          offset={-60}
          className="cursor-pointer"
        >
          <a className="text-black">SUBSCRIBE</a>
        </Link>
        <Link smooth={true} to="people" offset={-60} className="cursor-pointer">
          <a className="text-black">AUTHORS</a>
        </Link>
        <Link
          smooth={true}
          to="contact"
          offset={-60}
          className="cursor-pointer"
        >
          <a className="text-black">GET IN TOUCH</a>
        </Link>
      </div>

      <button className="md:hidden" onClick={() => setNavOpen(!navOpen)}>
        <Icon icon="mdi:menu" width="44" />
      </button>

      <div
        className={cx(
          'absolute left-0 top-0 z-50 h-screen w-full bg-white p-6',
          'transition-all duration-500 ease-in-out',
          'flex flex-col gap-y-6',
          {
            'opacity-100': navOpen,
            'hidden opacity-0': !navOpen,
          },
        )}
      >
        <button
          className=" flex w-full justify-between gap-x-2"
          onClick={() => setNavOpen(false)}
        >
          <DiversitySvg className="my-auto w-full" />
          <Icon
            icon="mdi:close"
            width="40"
            className="hover:bg-lightgrey my-auto rounded-lg p-2"
          />
        </button>
        <a className="font-nunito text-24 text-black">HOME</a>
        <hr className="border-yellow w-1/3 border-4" />
        <a className="font-nunito text-24 text-black">ABOUT</a>
        <hr className="border-red w-1/3 border-4" />
        <a className="font-nunito text-24 text-black">SUBSCRIBE</a>
        <hr className="border-green w-1/3 border-4" />
        <a className="font-nunito text-24 text-black">AUTHORS</a>
        <hr className="border-tan w-1/3 border-4" />
        <a className="font-nunito text-24 text-black">GET IN TOUCH</a>
        <hr className="border-lightgrey w-1/3 border-4" />
      </div>
    </nav>
  );
};
