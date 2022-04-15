const { Router } = require('express');

const Child = require('../models/Child.model');
const User = require('../models/User.model');

const router = Router();

router.get('/', async (req, res) => {
    try {
      const userId = req.user.id;
      const allChildren = await Child.find({ user: userId});
      res.status(200).json(allChildren); 
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})


router.get('/:childId', async (req, res) => {
  const { childId } = req.params;
  try {
      const child = await Child.findById(childId);;
      res.status(200).json(child);
  } catch (error) {
      res.status(500).json({ message: "Error while trying to get a child", error})
  }
})


router.post('/', async (req, res) => {
  try {
    const userId = req.user.id;
    const newChild = await Child.create({ ...req.body, user: userId });
    await User.findByIdAndUpdate(userId, { $push: { children: newChild._id } });
    res.status(200).json(newChild);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})


router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;
  try {
    const updateChild = await Child.findOneAndUpdate( { _id: id, user: userId }, req.body, { new: true } );
    if ( !updateChild ) {
      throw new Error('Cannot update child from another user');
    }
    res.status(200).json(updateChild);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})


router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  try {
    const child = await Child.findById(id);
    if (child.user.toString() !== userId) {
      throw new Error('Cannot delete a child from another user')
    }
    child.delete();
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})



module.exports = router;