require('dotenv').config()
const PORT = process.env.PORT || 4000
const express = require('express');
const usersRoutes = require('./routes/users.js');
const app = express();
const middlewareLogRequest = require('./middleware/logs.js');

app.use(middlewareLogRequest);
app.use(express.json());
app.use('/users', usersRoutes);

app.listen(PORT, () => {
    console.log('server berhasil dijalankan di ${PORT)');
});
