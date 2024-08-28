const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.static(`${__dirname}`));
app.use(
  cors({
    origin: '*',
  })
);

const homeRouter = require('./routers/homeRouter');
const aboutRouter = require('./routers/aboutRouter');
const skillsRouter = require('./routers/skillsRouter');
const worksRouter = require('./routers/worksRouter');
const messagesRouter = require('./routers/messagesRouter');
const authRouter = require('./routers/authRouter');
const worksCategoriesRouter = require('./routers/worksCategoryRouter');

app.use('/api/v1/home', homeRouter);
app.use('/api/v1/about', aboutRouter);
app.use('/api/v1/skills', skillsRouter);
app.use('/api/v1/works', worksRouter);
app.use('/api/v1/messages', messagesRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/workscategories', worksCategoriesRouter);

module.exports = app;
