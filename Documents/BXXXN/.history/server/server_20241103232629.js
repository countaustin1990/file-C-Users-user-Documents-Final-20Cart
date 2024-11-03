// server.js
const express = require('express');
const cors = require('cors'); // Enable CORS if your frontend and backend are on different origins
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Middleware to enable CORS
//app.use(express.json()); // Middleware to parse JSON data

// Mock data for services (this could come from a database in a real application)
const services = [
  { id: 1, title: "Custom Tailoring", description: "Book for designs tailored to fit you perfectly.", imageUrl: "/path/to/image1.jpg" },
  { id: 2, title: "Styling Consultation", description: "Meet with our fashion experts for the best trend for you.", imageUrl: "/path/to/image2.jpg" },
  { id: 3, title: "Season Collections", description: "Explore our vast collections of class and quality.", imageUrl: "/path/to/image3.jpg" },
  // Add more services as needed
];

// Define the route to get the services data
app.get('/api/services', (req, res) => {
  res.json(services); // Send the services data as JSON
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
