let users = [
 "Mithun",
 "Raj",
 "Rohit",
 "Shailesh"
];

function isUserPresent(user) {
    if (users.includes(user)) {
      console.log(`Yes, ${user} is a valid user.`);
      return true;
    } else {
      console.log(`No, ${user} is not a valid user.`);
      return true;
    }
  }

  isUserPresent("Mithun");
  isUserPresent("Someone");