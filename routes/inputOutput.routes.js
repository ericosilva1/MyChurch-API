const { Router } = require('express');

const Room = require('../models/Room.model');

const router = Router();

router.put('/:childId/:roomId', async (req, res) => {
    const { childId, roomId } = req.params;

    try {
        const room = await Room.findById(roomId);
        const childrenRoom = room.children;

        const checkChild = childrenRoom.filter(child => child == childId);
    
        if (checkChild.length === 0) {
            await Room.findByIdAndUpdate( roomId, { $push: {children: childId}});
            return res.status(200).json({message: 'Chekin sucessful'})
        } else {
            await Room.findByIdAndUpdate( roomId, { $pull: {children: childId}})
            return  res.status(200).json({message: 'Chekout sucessful'})
        }
        
    } catch (error) {
        res.status(500).json({message: "Error while trying to checkIn or CheckOut", error})
    }
})


module.exports = router;