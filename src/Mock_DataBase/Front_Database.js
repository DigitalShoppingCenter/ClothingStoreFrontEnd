const usersDB = [
  {
    id: 1,
    username: "Envi",
    password: "1234", 
    role: "user",
    bio: "Lover of fashion and creativity!",
    profileImage: ""
  },
  {
    id: 2,
    username: "Juli",
    password: "juli123",
    role: "user"
  },
  {
    id: 3,
    username: "CoffeeBrunch",
    password: "12345678",
    role: "user"
  },
  {
    id: 4,
    username: "owner",
    password: "12345",
    role: "owner",
    businessId: "business123" // Example business ID linked to this owner
  },
  {
    id: 5,
    username: "Owner2",
    password: "67890",
    role: "owner",
    businessId: "business456" // Another business ID linked to this owner
  }
];

export default usersDB;
