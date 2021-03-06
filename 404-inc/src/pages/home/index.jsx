import React, { useEffect, useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Hero from './hero-page';
import Store from './home-store';
import Features from './home-features';
import Games from './home-games';
import Newsletter from './home-newsletter';
import Navbar from '../../components/partials/navbar/index';
import SectionService from '../../services/section-service';

const Fullpage = () => {
  const [loading, setLoading] = useState(false);
  const [_sections, setSections] = useState(null);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const { sections } = await SectionService.getSections();
      setSections(sections);
      setLoading(false);
    })();
  }, []);
  return (
    <ReactFullpage
      licenseKey="B85265C5-655F4BAE-861A6A32-01A5782F"
      scrollingSpeed={1000}

    // eslint-disable-next-line react/jsx-props-no-multi-spaces
      render={({ fullpageApi }) => (
        <ReactFullpage.Wrapper>
          <Navbar handleMoveSection={(page) => fullpageApi.moveTo(page)} />
          <Hero handleMoveSection={() => fullpageApi.moveTo('2')} />
          <Store loading={loading} sections={_sections} />
          <Features loading={loading} sections={_sections} />
          <Games loading={loading} sections={_sections} />
          <Newsletter handleMoveSection={() => fullpageApi.moveTo('1')} />
        </ReactFullpage.Wrapper>
      )}
    />
  );
};

export default Fullpage;
