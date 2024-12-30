import React from 'react';
// import './CalorieCalculator.css'; // Assume you use CSS for styling

const CalorieCalculator = () => {
  return (
    <div className="calorie-calculator">
      <aside className="sidebar">
        <h2>Calories Account</h2>
        <nav>
          <ul>
            <li className="active">Norm</li>
            <li>Eating</li>
            <li>Water</li>
            <li>Statistics</li>
          </ul>
        </nav>
        <div className="settings">Settings</div>
      </aside>
      <main className="main-content">
        <header className="header">
          <h1>Calculating daily calorie intake</h1>
          <div className="user-info">Carol Smith</div>
        </header>
        <section className="calculation-section">
          <div className="parameters">
            <h3>Parameter</h3>
            <form>
              <div className="form-group">
                <label>Age</label>
                <input type="number" defaultValue={24} />
              </div>
              <div className="form-group">
                <label>Weight</label>
                <input type="number" defaultValue={50} />
              </div>
              <div className="form-group">
                <label>Height</label>
                <input type="number" defaultValue={164} />
              </div>
              <h3>Target</h3>
              <div className="target-options">
                <button type="button" className="active">Slimming</button>
                <button type="button">Maintaining</button>
                <button type="button">Mass</button>
              </div>
              <button type="submit" className="calculate-btn">Calculate</button>
            </form>
          </div>
          <div className="daily-rate">
            <h3>Daily rate</h3>
            <p>For weight loss in a safe mode, the norm should be</p>
            <ul>
              <li>Proteins: 73g</li>
              <li>Fats: 32g</li>
              <li>Carbs: 147g</li>
            </ul>
            <div className="calories">
              <h4>1457</h4>
              <p>Kcal</p>
            </div>
          </div>
          <div className="additional-calculation">
            <h3>Additional calculation</h3>
            <form>
              <div className="form-group">
                <label>Waist</label>
                <input type="number" defaultValue={60} />
              </div>
              <div className="form-group">
                <label>Hips</label>
                <input type="number" defaultValue={90} />
              </div>
              <div className="form-group">
                <label>Neck</label>
                <input type="number" defaultValue={24} />
              </div>
              <button type="submit" className="calculate-btn">Calculate</button>
            </form>
            <div className="body-fat">
              <h4>Body fat</h4>
              <p>Approximate percentage</p>
              <div className="progress">
                <div className="progress-bar" style={{ width: '23%' }}></div>
              </div>
              <p>Good: 23% - 25%</p>
            </div>
            <div className="water-rate">
              <h4>Water rate</h4>
              <p>Daily water intake</p>
              <h4>1240ml</h4>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CalorieCalculator;
