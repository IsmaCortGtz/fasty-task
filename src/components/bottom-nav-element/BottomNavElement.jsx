import "./BottomNavElement.css"

function BottomNavElement({ label, value, Icon, onClick, selected }) {

  return (
    <div onClick={() => onClick(value)} className={`BottomNavElement-container ${selected ? "selected" : ""}`} >
      <Icon className="BottomNavElement-icon" />
      <span className="BottomNavElement-label">{label}</span>
    </div>
  );
}

export default BottomNavElement;