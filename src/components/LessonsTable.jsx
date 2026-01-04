import React from 'react';

const LessonsTable = ({ lessons }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden">
      <table className="w-full">
        <thead className="bg-slate-600 text-white">
          <tr>
            <th className="py-3 px-4 text-left">Child</th>
            <th className="py-3 px-4 text-left">Class</th>
            <th className="py-3 px-4 text-left">Starting</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {lessons.map((lesson, idx) => (
            <tr key={idx}>
              <td className="py-3 px-4">{lesson.child}</td>
              <td className="py-3 px-4">{lesson.class}</td>
              <td className="py-3 px-4">{lesson.starting}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LessonsTable