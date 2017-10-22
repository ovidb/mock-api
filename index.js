const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  }),
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/userRoutes')(app);

app.get('/', (req, res) => {
  let adminContent = `
    <div>
      Not Logged in.
      Use <a href="/auth/google">the Authentication Route</a>. You could
      also look at details about <a href="/api/current-user">yourself</a>
    </div>
  `;
  if (req.user) {
    adminContent = `
      <div>
        Logged Int <a href="/admins">the Admins route</a>
        or you can <a href="/api/logout">Logout</a>.
      </div>
    `;
  }
  res.send(`
    <div>
      <h4>MockUp API</h4>
      <div>
        Get USERS <a href="/users">the Users route</a>
      </div>
      ${adminContent}
    </div>
  `);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
