import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const app = express();

app.use(cors());
app.use(express.json());

// 🔌 Conectar MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/mi_db")
  .then(() => console.log("Mongo conectado"))
  .catch(err => console.log(err));

// 👤 Modelo usuario
const User = mongoose.model("User", {
  name: String,
  email: { type: String, unique: true },
  password: String
});

// 🔐 REGISTER
app.post("/api/auth/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existe = await User.findOne({ email });
    if (existe) return res.status(400).json({ msg: "Ya existe" });

    const hash = await bcrypt.hash(password, 10);

    const user = new User({ name, email, password: hash });
    await user.save();

    res.json({ msg: "Registrado" });
  } catch (error) {
    res.status(500).json(error);
  }
});

// 🔐 LOGIN
app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "No existe" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ msg: "Contraseña mal" });

    const token = jwt.sign({ id: user._id }, "secreto123");

    res.json({ token, user });
  } catch (error) {
    res.status(500).json(error);
  }
});

// 🚀 SERVER
app.listen(4000, () => {
  console.log("Servidor en puerto 4000");
});