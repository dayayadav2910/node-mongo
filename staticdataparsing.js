const express =  require("express");
const mongoos =  require("mongoose");
const app = express();


// Static Crud Operations in mongoose
// Insert Data......
const main = async () =>{
    await mongoos.connect('mongodb://localhost:27017/ecommerce');
    const productschema =  new mongoos.Schema({
        name: String,
        price : Number
    });
const productmodel = mongoos.model('products',productschema);


    let data =  new productmodel({name: "DayaKiran", price: 500});
    let result =  await data.save();
    console.log(result);
}

const updateINDb = async ()=>{

    await mongoos.connect('mongodb://localhost:27017/ecommerce');
    const productschema =  new mongoos.Schema({
        name: String,
        price : Number
    });
const productmodel = mongoos.model('products',productschema);

    let results =  await productmodel.updateOne(
        {name:"Electronics"},
        {
            $set: {name : "-Ele"}
        })
    console.log(results);

}


const deleteINdb = async () =>{

   await mongoos.connect('mongodb://localhost:27017/ecommerce');
    const productschema = new mongoos.Schema({
        name: String,
        price : Number
    })

    const productmodel = mongoos.model('products',productschema)
    let results =  await productmodel.deleteMany({
        name:"Furnitures"
    })
    console.log(results);

}
// main();
// updateINDb();
// deleteINdb();