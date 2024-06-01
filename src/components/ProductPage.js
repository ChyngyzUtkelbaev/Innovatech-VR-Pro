import React from 'react';
import vrImage from '../assets/vrImage.jpg'; // Добавьте реальный путь к изображению
import vrImagePro from '../assets/vrImagePro.jpg'; // Добавьте реальный путь к изображению
import vrImageLite from '../assets/vrImageLite.jpg'; // Добавьте реальный путь к изображению
import avatar from '../assets/avatar.jpg'; // Добавьте реальный путь к аватару

function ProductPage() {
  return (
    <div className="product-page">
      <div className="top-container">
        <div className="info-box">
          <h1 className="header">Innovatech VR Pro</h1>
          <p className="info-text">
            Innovatech VR Pro предлагает самые современные возможности виртуальной реальности.
            Окунитесь в мир новых ощущений и возможностей с нашим последним продуктом.
          </p>
          <div className="info-buttons">
            <button className="info-btn selected" onClick={() => window.location.href='/order'}>Предварительный заказ</button>
          </div>
        </div>
        <div className="nft-box">
          <img src={vrImage} alt="Innovatech VR Pro" className="nft-pic" />
          <div className="nft-content">
            <div className="info">
              <img src={avatar} alt="User" className="info-img" />
              <span>Innovatech</span>
            </div>
            <div className="likes">
              <div className="icon-box">💖 100</div>
            </div>
          </div>
        </div>
      </div>
      <div className="other-products">
        <h2 className="section-header">Другие модели</h2>
        <div className="product-container">
          <div className="product-item">
            <img src={vrImageLite} alt="Innovatech VR Lite" className="product-pic" />
            <h3 className="product-header">Innovatech VR Lite</h3>
            <p className="product-info">
              Innovatech VR Lite предлагает высокое качество виртуальной реальности по доступной цене.
              Отличный выбор для новичков в мире VR.
            </p>
            <button className="info-btn" onClick={() => window.location.href='/order'}>Предварительный заказ</button>
          </div>
          <div className="product-item">
            <img src={vrImagePro} alt="Innovatech VR Pro" className="product-pic" />
            <h3 className="product-header">Innovatech VR Pro</h3>
            <p className="product-info">
              Innovatech VR Pro обеспечивает высокое качество изображения и полный контроль погружения,
              идеально подходящий для продвинутых пользователей.
            </p>
            <button className="info-btn" onClick={() => window.location.href='/order'}>Предварительный заказ</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
