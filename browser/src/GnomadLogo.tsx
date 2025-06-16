import React from 'react'
import RigshospitaletLogo from './640px-Rigshospitalet_logo.svg.png';

const GnomadLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex items-center space-x-4 ${className || ''}`}>  
     {/* Rigshospitalet logo */}
     <div>
        <img
          src={RigshospitaletLogo}
          alt="Rigshospitalet Logo"
          className="w-auto h-auto" // Adjust size as needed
        />       
      </div>
    </div>
  );
};

export default GnomadLogo;
