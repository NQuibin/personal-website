import React, { useEffect } from 'react';
import Aos from 'aos';
import Header from '@/components/header';
import About from '@/components/about';
import Experience from '@/components/experience';
import Footer from '@/components/footer';
import SEO from '@/components/seo';

const HomePage = () => {
  useEffect(() => {
    Aos.init({
      delay: 100,
      duration: 1000,
      offset: 50,
    });
    Aos.refresh();
  }, []);

  return (
    <>
      <SEO title="Welcome" />
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
