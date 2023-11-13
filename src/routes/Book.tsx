export const Book = () => {
  return (
    <div className="bg-lightgrey flex flex-wrap-reverse md:p-32" id="home">
      <div className="bg-tan my-auto flex h-fit w-full flex-col gap-y-8 p-12 md:w-7/12">
        <p className="font-poppins text-[2.2vw] font-extrabold uppercase leading-9 text-black">
          Diversity at College: Real stories of students conquering bias and
          making higher education more inclusive
        </p>
        <p className="font-nunito flex text-justify text-[1em] font-extrabold leading-8 text-white lg:text-24">
          <span className="text-green font-caveat lg:text-64 pr-4">"</span>
          <span className="">
            Bias exists whether we recognize it or not, but each of us has the
            ability to challenge this status quo and advocate for change. It is
            possible to retrain our brains! When we commit to actively
            recognizing and addressing our biases, people can change - and in
            turn, create a stronger and more equitable society where all members
            have a seat at the table.
          </span>
          <span className="text-green font-caveat lg:text-64 flex flex-col justify-end">
            "
          </span>
        </p>
      </div>
      <img
        src="/assets/img/book.png"
        className="mx-auto my-8 w-8/12 object-cover p-8 md:m-0 md:w-5/12 md:p-0"
      />
    </div>
  );
};
