import { Icon } from '@iconify/react';
import { DiversitySvg } from '../../shared/components/assets/DiversitySvg';
import cx from 'classnames';
import { useState } from 'react';
import { router } from './router';
import { Link } from 'react-scroll';

interface ScrollToTopProps {
  onClick?: () => void;
}

const ScrollToTop = ({ onClick }: ScrollToTopProps) => {
  return (
    <Link
      smooth={true}
      to="home"
      className="cursor-pointer"
      onClick={onClick}
      offset={-60}
    >
      <a className="fixed bottom-0 right-16 m-4 rounded-full bg-white p-2 transition hover:scale-105">
        <Icon icon="mdi:chevron-up" width="44" />
      </a>
    </Link>
  );
};

export const MobileNavbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <button
        className="fixed bottom-0 right-0 m-4 rounded-full bg-white p-2 transition hover:scale-105 md:hidden"
        onClick={() => setNavOpen(!navOpen)}
      >
        <Icon icon="mdi:menu" width="44" />
      </button>

      <div
        className={cx(
          'fixed left-0 top-0 z-50 h-screen w-screen',
          'transition-all duration-500 ease-in-out',
          'bg-white p-6',
          {
            'opacity-100': navOpen,
            'hidden opacity-0': !navOpen,
          },
        )}
      >
        <DiversitySvg className="my-auto w-full py-2" />
        <br />
        <div className=" flex w-full flex-col items-center justify-between gap-y-6">
          {router.map((tab) => {
            const { id, name, Delimeter, ...rest } = tab;
            return (
              <>
                <Link
                  smooth={true}
                  to={id}
                  className="cursor-pointer"
                  {...rest}
                  onClick={() => setNavOpen(false)}
                >
                  <a className="font-caveat mx-auto text-center text-24 text-black">
                    {name}
                  </a>
                </Link>
                <Delimeter />
              </>
            );
          })}
        </div>
        <button
          className=" flex w-full justify-between gap-x-2"
          onClick={() => setNavOpen(false)}
        >
          <Icon
            icon="mdi:close"
            width="60"
            className="fixed bottom-0 right-0 m-4 rounded-full bg-white p-2 shadow-xl transition hover:scale-105"
          />
        </button>
        <ScrollToTop onClick={() => setNavOpen(false)} />
      </div>
    </>
  );
};
