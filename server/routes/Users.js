const express = require('express');
const router = express.Router();
const { Users } = require("../models");

const {sign} = require('jsonwebtoken');

router.post("/", async (req, res) => {
  const user = req.body;
  await Users.create(user);
  res.json("SUCCESS");
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await Users.findOne({ where: {username: username}});

  if (!user) return res.json({error: "User Doesn't Exist"});

  if (user.password !== password) {
    res.json({error: "Wrong Password"});
  } else {
    const accessToken = sign({username: user.username, id: user.id}, "importantsecret");

    res.json(accessToken);
  }

});

module.exports = router;