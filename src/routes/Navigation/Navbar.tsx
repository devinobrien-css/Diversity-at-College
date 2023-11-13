import { Icon } from '@iconify/react';
import { DiversitySvg } from '../../shared/components/assets/DiversitySvg';
import cx from 'classnames';
import { Link } from 'react-scroll';
import { MobileNavbar } from './MobileNavbar';
import { router } from './router';

const ScrollToTop = () => {
  return (
    <Link smooth={true} to="home" className="cursor-pointer">
      <a className="fixed bottom-16 right-0 m-4 rounded-full bg-white p-2 shadow-lg transition hover:scale-105">
        <Icon icon="mdi:chevron-up" width="44" />
      </a>
    </Link>
  );
};

export const Navbar = () => {
  return (
    <nav
      className={cx('navbar sticky top-0 ', 'bg-white shadow md:p-6')}
      id="navbar"
    >
      <div className="flex w-full justify-between">
        <DiversitySvg className="w-full py-2 md:w-1/3" />
        <div className="font-nunito hidden gap-x-6 md:flex">
          {router.map((tab) => {
            const { id, name, ...rest } = tab;
            return (
              <Link smooth={true} to={id} className="cursor-pointer" {...rest}>
                <a className="text-black">{name}</a>
              </Link>
            );
          })}
        </div>
      </div>

      <MobileNavbar />
      <ScrollToTop />
    </nav>
  );
};
