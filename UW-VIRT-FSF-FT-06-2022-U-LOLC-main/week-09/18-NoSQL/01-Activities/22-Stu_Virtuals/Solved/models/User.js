const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    first: String,
    last: String,
    age: Number,
  },
  {
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `commentCount` that gets the amount of comments per user
userSchema
  .virtual('fullName')
  // Getter
  .get(function () {
    return `${this.first} ${this.last}`;
  }).set(function(v){
    this.first = v.split(" ")[0]
    this.last = v.split(" ")[1]
  })
  // Setter to set the first and last name
 

// Initialize our User model
const User = model('user', userSchema);

const joe = new User({first:"Joe",last:"Rehfuss",age:3});
console.log(joe.fullName)
joe.fullName = "Joseph Bananaslug";
console.log(joe.fullName)
console.log(joe)
// User.create({first:"Joe",last:"Rehfuss",age:3}).then(data=>[
//   console.log(data)
// ]).catch(err=>{
//   console.log(err)
// })


module.exports = User;
