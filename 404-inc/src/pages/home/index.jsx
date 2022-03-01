/* eslint-disable react/button-has-type */
/* eslint-disable no-console, no-control-regex */
import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Hero from './hero-page';
import Store from './store';
import Features from './features';
import Comments from './comments';
import Newsletter from './newsletter';
import Navbar from '../../components/partials/navbar/index';

const Fullpage = () => (
  <ReactFullpage
    // fullpage options
    licenseKey="B85265C5-655F4BAE-861A6A32-01A5782F"
    scrollingSpeed={1000} /* Options here */

    // eslint-disable-next-line react/jsx-props-no-multi-spaces
    render={({ fullpageApi }) => (
      <ReactFullpage.Wrapper>
        <Navbar handleMoveSection={(page) => fullpageApi.moveTo(page)} />
        <Hero handleMoveSection={() => fullpageApi.moveTo('2')} />
        <Store />
        <Features />
        <Comments />
        <Newsletter handleMoveSection={() => fullpageApi.moveTo('1')} />
      </ReactFullpage.Wrapper>
    )}
  />
);

export default Fullpage;
