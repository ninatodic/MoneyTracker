const express = require('express');
const router = express.Router();

//@route    GET api/entries
//@desc     Get entries of a user
//@access   Private
router.get('/', (req, res) => {
  res.send('Get entries of a user');
});

//@route    POST api/entries
//@desc     Add new entry
//@access   Private
router.post('/', (req, res) => {
  res.send('Add new entry');
});

//@route    PUT api/entries/:id
//@desc     Edit user entry
//@access   Private
router.put('/', (req, res) => {
  res.send('Edit an entry');
});

//@route    DELETE api/entries/:id
//@desc     Delete entry
//@access   Private
router.delete('/', (req, res) => {
  res.send('Delete an entry');
});

module.exports = router;
