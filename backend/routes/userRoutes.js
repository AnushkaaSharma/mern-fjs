const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Create a new user
router.post('/add', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a user
router.put('/update/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a user
router.delete('/delete/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: 'User deleted' });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
