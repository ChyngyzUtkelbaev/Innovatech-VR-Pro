import React from 'react';

function NewsFeed() {
  const newsItems = [
    { date: '2024-05-01', content: 'Запуск Innovatech VR Pro в Европе!' },
    { date: '2024-06-15', content: 'Новая функция: Поддержка 4K!' },
    { date: '2024-07-20', content: 'Предварительные заказы превысили 100,000!' },
  ];

  return (
    <div className="news-feed">
      <h2>Последние новости</h2>
      <ul>
        {newsItems.map((item, index) => (
          <li key={index}>
            <span className="date">{item.date}</span>
            <p className="content">{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsFeed;
