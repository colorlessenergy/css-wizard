import React from 'react';
import renderHTML from 'react-render-html';

function uiAnimationList (props) {

  const { uiAnimationsData } = props;

  let items = uiAnimationsData.map(function (item) {
    return (
      <div
        key={item.id} 
        className="codepen-container">
        <h3>
          {item.title}
        </h3>
        <p>
          {item.description}
        </p>
        {renderHTML(item.codepen)}
      </div>)
  });

  return items
}

export default uiAnimationList;