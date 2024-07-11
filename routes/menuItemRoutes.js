const express = require("express");
const router = express.Router();
const MenuItem = require("../models/MenuItem");

router.post("/", async (req, res) => {
  try {
    const menuData = req.body;

    const newMenu = new MenuItem(menuData);

    const response = await newMenu.save();
    console.log("Menu saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const menuData = await MenuItem.find();
    console.log("Data Fetched");
    res.status(200).json(menuData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});




module.exports = router;