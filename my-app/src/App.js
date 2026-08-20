//import React from 'react';
//import Header from './components/Header';
//import MovieList from './components/MovieList';
//import Footer from './components/Footer';
import Greeting from './components/Greeting';
import ProfileCard from './components/ProfileCard';
const members = [
  { id: 670710319, name: 'ณัฐพิฌา อั้งจุดพันธ์', nickname: 'วายา',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['หมา', 'ห้องน้ำ'] },
  { id: 670710722, name: 'ธัญลักษณ์ มาสถิตทรัพย์', nickname: 'นีน่า',
  major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาไทย', 'ชาเขียว'] },
  { id: 3, name: 'สมทรง ', nickname: 'วาเย',
  major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเขียว', 'หมา'] }
  // 👉 เพิ่มสมาชิกคนอื่น ๆ ของกลุ่มที่นี่
];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}
export default App;