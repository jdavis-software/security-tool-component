import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Node.js Starter</title>
        <style>
          body {
            font-family: system-ui, -apple-system, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
            line-height: 1.6;
            transition: all 0.3s ease;
          }
          .container {
            background: #f5f5f5;
            border-radius: 8px;
            padding: 2rem;
            margin-top: 2rem;
          }
          .nav {
            display: flex;
            gap: 1rem;
            margin-bottom: 2rem;
          }
          .nav a {
            padding: 0.5rem 1rem;
            background: #e0e0e0;
            border-radius: 4px;
            text-decoration: none;
            color: #333;
          }
          .theme-toggle {
            padding: 0.5rem 1rem;
            background: #e0e0e0;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
          .dark-mode {
            background: #121212;
            color: #fff;
          }
          .dark-mode .container {
            background: #1e1e1e;
          }
          .dark-mode .nav a,
          .dark-mode .theme-toggle {
            background: #333;
            color: #fff;
          }
        </style>
        <script>
          function toggleTheme() {
            document.body.classList.toggle('dark-mode');
          }
        </script>
      </head>
      <body>
        <nav class="nav">
          <a href="/">Research</a>
          <a href="/hunt">Hunt</a>
          <button class="theme-toggle" onclick="toggleTheme()">Toggle Theme</button>
        </nav>
        <h1>Welcome to Node.js</h1>
        <div class="container">
          <h2>Server Information</h2>
          <p>Node.js server is running!</p>
          <p>Time: ${new Date().toLocaleString()}</p>
        </div>
      </body>
    </html>
  `);
});

app.get('/hunt', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Hunt - Node.js Starter</title>
        <style>
          body {
            font-family: system-ui, -apple-system, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
            line-height: 1.6;
            transition: all 0.3s ease;
          }
          .container {
            background: #f5f5f5;
            border-radius: 8px;
            padding: 2rem;
            margin-top: 2rem;
          }
          .nav {
            display: flex;
            gap: 1rem;
            margin-bottom: 2rem;
          }
          .nav a {
            padding: 0.5rem 1rem;
            background: #e0e0e0;
            border-radius: 4px;
            text-decoration: none;
            color: #333;
          }
          .theme-toggle {
            padding: 0.5rem 1rem;
            background: #e0e0e0;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
          .dark-mode {
            background: #121212;
            color: #fff;
          }
          .dark-mode .container {
            background: #1e1e1e;
          }
          .dark-mode .nav a,
          .dark-mode .theme-toggle {
            background: #333;
            color: #fff;
          }
        </style>
        <script>
          function toggleTheme() {
            document.body.classList.toggle('dark-mode');
          }
        </script>
      </head>
      <body>
        <nav class="nav">
          <a href="/">Research</a>
          <a href="/hunt">Hunt</a>
          <button class="theme-toggle" onclick="toggleTheme()">Toggle Theme</button>
        </nav>
        <h1>Hunt Page</h1>
        <div class="container">
          <h2>Hunt Information</h2>
          <p>This is the hunt page of our Node.js application.</p>
        </div>
      </body>
    </html>
  `);
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});