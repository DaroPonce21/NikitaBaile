import React from 'react';
import './Schedule.css';

const Schedule = () => {
  return (
    <section className="schedule" id="schedule">
      <div className="schedule-container">
        
        <div className="schedule-header">
          <div className="header-text">
            <h2 className="schedule-title">Weekly Schedule</h2>
            <p className="schedule-subtitle">Find the perfect time to elevate your skills.</p>
          </div>
          
          <div className="schedule-legend">
            <span className="badge bg-beginner">Beginner</span>
            <span className="badge bg-intermediate">Intermediate</span>
            <span className="badge bg-advanced">Advanced</span>
          </div>
        </div>

        <div className="table-wrapper glass-card">
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Time</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
              </tr>
            </thead>
            <tbody>
              {/* Row 17:00 */}
              <tr>
                <td className="time-cell">17:00</td>
                <td>
                  <div className="class-box beginner">
                    <span className="class-name">Urban Foundations</span>
                    <span className="class-level">Beginner</span>
                  </div>
                </td>
                <td className="empty-cell">---</td>
                <td>
                  <div className="class-box beginner">
                    <span className="class-name">Urban Foundations</span>
                    <span className="class-level">Beginner</span>
                  </div>
                </td>
                <td className="empty-cell">---</td>
                <td>
                  <div className="class-box beginner">
                    <span className="class-name">Open Session</span>
                    <span className="class-level">All Levels</span>
                  </div>
                </td>
              </tr>

              {/* Row 18:30 */}
              <tr>
                <td className="time-cell">18:30</td>
                <td>
                  <div className="class-box intermediate">
                    <span className="class-name">Salsa Social</span>
                    <span className="class-level">Intermediate</span>
                  </div>
                </td>
                <td>
                  <div className="class-box beginner">
                    <span className="class-name">Ballet I</span>
                    <span className="class-level">Beginner</span>
                  </div>
                </td>
                <td>
                  <div className="class-box intermediate">
                    <span className="class-name">Salsa Social</span>
                    <span className="class-level">Intermediate</span>
                  </div>
                </td>
                <td>
                  <div className="class-box beginner">
                    <span className="class-name">Ballet I</span>
                    <span className="class-level">Beginner</span>
                  </div>
                </td>
                <td className="empty-cell">---</td>
              </tr>

              {/* Row 20:00 */}
              <tr>
                <td className="time-cell">20:00</td>
                <td className="empty-cell">---</td>
                <td>
                  <div className="class-box advanced">
                    <span className="class-name">Urban Pro</span>
                    <span className="class-level">Advanced</span>
                  </div>
                </td>
                <td className="empty-cell">---</td>
                <td>
                  <div className="class-box advanced">
                    <span className="class-name">Urban Pro</span>
                    <span className="class-level">Advanced</span>
                  </div>
                </td>
                <td>
                  <div className="class-box intermediate">
                    <span className="class-name">Bachata Flow</span>
                    <span className="class-level">Intermediate</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Schedule;