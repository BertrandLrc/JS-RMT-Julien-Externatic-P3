// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browseConsultant = async (req, res, next) => {
  try {
    // Fetch all users from the database
    const users = await tables.user.readAllConsultant();

    // Respond with the users in JSON format
    res.json(users);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const browseConsultantMax3 = async (req, res, next) => {
  try {
    // Fetch all users from the database
    const users = await tables.user.readAllConsultant();

    const limitedUsers = users.slice(0, 3);

    // Respond with the selected users in JSON format
    res.json(limitedUsers);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
// const read = async (req, res, next) => {
//   try {
//     // Fetch a specific user from the database based on the provided ID
//     const user = await tables.user.read(req.params.id);

//     // If the user is not found, respond with HTTP 404 (Not Found)
//     // Otherwise, respond with the user in JSON format
//     if (user == null) {
//       res.sendStatus(404);
//     } else {
//       res.json(user);
//     }
//   } catch (err) {
//     // Pass any errors to the error-handling middleware
//     next(err);
//   }
// };

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
// const add = async (req, res, next) => {
//   // Extract the user data from the request body
//   const user = req.body;

//   try {
//     // Insert the user into the database
//     const insertId = await tables.user.create(user);

//     // Respond with HTTP 201 (Created) and the ID of the newly inserted user
//     res.status(201).json({ insertId });
//   } catch (err) {
//     // Pass any errors to the error-handling middleware
//     next(err);
//   }
// };

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browseConsultant,
  browseConsultantMax3,
  // read,
  // edit,
  // add,
  // destroy,
};
