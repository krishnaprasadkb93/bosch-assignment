import React from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import UserState from "./context/UserState";
import Navigation from "./components/Navigation";
function App() {
  return (
    <UserState>
      <div>
        <aside className='navigation-wrapper'>
          <Navigation />
        </aside>
        <main className='site-main'>
          <Header />
          <div className='container'>
            <Body />
          </div>
        </main>
      </div>
    </UserState>
  );
}

export default App;
