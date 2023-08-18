const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://application:mcthHA9nvjQVwHOi@jenkinstest.rvqxmbd.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const productSchema = mongoose.Schema({
    name: String,
    quantity: Number,
});

const Product = mongoose.model('Product', productSchema); // Usamos 'Product' como nombre de la colección


async function printProducts() {
    try {
        const products = await Product.find();
        products.forEach(product => {
            console.log(`Product: ${product.name} - Quantity: ${product.quantity}`);
        });
    } catch (error) {
        console.error('Error al obtener productos:', error);
    } finally {
        mongoose.disconnect(); // Cerramos la conexión a la base de datos
    }
}

async function addProducts(){
    const newProducts = [
      {name:'Producto 1', quantity:5},
      {name:'Producto 4', quantity:7},
      {name:'Producto 9', quantity:23}
    ];

    try{
        const savedProducts = await Product.insertMany(newProducts);
        console.log('Productos agregados');
    }catch(error){
        console.error('Error al agregar productos', error);
    }
}

//addProducts();
printProducts();
