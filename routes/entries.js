const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Entry = require('../models/Entry');

//@route    GET api/entries
//@desc     Get entries of a user
//@access   Private
router.get('/', auth, async (req, res) => {
  try {
    const entries = await Entry.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(entries);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('server error');
  }
});

//@route    POST api/entries
//@desc     Add new entry
//@access   Private
router.post(
  '/',
  [
    auth,
    [
      check('text', 'Please add description').not().isEmpty(),
      check('amount', 'Please add amount').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { text, amount } = req.body;

    try {
      const newEntry = new Entry({
        text,
        amount,
        user: req.user.id,
      });

      const entry = await newEntry.save();

      res.json(entry);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('server error');
    }
  }
);

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
