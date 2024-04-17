import React, { Component } from 'react';
import MessegerUi from "../chapter-1/widgets/MessegersUi";


export default class ChapterOne extends Component {
  render() {
    const backgroundStyle = {
      background: `url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjDLLrTss-YsZXYhJQMbmdJ7BvCyq-SYyOLdrwa-c3_KibKe-9mqjv-G6P1KjkKnde-67jwU8kzyxqq86clFG_oliBVZql6LG-26ObFlXmiv_dZFtERzkHo2R5135QpqfErGSAs2RlmvWIe/s16000/begron-biru.jpg')`, // Menggunakan gradient yang sama dengan Headers
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      color: '#ffffff'
    };

    return (
      <div style={backgroundStyle}>
        <h3>Chapter One: The Beginning</h3>
        <MessegerUi />
      </div>
    );
  }
}