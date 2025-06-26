
import './cards.css'



export const ColorCard = ({ name, bg, onClick, selected }) => {
  
  
  
    
  
    return (
      <div
        className={`Color-card ${selected ? 'selected' : ''}`}
        onClick={onClick}
        style={{
          backgroundColor: bg
         
         
        }}
      >
        <h2 className="Color-titulo">{name}</h2>
      </div>
    );
  };
  