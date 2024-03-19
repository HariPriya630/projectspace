// // Assuming productModel is your Event model
// const events = require('../models/past_events');

// const event = async (req, res) => {
//   const { name,image,date,description,category} = req.body;
//   try {
//     const existingUser = await events.findOne({ email: email });
//     if (existingUser) {
//       return res.status(400).json({ message: "Employ already existed", alert: false });
//     }

//     const newevent = new events({
//       name,
//       category,
//       image,
//       date,
//       last,
//       number,
//       description
//     });

//     await newevent.save();
//     res.status(201).json({ message: "employ added successfully", alert: true, user: newevent });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Error adding employ", alert: false });
//   }
// };

// const GetUserData = async (req, res) => {
//   try {
//     const users = await events.find();
//     if (!users.length) {
//       return res.status(404).json({ message: "No Users Found." });
//     }
//     res.status(200).json({ users });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "Error fetching users" });
//   }
// };


// const UserDataById = async (req, res) => {
//   const _id = req.params.id;
//   try {
//     const user = await events.findById(_id);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     res.status(200).json({ msg: "Successfully fetched single data", user });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Error fetching user data" });
//   }
// };

// const UpdateSingleUser = async (req, res) => {
//   const _id = req.params.id;
//   try {
//     const updatedUser = await events.findByIdAndUpdate(_id, req.body, { new: true });
//     if (!updatedUser) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     res.status(200).json({ message: "User updated successfully", user: updatedUser });
//   } catch (er) {
//     console.log(er);
//     res.status(500).json({ message: "Error updating user" });
//   }
// };

// const DeleteUserData = async (req, res) => {
//   const id = req.params.id;
//   try {
//     const deletedUser = await events.findByIdAndDelete(id);
//     if (!deletedUser) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     res.status(200).json({ message: "User data deleted successfully" });
//   } catch (er) {
//     console.log(er);
//     res.status(500).json({ message: "Error deleting user data" });
//   }
// };

// module.exports = { GetUserData, DeleteUserData, UpdateSingleUser, UserDataById, event };
const events = require('../models/past_events'); // Ensure this path is correct

const event = async (req, res) => {
  const { name, date,last,total, description, category } = req.body;

  const image=(req.file)? req.file.filename:null;

  try {

    const newevent = new events({
      name,
      category,
      image, 
      date,
      last,
      total,
      description
    });

    await newevent.save();
    res.status(201).json({ message: "Event added successfully", alert: true, event: newevent });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error adding event", alert: false });
  }
};

const GetUserData = async (req, res) => {
  try {
    const users = await events.find();
    if (!users.length) {
      return res.status(404).json({ message: "No Users Found." });
    }
    res.status(200).json({ users });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error fetching users" });
  }
};


const UserDataById = async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await events.findById(_id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ msg: "Successfully fetched single data", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching user data" });
  }
};

const UpdateSingleUser = async (req, res) => {
  const _id = req.params.id;
  try {
    const updatedUser = await events.findByIdAndUpdate(_id, req.body, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User updated successfully", user: updatedUser });
  } catch (er) {
    console.log(er);
    res.status(500).json({ message: "Error updating user" });
  }
};

const DeleteUserData = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedUser = await events.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User data deleted successfully" });
  } catch (er) {
    console.log(er);
    res.status(500).json({ message: "Error deleting user data" });
  }
};


module.exports = { GetUserData, DeleteUserData, UpdateSingleUser, UserDataById, event };
