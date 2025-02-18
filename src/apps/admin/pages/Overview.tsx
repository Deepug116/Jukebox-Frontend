import React from "react";
import "./../../styles/global.scss"; // Ensure styles are imported

const Overview: React.FC = () => {
  return (
    <div className="admin-overview-container">
      <h1 className="admin-title">Admin Overview</h1>
      
      <div className="stat-cards">
        <div className="stat-card">Stat 1</div>
        <div className="stat-card">Stat 2</div>
        <div className="stat-card">Stat 3</div>
        <div className="stat-card">Stat 4</div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jane Smith</td>
              <td>Inactive</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Overview;
