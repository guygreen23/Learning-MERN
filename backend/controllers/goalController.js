const asyncHandler = require('express-async-handler')

// @desc   Get goals 
// @route  Get /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get goals'})
})

// @desc   Create a goals
// @route  post /api/goals
// @access Private
const setGoals = asyncHandler(async (req, res) => {
    if (!req.body.text){
        res.status(400)
        throw new Error('Please add a text field.')
    }    
    res.status(200).json({message: 'Set goal'})
})

// @desc   Update a goal 
// @route  put /api/goals/:id
// @access Private
const putGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})

// @desc   Delete a goal
// @route  delete /api/goals/:id
// @access Private
const deleteGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})


module.exports = {
    getGoals,
    setGoals,
    putGoals,
    deleteGoals,

}