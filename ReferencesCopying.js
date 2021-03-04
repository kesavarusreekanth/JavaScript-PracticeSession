//--->//--> Object reference and copying


// let say = "Hello";
// let message = say;
// console.log(message);


// let user = {
//     Fname : 'Eric',
//     age : 25,
// };

// let admin = user;
// admin.Fname= 'joe';
// alert(user.Fname);




//--> Comparison by reference


// let user1 = {};
// let user2 = user1;

// alert(user1 === user2);



// let user1 = {};
// let user2 = {};

// alert(user1===user2);



//---> Object.assign

// let user= { name : 'Eric',};
// let user1 = {name : 'Joe',};
// let user2 = {name : 'John',};

// Object.assign(user,user1,user2);
// alert(user.name);



//--->Nested cloning


// let user = {
//     name:'Eric',
//     age : 25,
//     heightWeight: {
//         height : 166,
//         weight: 60,
//     }

// }

// let clone = Object.assign({},user);

// alert(user.heightWeight===clone.heightWeight);