const express = require("express");
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const cookieParser = require('cookie-parser');
const credentials = require('./middleware/credentials');

const app = express();
const PORT = process.env.PORT || 8087;


// handle options credentals check before CORS
// and fetch cookies credentials requirement
app.use(credentials);

// cors
app.use(cors(corsOptions));

// middleware for json objects
app.use(express.json());

// middleware for cookies
app.use(cookieParser());

// routes for members
app.use('/api/members', require('./routes/api/members'));

// error handler
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`server started on PORT ${PORT}...`);
});
