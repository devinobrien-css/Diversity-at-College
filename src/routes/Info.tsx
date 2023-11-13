import { Icon } from '@iconify/react';

export const Info = () => {
  return (
    <div className="bg-lightgrey px-24 py-8" id="about">
      <div>
        <p className="text-center text-24 font-bold">
          <span className="text-red">FIVE REVEALING STORES. </span>
          <span className="text-green"> REAL STUDENT EXPERIENCES.</span>
        </p>
        <p className="font-poppins text-center text-20 font-semibold text-black">
          A ROADMAP TO TEACHING AND LEARNING DIVERSITY FOR THE NEXT GENERATION.
        </p>
      </div>

      <div className="flex">
        <img
          src="/assets/img/book-back.png"
          className="mx-auto w-1/2 object-cover p-8"
        />

        <div className="my-auto flex flex-col gap-y-4">
          <div>
            <div className="flex gap-x-2">
              <Icon
                icon="carbon:book"
                width="36"
                className="text-red my-auto"
              />
              <p className="text-red my-auto text-28 font-bold">
                IMPLICIT BIAS.
              </p>
            </div>
            <ul className="font-poppins mx-4 list-disc font-light text-black">
              <li>
                Any unconsciously-held set of associations about a particular
                social group. These biases result in stereotypes that are often
                untrue.
              </li>
              <li>
                Beny was one of the only people of color in the Philosophy
                department. Why should only old white dudes get to be
                philosophers? Read Beny's story in Chapter 2!
              </li>
            </ul>
          </div>

          <div>
            <div className="flex gap-x-2">
              <Icon
                icon="heroicons:user-group"
                width="36"
                className="text-green my-auto"
              />
              <p className="text-green my-auto text-28 font-bold">
                SELF-HANDICAPPING.
              </p>
            </div>
            <ul className="font-poppins mx-4 list-disc font-light text-black">
              <li>
                The psychological strategy where people avoid failure by not
                trying something when they think they won't succeed. This can
                harm self-esteem and has resulted in the underrepresentation of
                diverse groups in fields like STEM, medicine, and more.
              </li>
              <li>
                Rachel wanted to study medicine, but an offhand comment brought
                on feelings of self-doubt. How did she overcome it? Read
                Rachel's story in Chapter 3!
              </li>
            </ul>
          </div>

          <div>
            <div className="flex gap-x-2">
              <Icon
                icon="heroicons:user-group"
                width="36"
                className="text-tan my-auto"
              />
              <p className="text-tan my-auto text-28 font-bold">
                PEER SUPPORT.
              </p>
            </div>
            <ul className="font-poppins mx-4 list-disc font-light text-black">
              <li>
                Occurs when individuals facing similar challenges come together
                as a group to give and receive help based on their shared lived
                experiences.
              </li>
              <li>
                Chrisel's entry into college life was shaped by the Educational
                Opportunity Program. How has it helped her succeed? Read
                Chrisel's story in Chapter 4!
              </li>
            </ul>
          </div>

          <div>
            <div className="flex gap-x-2">
              <Icon
                icon="ph:user-circle-gear"
                width="36"
                className="text-yellow my-auto"
              />
              <p className="text-yellow my-auto text-28 font-bold">
                IN-GROUP/OUT-GROUP.
              </p>
            </div>
            <ul className="font-poppins mx-4 list-disc font-light text-black">
              <li>
                The contrast between two groups, particularly where the
                “in-group” holds a power or status that someone from the
                “out-group” wants to acquire. Shown scientifically to be an
                unconscious driver of behavior in all age groups, races, etc.
              </li>
              <li>
                When Marc got to college, he found himself to be a little fish
                in a big pond. Where would he find his people? Read Marc's story
                in Chapter 5!
              </li>
            </ul>
          </div>

          <div>
            <div className="flex gap-x-2">
              <Icon
                icon="fa6-solid:people-pulling"
                width="36"
                className="my-auto text-black"
              />
              <p className="my-auto text-28 font-bold text-black">
                STEREOTYPE THREAT.
              </p>
            </div>
            <ul className="font-poppins mx-4 list-disc font-light text-black">
              <li>
                When stereotypes result in an unconscious tendency for members
                of a stereotyped group to self-impose unwarranted negative
                attributes.
              </li>
              <li>
                Agata came to the US from Poland as a teenager and had to build
                her new life from the ground up in English. Did she let that
                stop her? Read Agata's story in Chapter 6!
              </li>
            </ul>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

// streamline: collaborations - idea;
