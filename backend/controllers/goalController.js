const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')

// @desc   Get goals 
// @route  Get /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()
    res.status(200).json(goals)
})

// @desc   Create a goals
// @route  post /api/goals
// @access Private
const setGoals = asyncHandler(async (req, res) => {
    if (!req.body.text){
        res.status(400)
        throw new Error('Please add a text field.')
    }    

    const goal = await Goal.create({
       text: req.body.text 
    })
    res.status(200).json(goal)
})

// @desc   Update a goal 
// @route  put /api/goals/:id
// @access Private
const putGoals = asyncHandler(async (req, res) => {
    const id = req.params.id
    const goal = await Goal.findById(id)
    if (!goal){
        res.status(400)
        throw new Error('Goal not found')
    }
    const updatedGoal = await Goal.findByIdAndUpdate(id, req.body ,{new: true})

    res.status(200).json(updatedGoal)
})

// @desc   Delete a goal
// @route  delete /api/goals/:id
// @access Private
const deleteGoals = asyncHandler(async (req, res) => {
    const id = req.params.id
    const goal = await Goal.findById(id)
    if (!goal){
        res.status(400)
        throw new Error('Goal not found')
    }
    await goal.deleteOne()

    res.status(200).json({id: id})
})


module.exports = {
    getGoals,
    setGoals,
    putGoals,
    deleteGoals,

}