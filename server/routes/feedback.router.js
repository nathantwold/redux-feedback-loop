const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// DELETE call to database to remove an entry
router.delete('/:id', (req, res) => {
    let queryText = `DELETE FROM "feedback" WHERE "id" = $1;`;
    pool.query(queryText, [req.params.id]).then(() => {
        res.sendStatus(200);
    }).catch((error) => {
        res.sendStatus(500);
    });
})

// GET call to database to populate history on admin page
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "feedback" ORDER BY "date" DESC;`;
    pool.query(queryText).then(result => {
        res.send(result.rows);
    }).catch((error) => {
        res.sendStatus(500);
    });
})

// PUT call to database to toggle flag
router.put('/:flagged/:id', (req, res) => {
    if (req.params.flagged === 'true') {
        let queryText = `UPDATE "feedback" SET "flagged" = 'false' WHERE "id" = $1;`;
        pool.query(queryText, [req.params.id]).then(result => {
            res.sendStatus(200);
        }).catch((error) => {
            res.sendStatus(500, error);
        });
    } else {
        let queryText = `UPDATE "feedback" SET "flagged" = 'true' WHERE "id" = $1;`;
        pool.query(queryText, [req.params.id]).then(result => {
            res.sendStatus(200);
        }).catch((error) => {
            res.sendStatus(500, error);
        });
    }
})

// POST feedback entry to database
router.post('/', (req, res) => {
    let newFeedback = req.body;
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                     VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments]
    ).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        res.sendStatus(500);
    });
})

module.exports = router;