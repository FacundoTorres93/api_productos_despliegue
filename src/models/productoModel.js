const mongoose = require("mongoose");

// mongoose.connect(process.env.MONGO_URL, {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
// });

const ProductoSchema = new mongoose.Schema(
  {
    nombre: String,
    precio: String,
  },
  { collection: "productos" }
);

const Producto = mongoose.model("Producto", ProductoSchema);

module.exports = Producto;
