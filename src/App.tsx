import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import testStore from './stores/test';
import { observer } from 'mobx-react-lite';

const App: React.FC = observer(() => {
  const list: Array<string> = ['One', 'Two', 'Three'];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header
          decrease={testStore.decrease}
          increase={testStore.increase}
          list={list}
        />
      </header>
    </div>
  );
});

export default App;
