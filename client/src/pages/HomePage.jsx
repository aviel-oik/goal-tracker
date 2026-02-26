import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function HomePage() {

  const [goals, setGoals] = useState([]);
  
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/goals');
        const data = await response.json();
        setGoals(data);
      } 
      catch (error) {
        console.log('Error fetching goals:', error);
      }
    };

    fetchGoals();
  }, []);

    const goToNewGoal = () => {
        navigate('/create-goal');
    }

    const deleteGoal = async (id) => {
      try {
        await fetch(`http://localhost:3000/api/goals/${id}`, {
            method: 'DELETE',
        });
        setGoals(goals.filter(goal => goal.id !== id));
      }
      catch (error) {
        console.log('Error deleting goal:', error);
      }
    }


  return (
    <div className="home-page">
        <h1 className='home-header'>Welcome to the Goal Tracker App!</h1>

        <section className="home-liste-goals">
            {goals.map(goal => (
                <div key={goal.id} className="goal-card">
                <p key={goal.id}>{goal.title}</p>
                <div>
                  <button onClick={() => navigate(`/edit-goal/${goal.id}`)}>Edit</button>
                  <button onClick={() => deleteGoal(goal.id)}>Delete</button>
                </div>
                </div>
                
            ))}
        </section>

        <footer className='home-footer'>
            <p>Copyright © 2024 Goal Tracker App. All rights reserved.</p>
            <button onClick={goToNewGoal}>Create New Goal</button>
        </footer>

    </div>
  )
}

export default HomePage