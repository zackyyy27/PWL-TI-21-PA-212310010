
use('rentalmovies');

// db.createCollection("customers")

// db.createCollection("actor")

// db.createCollection("addres")

// db.customers.insert([{
//     id : "Fernanda",
//     fullname : "Fernanda Ramos",
//     email : "fernadaramos4@uol.com.br",
//     age : 24
//    },
//    {
//     id : "Mark",
//     fullname : "Mark Philips",
//     email : "mphilips12@shaw.ca",
//     city : "San Francisco"
//    },
//    {
//     id : "Jennifer",
//     fullname : "Jennifer Peterson",
//     email : "jenniferp@rogers.ca",
//     occupation : "teacher"
//    }])

// db.actor.insert([
//     {
//     id : "Gonzales",
//     fullname : "gonzales Peterson",
//     email : "gonzales@rogers.ca",
//     occupation : "teacher"
//     }
// ])

// db.actor.update(
//     {id:"Gonzales"}, 
//     {$set:{fullname:'Gonzales Aniston'}}
//     )

// db.customers.remove(
//     {id:"Gonzales"}
//     )
    
// db.addres.insertOne(
//     {
//      Nama_Produk : "Kulkas",
//      Harga : 10000000,
//      Berat_Produk : 8.9,
//      Rusak : false,
//      Tanggal_Masuk : new Date(),
//      Tag : ["Elektronik", "Perabotan"], 
//      Dimensi : {
//      tinggi : 80,
//      panjang : 50,
//      lebar : 20
//      },
//      Id_Product : ObjectId()
//     }
//      )

// db.addres.insertMany([
//     {
//      Nama_Produk : "TV",
//      Harga : 10000000,
//      Berat_Produk : 8.9,
//      Rusak : false,
//      Tanggal_Masuk : new Date(),
//      Tag : ["Elektronik", "Perabotan"], 
//      Dimensi : {
//      tinggi : 80,
//      panjang : 50,
//      lebar : 20
//      },
//      Id_Product : ObjectId()
//     },
//     {
//         Nama_Produk : "Hp",
//         Harga : 10000000,
//         Berat_Produk : 8.9,
//         Rusak : false,
//         Tanggal_Masuk : new Date(),
//         Tag : ["Elektronik", "Perabotan"], 
//         Dimensi : {
//         tinggi : 80,
//         panjang : 50,
//         lebar : 20
//         },
//         Id_Product : ObjectId()
//        }    
//      ])
    
// db.createCollection("continent", {
//     validator:{
//     $jsonSchema: {
//     bsonType: "object",
//     title: "continent validator",
//     required: ["continent", "last_update"],
//     properties: {
//      continent: {
//      bsonType: "string",
//      description: "continent harus dalam rupa string dan wajib diisi" 
//                 },
//     last_update: {
//     bsonType: "date",
//     description: "'last_update' harus dalam bentuk tanggal dan wajib diisi"
//                 }
//             }
//         }
//     }
// })

// db.continent.drop()

// db.continent.insertOne({
//     continent : "Asia", 
//     last_update : ISODate()
// })

// db.continent.insertOne({
//     continent : Asia, 
//     last_update : ISODate()
// })

// db.customers.aggregate({
//     $lookup:{
//     "actor"
//     localField: id",
//     foreignField: "id",
//     as :"join"
//     }
//     });
    