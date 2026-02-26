import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function EditGoal() {

    const { id } = useParams();

    const [goal, setGoal] = useState(null);

        const [title, setTitle] = useState('');
        const [description, setDescription] = useState('');
        const [deadline, setDeadline] = useState('');


    useEffect(() => {
        const fetchGoal = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/goals/${id}`);
                const data = await response.json();
                setGoal(data);
            } catch (error) {
                console.error('Error fetching goal:', error);
            }
        };

        fetchGoal();
    }, []);


    const updateGoal = async () => {
      console.log('Updating goal with id:', id);
        try{
            const reponse = await fetch(`http://localhost:3000/api/goals/${id}`, {
            method: 'PUT',
            headers: {  
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, description, deadline }),
          });
          if (reponse.ok) 
            alert('Goal updated successfully!');
          else           
            alert('Failed to update goal.');
        } 
        catch (error) {
          console.log('Error updating goal:', error);
        }
    }

  return (
    <div className="edit-goal">
        <section className='header'>
          <Link to="/">Back to Goals</Link>
            <h1>Edit Goal</h1>
        </section>
        {goal && (
            <form className="edit-goal-form">
                <input type="text" defaultValue={goal.title} onChange={(e) => setTitle(e.target.value)} />
                <textarea defaultValue={goal.description} onChange={(e) => setDescription(e.target.value)} />
                <input type="date" defaultValue={goal.deadline} onChange={(e) => setDeadline(e.target.value)} />
                <button onClick={() => updateGoal()}>Update Goal</button>
            </form>
        )}
    </div>
  )
}

export default EditGoal