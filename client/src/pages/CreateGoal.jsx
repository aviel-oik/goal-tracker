import React from 'react'
import { Link } from 'react-router-dom';

function CreateGoal() {

    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [deadline, setDeadline] = React.useState('');

    const CreateGoal = async (title, description, deadline) => {
        try {
            const response = await fetch('http://localhost:3000/api/goals', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, description, deadline }),
            });
            if (response.ok) {
                alert('Goal created successfully!');
                setTitle('');
                setDescription('');
                setDeadline('');
            } else {
                alert('Failed to create goal.');
            }
        } catch (error) {
            console.log('Error creating goal:', error);
        }
    }
    
    
  return (
    <div className="create-goal">
        <section className='create-goal-header'>
          <Link to="/">↩️</Link> 
          <h1>Create a New Goal</h1>
        </section>

        <form className="create-goal-form">
            <input type="text" id="title" name="title" placeholder='Title...' value={title} onChange={(e) => setTitle(e.target.value)} required />
            <textarea id="description" name="description" placeholder='Description...' value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
            <div>
                <label htmlFor="deadline">Deadline:</label>
                <input type="date" id="deadline" name="deadline" value={deadline} onChange={(e) => setDeadline(e.target.value)} required />
            </div>           
            <button type="submit" onClick={() => CreateGoal(title, description, deadline)}>Create Goal</button>
        </form>
    </div>
  )
}

export default CreateGoal