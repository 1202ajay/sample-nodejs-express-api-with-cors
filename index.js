import express from 'express';
import cors from 'cors';
// const express = require('express');
const app = express();
import users from './users.json';

app.use(cors());
app.get("/users", (req,res) => {
    // console.log('hi', users);
    res.json(users);
});

app.listen(4000, () => { console.log('port running on 4000'); });