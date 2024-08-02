import React from 'react';
import './Sidebar.css';

interface SidebarProps {
  className?: string;
}

const VerticalRectangle: React.FC<SidebarProps> = ({ className }) => {
  return (
    <div className={`rectangle ${className}`}>
      <div className="upperStuff">
        <div className="motus">Motus</div>
        <button className="item">Ubericht</button>
        <button className="item">Patienten</button>
        <button className="item">Gebrechlichkeit</button>
        <button className="item">Erweiterte</button>
        <button className="item">Energiebedarf</button>
        <button className="item">Kinische Literatur</button>
        <button className="item">Abmelden</button>
      </div>
      <div className="lowerStuff">
        <div className="blueButton">
          Patient Onboarding
          <div className="blueButton-text">
            Erwietern Sie Ihr
            Pflegenetzwerk, 
            indem Sie sich 
            mit einem Patientenkonto 
            verbinden.
          </div>
          <div className="orangeButton">Patient hinzufügen</div>
        </div>
      </div>
    </div>
  );
};

export default VerticalRectangle;

