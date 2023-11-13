import { Element } from 'react-scroll';

const people: ProfileProps[] = [
  {
    image: 'James.jpg',
    full_name: 'Jim Stellar, PhD',
    description:
      'Neuroscience professor, author, and former university administrator.',
  },
  {
    image: 'Benny.jpg',
    full_name: 'Beny Poy',
    description:
      'Community organizer, diversity + inclusion advocate, and proud Bronxite.',
  },
  {
    image: 'Chrisel.jpg',
    full_name: 'Chrisel Martinez',
    description: 'Movement Builder Radical Thinker Harlem Native',
  },
  {
    image: 'Chloe.jpg',
    full_name: 'Chloe Skye Weiser',
    description: '“Word magician,” ESL teacher, and avid world traveler.',
  },
  {
    image: 'Agata.jpg',
    full_name: 'Agata Buras',
    description:
      'Neuroscience enthusiast, research assistant, diversity advocate.',
  },
  {
    image: 'Marc.jpg',
    full_name: 'Marc Cohen',
    description:
      'Policy advisor, higher education enthusiast, advocate, and EMT.',
  },
  {
    image: 'Rachel.jpg',
    full_name: 'Rachel Eager',
    description: 'Graduate student aspiring to work in healthcare management.',
  },
  {
    image: 'Brandy.jpg',
    full_name: 'Brandy Eggan, PhD',
    description:
      'College professor, diversity + inclusion researcher, and mentor.',
  },
];

interface ProfileProps {
  image: string;
  full_name: string;
  description: string;
}
const Profile = ({ image, full_name, description }: ProfileProps) => {
  return (
    <div className="mx-auto flex w-1/5 flex-col gap-y-2">
      <img src={`/assets/img/${image}`} className="" />
      <p className="font-poppins font-extrabold text-gray-600">{full_name}</p>
      <p className="font-nunito text-gray-600">{description}</p>
    </div>
  );
};

export const People = () => {
  return (
    <div className="bg-paper p-12" id="people">
      <Element name="people" />
      <h2 className="p-2 text-center text-32 text-black">ABOUT THE AUTHORS</h2>
      <hr className="border-red mx-auto w-24 border-2" />
      <div className="flex flex-wrap gap-6 p-8">
        {people.map((person) => (
          <Profile {...person} />
        ))}
      </div>
    </div>
  );
};
