const app = require('./app');
const port = process.env.PORT || 2000;
const Database = require('./config/db.js');

// Initialize database
Database.read();

// Run on all interfaces for Pterodactyl
app.listen(port, '0.0.0.0', () => {
  console.log(`Apophis Backend running on port ${port}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`Backend URL: ${process.env.BACKEND_URL || 'http://localhost:' + port}`);
});