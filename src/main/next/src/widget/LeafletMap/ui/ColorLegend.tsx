


const ColorLegend = () => {
  return (
    <div className="color-line">
       <span className="body-2 color-line__title">Доступность</span>
       
       <div className="color-line__container">
      
       <div className="color-line__grade-labels">
       
        <span>100</span>
        <span>80</span>
        
        <span>60</span>
        <span>40</span>
        <span>20</span>
   
   
        
      </div>
      <div>
      <span className="small-1">Хорошая</span>
      <div className="color-line__bar"> </div>
      <span className="small-1">Плохая</span>
      </div>
      <div className="color-line__grade-labels">
       
        <span>A</span>
        <span>B</span>
        
        <span>C</span>
        <span>D</span>
        <span>F</span>
        
      
   
        
      </div>
      </div>
    </div>
  );
};



export default ColorLegend;
