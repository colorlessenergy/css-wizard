import React from 'react';

import uiAnimations from './ui-animations.js';
import renderHTML from 'react-render-html';

function App() {

  let items = uiAnimations.map(function (item) {
    console.log(item);
    return (
      <div class="codepen-container">
        <h3>
          {item.title}
        </h3>
        <p>
          {item.description}
        </p>
        { renderHTML(item.codepen) }
      </div>)
  })

  return (
    <div className="container">
      <h1>
        css wizard
      </h1>
      <div class="codepens">
        {items}
      </div>
    </div>
  );
}

export default App;
