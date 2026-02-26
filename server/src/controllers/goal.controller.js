import supabase from "../database/conectionToSupabase.js";

export async function createGoal(req, res) {
    try {
        const { title, description, deadline } = req.body;
        const { data, error } =
            await supabase
                .from('goals')
                .insert([{ title, description, deadline }]);
        if (error)
            res.status(500).json({ error: error.message });
        else
            res.status(201).json({ message: 'Goal inserted successfully' });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export async function getGoals(req, res) {
    try {
        const { data, error } =
            await supabase
                .from('goals')
                .select('*');
        if (error)
            res.status(500).json({ error: error.message });
        else
            res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export async function deleteGoal(req, res) {
    const { id } = req.params;
    try {
        const { data, error } =
            await supabase
                .from('goals')
                .delete()
                .eq('id', id);
        if (error)
            res.status(500).json({ error: error.message });
        else
            res.status(200).json({ message: 'Goal deleted successfully' });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}


export async function updateGoal(req, res) {
    const { id } = req.params;
    const { title, description, deadline } = req.body;
    try {
        const { data, error } =
            await supabase
                .from('goals')
                .update({ title, description, deadline })
                .eq('id', id);
        if (error)
            res.status(500).json({ error: error.message });
        else
            res.status(200).json({ message: 'Goal updated successfully' });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export async function getGoalById(req, res) {
    const { id } = req.params;
    try {
        const { data, error } =
            await supabase
                .from('goals')
                .select('*')
                .eq('id', id)
                .single();
        if (error)
            res.status(500).json({ error: error.message });
        else res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}

