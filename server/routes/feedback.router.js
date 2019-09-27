const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    let newFeedback = req.body;
    console.log('Adding feedback', newFeedback);
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                     VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [newFeedback[0], newFeedback[1], newFeedback[2], newFeedback[3]]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error adding new task', error);
        res.sendStatus(500);
    })
});

module.exports = router;