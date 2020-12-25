import React, { useState } from 'react';

interface HeaderProps {
  list: string[];
  increase(): void;
  decrease(): void;
}

const Header: React.FC<HeaderProps> = (props) => {
  const [title, setTitle] = useState<string>('');
  return (
    <div>
      <button onClick={props.increase}>+</button>
      <button onClick={props.decrease}>-</button>
      <span>{title}</span> 
      {props.list.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </div>
  );
};

export default Header;
