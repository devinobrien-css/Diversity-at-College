import { DiversitySvg } from '../../shared/components/assets/DiversitySvg';
import cx from 'classnames';
import { Link } from 'react-scroll';
import { MobileNavbar } from './MobileNavbar';
import { router } from './router';

export const Navbar = () => {
  return (
    <>
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
                <Link
                  smooth={true}
                  to={id}
                  className="cursor-pointer"
                  {...rest}
                >
                  <a className="text-black">{name}</a>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
      <MobileNavbar />
    </>
  );
};
