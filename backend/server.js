import dns from "dns";
dns.setDefaultResultOrder("ipv4first");

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// 🔐 CORS
app.use(cors({
  origin: "*"
}));

app.use(express.json());

// 🔌 MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Mongo conectado"))
  .catch(err => console.log("❌ Error Mongo:", err.message));

// 👤 Modelo
const User = mongoose.model("User", {
  name: String,
  email: { type: String, unique: true },
  password: String
});

// 🌐 Ruta base
app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

// 🔐 REGISTER ✅ CORREGIDO
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
    res.status(500).json({ msg: "Error en el servidor" });
  }
});

// 🔐 LOGIN
app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "No existe" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ msg: "Contraseña incorrecta" });

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    const { password: _, ...userSafe } = user.toObject();

    res.json({ token, user: userSafe });
  } catch (error) {
    res.status(500).json({ msg: "Error en el servidor" });
  }
});

// 🚀 SERVER
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor en puerto ${PORT}`);
});