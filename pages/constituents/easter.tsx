import React from 'react';

function Heading() {
  return (
    <header>A free egg for you</header>
  );
}

function Egg({ children }) {
  return (
    <div>
      <Heading/>
      <hr/>
      <main>{children}</main>
      <hr/>
      <footer>&copy; Egg</footer>
    </div>
  );
}

export default Egg;
