import { Icon } from '@iconify/react';
import { Ads } from './Ads';
import { Book } from './Book';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { Info } from './Info';
import { Navbar } from './Navbar';
import { People } from './People';
import { Reviews } from './Reviews';
import { Subscribe } from './Subscribe';
import { Element, Link } from 'react-scroll';

export const Root = () => {
  return (
    <>
      <Element name="home" />
      <Navbar />
      <Book />
      <Ads />
      <Element name="about" />
      <Info />
      <Element name="subscribe" />
      <Subscribe />
      <Element name="people" />
      <People />
      <Reviews />
      <Element name="contact" />
      <Contact />
      <Footer />
      <Link smooth={true} to="home" className="cursor-pointer">
        <a className="fixed bottom-0 right-0 m-4 rounded-full bg-white p-2 shadow-lg transition hover:scale-105">
          <Icon icon="mdi:chevron-up" width="44" />
        </a>
      </Link>
    </>
  );
};
