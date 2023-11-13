import { Ads } from './Ads';
import { Book } from './Book';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { Info } from './Info';
import { Navbar } from './Navigation/Navbar';
import { People } from './People';
import { Reviews } from './Reviews';
import { Subscribe } from './Subscribe';

export const Root = () => {
  return (
    <>
      <Navbar />
      <Book />
      <Ads />
      <Info />
      <Subscribe />
      <People />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
};
