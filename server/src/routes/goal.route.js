import { Router } from "express";
import { createGoal, getGoals, deleteGoal, updateGoal, getGoalById } from "../controllers/goal.controller.js";

const router = Router();

router.post('/goals', createGoal);
router.get('/goals', getGoals);
router.delete('/goals/:id', deleteGoal);
router.put('/goals/:id', updateGoal);
router.get('/goals/:id', getGoalById);

export default router;