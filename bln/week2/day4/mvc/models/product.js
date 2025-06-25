const fs = require('fs');
const path = require('path');

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

//   save() {
//     const p = path.join(
//       path.dirname(process.mainModule.filename),
//       'data',
//       'products.json'
//     );
//     fs.readFile(p, (err, fileContent) => {
//       let products = [];
//       console.log("fileContent:",fileContent)
//       if (!err) {
//         products = JSON.parse(fileContent);
//       }
//       products.push(this);
//       fs.writeFile(p, JSON.stringify(products), err => {
//         console.log(err);
//       });
//     });
//   }

save() {
  const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
  );
  fs.readFile(p, (err, fileContent) => {
    let products = [];
    if (!err && fileContent.length > 0) {
      products = JSON.parse(fileContent);
    }
    products.push(this);
    fs.writeFile(p, JSON.stringify(products), err => {
      console.log(err);
    });
  });
}

//   static fetchAll(cb) {
//     const p = path.join(
//       path.dirname(process.mainModule.filename),
//       'data',
//       'products.json'
//     );
//     fs.readFile(p, (err, fileContent) => {
//       if (err) {
//         cb([]);
//       }
//       cb(JSON.parse(fileContent));
//     });
//   }

static fetchAll(cb) {
  const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
  );
  fs.readFile(p, (err, fileContent) => {
    if (err || fileContent.length === 0) {
      return cb([]);
    }
    cb(JSON.parse(fileContent));
  });
}

};