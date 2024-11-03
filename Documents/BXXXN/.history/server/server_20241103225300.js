// Example POST request
app.post('/api/users', async (req, res) => {
  try {
    const { data } = req.body;
    const response = await axios.post('https://api.example.com/users', data);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error posting data' });
  }
});

// Example PUT request
app.put('/api/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = req.body;
    const response = await axios.put(`https://api.example.com/users/${id}`, data);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating data' });
  }
});

// Example DELETE request
app.delete('/api/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await axios.delete(`https://api.example.com/users/${id}`);
    res.json({ message: 'User deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting user' });
  }
});
