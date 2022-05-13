const express = require("express");
const router = new express.Router();

const MensRanking = require("../models/mens");

router.get('/', (req, res) => {
    res.send("Welcome to the Mens Api");
})

//Will Handle POST request
router.post("/mens", async (req, res) => {
    try {
        const addMen = new MensRanking(req.body)
        const insertMens = await addMen.save()
        res.status(201).send(insertMens);
    } catch (error) {
        res.status(400).send(error)
    }
})

//Will Handle GET request
router.get("/mens", async (req, res) => {
    try {
        const getMens = await MensRanking.find({}).sort({ "ranking": 1 })
        res.send(getMens);
    } catch (error) {
        res.status(400).send(error)
    }
})

//Will Handle GET for Individual request
router.get("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id
        const getMen = await MensRanking.findById({ _id })
        res.send(getMen);
    } catch (error) {
        res.status(400).send(error)
    }
})

//Will Handle PATCH/Update for Individual request
router.patch("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id
        const getMen = await MensRanking.findByIdAndUpdate(_id, req.body, { new: true })
        res.send(getMen);
    } catch (error) {
        res.status(500).send(error)
    }
})

//Will Handle DELETE for Individual request
router.delete("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id
        const deleteMen = await MensRanking.findByIdAndDelete(_id)
        // const getMen = await MensRanking.findByIdAndDelete(req.params.id) // Method 2
        res.send(`Record Deleted:  ${deleteMen}`);
        console.log(id, deleteMen);
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router;