const express = require('express');
const router = express.Router();
const {getRental,getRentalById,createRental} = require('../controllers/rentals');
router.get('',getRental);
router.get('/:rental_id',getRentalById)

router.post('',createRental);
/*

router.delete('/:rental_id',deleteRental);

router.patch('/:rental_id',updateRental)
*/
module.exports = router;
