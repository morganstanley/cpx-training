import React from 'react';

function PageHead({ title, children }) {
  return (
    <>
      <title>{title} | Makerspace</title>
      {children}
    </>
  );
}

export default PageHead;
