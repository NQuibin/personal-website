import React, { useEffect } from 'react';
import Aos from 'aos';
import Header from '@/components/header';
import About from '@/components/about';
import Experience from '@/components/experience';
import Footer from '@/components/footer';

const HomePage = () => {
  useEffect(() => {
    Aos.init({
      delay: 250,
      duration: 1000,
    });
    Aos.refresh();
  }, []);

  return (
    <>
      <Header />
      <main>
        <About />
        <Experience />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
