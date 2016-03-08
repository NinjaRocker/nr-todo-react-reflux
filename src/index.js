import React from 'react';
import { render } from 'react-dom';

import Controls from './Controls';
import ListView from './ListView';

const MainComponent = () => (
  <div>
    <Controls />
    <ListView />
  </div>
);

render(
  <MainComponent/>,
  document.getElementById('app')
)