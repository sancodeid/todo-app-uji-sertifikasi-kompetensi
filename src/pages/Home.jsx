// import React, { useState } from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/header/Navbar";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="home">
        <div className="main-home-title">
          <h1>Selamat datang di SanNotes.</h1>
        </div>
        <div className="home-title">
          <h1>Make your plan</h1>
          <h4>On your TodoList</h4>
        </div>
        <div className="home-desc">
          <p>
            Tingkatkan produktifitas kamu, rencanakan kegiatan harianmu dengan{" "}
            <b>SanNotes</b>, Ayo mulai sekarang
          </p>
        </div>
        <div className="start-option">
          <button onClick={() => navigate("/login")} className="login-btn">
            Mulai Sekarang
          </button>
          <button
            onClick={() => navigate("/register")}
            className="register-btn"
          >
            Daftar Sekarang
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
