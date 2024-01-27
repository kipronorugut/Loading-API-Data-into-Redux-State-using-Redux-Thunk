// mocker-api.config.js
module.exports = {
  "/api/users": (req, res) => {
    // Simulate a delay of 1000 milliseconds (1 second)
    setTimeout(() => {
      const users = {
        GET: [
          {
            id: 1,
            name: "John Doe",
            email: "john@example.com",
          },
          {
            id: 2,
            name: "Jane Doe",
            email: "jane@example.com",
          },
        ],
      };

      res.json(users);
    }, 10000);
  },
};
