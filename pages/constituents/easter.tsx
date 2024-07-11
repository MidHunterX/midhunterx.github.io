import React, { ReactNode } from 'react';

function Heading() {
  return (
    <header>A free egg for you</header>
  );
}

interface EggProps {
  children: ReactNode;
}

const Egg: React.FC<EggProps> = ({ children }) => {
  return (
    <div>
      <Heading/>
      <hr/>
      <main>{children}</main>
      <hr/>
      <footer>&copy; Egg</footer>
    </div>
  );
};

export default Egg;
