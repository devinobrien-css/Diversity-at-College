export const router = [
  {
    name: 'HOME',
    id: 'home',
    offset: -60,
    Delimeter: () => <hr className="border-yellow w-1/3 border-4" />,
  },
  {
    name: 'ABOUT',
    id: 'about',
    offset: -60,
    Delimeter: () => <hr className="border-red w-1/3 border-4" />,
  },
  {
    name: 'SUBSCRIBE',
    id: 'subscribe',
    offset: -100,
    Delimeter: () => <hr className="border-green w-1/3 border-4" />,
  },
  {
    name: 'AUTHORS',
    id: 'people',
    offset: -100,
    Delimeter: () => <hr className="border-tan w-1/3 border-4" />,
  },
  {
    name: 'GET IN TOUCH',
    id: 'contact',
    offset: -60,
    Delimeter: () => <hr className="border-lightgrey w-1/3 border-4" />,
  },
];
