import React from 'react';

import uiAnimations from './ui-animations.js';
import UiAnimationsList from './components/UiAnimationsList.js';


function App() {
  return (
    <div className="container">
      <h1>
        css wizard
      </h1>
      <div className="codepens">
        <UiAnimationsList uiAnimationsData={uiAnimations} />
      </div>
    </div>
  );
}

export default App;
