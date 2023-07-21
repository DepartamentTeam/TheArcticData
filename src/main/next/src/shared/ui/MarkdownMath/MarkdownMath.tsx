'use client'
import React, { useEffect } from 'react';


export const MathJaxFormula = ({ formula }) => {
    useEffect(() => {
        // Загружаем скрипт MathJax после монтирования компонента
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.onload = () => {
          // После загрузки скрипта, перерендериваем формулу с помощью MathJax
          window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub]);
        };
        script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
        document.body.appendChild(script);
    
        return () => {
          // Удаляем скрипт MathJax при размонтировании компонента
          document.body.removeChild(script);
        };
      }, []);
    
      return (
        <div>
          {/* Используйте класс .tex для обрамления формулы в LaTeX-подобный синтаксис */}
          <span >{formula}</span>
        </div>
      );
  };