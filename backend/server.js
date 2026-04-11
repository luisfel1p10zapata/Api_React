import dns from "dns";
dns.setDefaultResultOrder("ipv4first");

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";


dotenv.config(); // 🔥 cargar .env

const app = express();

app.use(cors());
app.use(express.json());

// 🧪 DEBUG (puedes quitar luego)
console.log("MONGO_URI:", process.env.MONGO_URI);
console.log("PORT:", process.env.PORT);

// 🔌 Conectar MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Mongo conectado"))
  .catch(err => console.log("❌ Error Mongo:", err.message));

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

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET
    );

    res.json({ token, user });
  } catch (error) {
    res.status(500).json(error);
  }
});

// 🚀 SERVER
app.listen(process.env.PORT || 4000, () => {
  console.log(`🚀 Servidor en puerto ${process.env.PORT || 4000}`);
});