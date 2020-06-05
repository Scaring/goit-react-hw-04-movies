import React from 'react';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Inline } from '@zendeskgarden/react-loaders';

const Loader = () => {
  return (
    <ThemeProvider>
      <div className="container">
        <Inline size={50} color={'#99CAF1'} />
      </div>
    </ThemeProvider>
  );
};

export default Loader;
