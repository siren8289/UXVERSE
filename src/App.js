import './App.css';
import React from "react";

//import './global.css'; // ✅ 여기에 추가!

import Header0 from './components/Header0/Header0';
import Header1 from './components/Header1/Header1';
import Footer from './components/Footer/Footer';
import Search from './components/Search/Search';
import Button0 from './components/Button0/Button0';
import Button1 from  './components/Button1/Button1';


function App() {
  return (
    <div style={{ paddingBottom: '64px' }}>
      <Header0 />
      <Header1 />
      
      {/* 메인 콘텐츠 자리에 Search, Buttons 넣기 */}
      <Search />
      
      <Button0 />
      <Button1 />

      <Footer />
      {/* <Header0 />
      <Header1 /> */}

      {/* 메인 콘텐츠가 들어올 수 있음*/}

      {/* <Footer /> */}
      {/* <Search /> */}
    </div>
  );
}

export default App;
