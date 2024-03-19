const events = require('../models/upcom') // Ensure this path is correct

const addEvent = async (req, res) => {
  console.log("add")
  console.log(req.body)
  const { name, date,total, description, category } = req.body;
  try {
    const newevent = new events({
      name,
      category,
      date,
      total,
      description
    });

    await newevent.save();
    res.status(201).json({ message: "Event added successfully", alert: true, completed: newevent });
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
module.exports = { GetUserData, DeleteUserData, UpdateSingleUser, UserDataById,addEvent};
