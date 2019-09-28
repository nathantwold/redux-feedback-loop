const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// POST feedback entry to database
router.post('/', (req, res) => {
    let newFeedback = req.body;
    console.log('Adding feedback', newFeedback);
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                     VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [newFeedback[0], newFeedback[1], newFeedback[2], newFeedback[3]]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error adding new entry', error);
        res.sendStatus(500);
    })
});

// GET call to database to populate history on admin page
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "feedback";`;
    pool.query(queryText).then(result => {
        res.send(result.rows);
    }).catch((error) => {
        res.sendStatus(500);
    })
})

module.exports = router;