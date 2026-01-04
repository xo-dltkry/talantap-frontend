import React from 'react';

const ClubCard = ({ title, day, time, location }) => {
  return (
    <div className="bg-white rounded-2xl p-6">
      <h3 className="font-bold text-slate-800 mb-2">{title}</h3>
      <p className="text-sm text-slate-600">Day: {day}</p>
      <p className="text-sm text-slate-600">Time: {time}</p>
      <p className="text-sm text-slate-600">{location}</p>
    </div>
  );
};

export default ClubCard