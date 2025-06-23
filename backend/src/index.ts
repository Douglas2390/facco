app.get('/api/status', (req, res) => {
  res.json({ status: 'online' });
});
