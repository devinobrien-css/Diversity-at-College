import cx from 'classnames';
import { Element } from 'react-scroll';

export const Book = () => {
  return (
    <Element name="home">
      <div className="bg-lightgrey flex flex-wrap-reverse md:p-32" id="home">
        <div
          className={cx(
            ' my-auto flex h-fit w-full flex-col gap-y-8 ',
            'bg-tan px-2 py-6',
            'md:w-7/12 md:p-8',
          )}
        >
          <p
            className={cx(
              'text-center text-18 transition-all',
              'font-poppins font-extrabold uppercase text-gray-800',
              'xl:text-36 md:text-left md:text-18 md:leading-6 lg:text-28 lg:leading-9',
            )}
          >
            Diversity at College: Real stories of students conquering bias and
            making higher education more inclusive
          </p>
          <p
            className={cx(
              'flex',
              'font-nunito p-2 text-center font-extrabold leading-8 text-white ',
              'md:text-justify md:text-12 md:leading-5 lg:text-18 xl:text-24 xl:leading-8',
            )}
          >
            <span className="text-green font-caveat md:text-64 text-48 md:pr-4">
              "
            </span>
            <span className="">
              Bias exists whether we recognize it or not, but each of us has the
              ability to challenge this status quo and advocate for change. It
              is possible to retrain our brains! When we commit to actively
              recognizing and addressing our biases, people can change - and in
              turn, create a stronger and more equitable society where all
              members have a seat at the table.
            </span>
            <span className="text-green font-caveat md:text-64 flex flex-col justify-end text-48">
              "
            </span>
          </p>
        </div>

        <img
          src="/assets/img/book.png"
          className={cx(
            'mx-auto my-6 w-8/12 object-cover p-8',
            'md:m-0 md:w-5/12 md:p-0',
          )}
        />
      </div>
    </Element>
  );
};
