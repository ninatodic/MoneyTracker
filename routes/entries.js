const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Entry = require('../models/Entry');

router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, x-auth-token, X-Requested-With, Content-Type, Accept, *'
  );
  next();
});

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
router.put('/:id', auth, async (req, res) => {
  const { text, amount } = req.body;

  // Build entry object
  const entryFields = {};
  if (text) entryFields.text = text;
  if (amount) entryFields.amount = amount;

  try {
    let entry = await Entry.findById(req.params.id);

    if (!entry) return res.status(404).json({ msg: 'Entry not found' });

    // Make sure user owns entry
    if (entry.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    entry = await Entry.findByIdAndUpdate(
      req.params.id,
      { $set: entryFields },
      { new: true }
    );

    res.json(entry);
  } catch (err) {
    console.error(er.message);
    res.status(500).send('Server Error');
  }
});

//@route    DELETE api/entries/:id
//@desc     Delete entry
//@access   Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let entry = await Entry.findById(req.params.id);

    if (!entry) return res.status(404).json({ msg: 'Entry not found' });

    // Make sure user owns entry
    if (entry.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Entry.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Entry removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
