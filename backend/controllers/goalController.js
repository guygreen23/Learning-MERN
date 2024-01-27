// @desc   Get goals 
// @route  Get /api/goals
// @access Private
const getGoals = (req, res) => {
    res.status(200).json({message: 'Get goals'})
}

// @desc   Create a goals
// @route  post /api/goals
// @access Private
const setGoals = (req, res) => {
    res.status(200).json({message: 'Create a goal'})
}

// @desc   Update a goal 
// @route  put /api/goals/:id
// @access Private
const putGoals = (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
}

// @desc   Delete a goal
// @route  delete /api/goals/:id
// @access Private
const deleteGoals = (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
}


module.exports = {
    getGoals,
    setGoals,
    putGoals,
    deleteGoals,

}