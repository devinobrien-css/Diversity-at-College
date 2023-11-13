import { Icon } from '@iconify/react';
import { DiversitySvg } from '../../shared/components/assets/DiversitySvg';
import cx from 'classnames';
import { useState } from 'react';
import { router } from './router';
import { Link } from 'react-scroll';

export const MobileNavbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <button
        className="fixed bottom-0 right-0 m-4 rounded-full bg-white p-2 shadow-lg transition hover:scale-105 md:hidden"
        onClick={() => setNavOpen(!navOpen)}
      >
        <Icon icon="mdi:menu" width="44" />
      </button>
      <div
        className={cx(
          'absolute left-0 top-0 z-50 h-screen w-full ',
          'transition-all duration-500 ease-in-out',
          'bg-white p-6',
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
          <DiversitySvg className="my-auto w-full py-2" />
          <Icon
            icon="mdi:close"
            width="60"
            className="fixed bottom-0 right-0 m-4 rounded-full bg-white p-2 shadow-xl transition hover:scale-105"
          />
        </button>
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
                <a className="font-caveat text-black">{name}</a>
              </Link>
              <Delimeter />
            </>
          );
        })}
      </div>
    </>
  );
};
