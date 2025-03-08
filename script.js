const express = require("express");
const app = express();
const connectDb = require("./db");
const User = require("./model/User");

connectDb();
app.use(express.json());

app.post("/add", async (req, res) => {
  try {
    const { name, lastname, email } = req.body;
    const newuser = await new User({ ...req.body });
    newuser.save();
    res.status(201).json({ message: "User added successfully", user: newuser });
  } catch (err) {
    console.error("Error");
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/get", async (req, res) => {
  try {
    const findUser = await User.find();
    res.json({ message: "user fetched", user: findUser });
  } catch (err) {
    console.error("Error");
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.put("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User updated successfully", user: updatedUser });
    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

app.listen(3000, () => console.log("app running"));
