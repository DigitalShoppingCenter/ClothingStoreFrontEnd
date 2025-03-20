const usersDB = [
  {
    id: 1,
    username: "Envi",
    password: "1234", 
    role: "owner",
    bio: "Lover of fashion and creativity!",
    profileImage: "/path/to/envi.jpg",
    email: "envi@example.com",
    birthday: "1990-01-01",
    lastSeen: "2023-10-01T12:00:00Z",
    timeSpent: 120
  },
  {
    id: 2,
    username: "Juli",
    password: "juli123",
    role: "user",
    bio: "Passionate about sustainable fashion.",
    profileImage: "/path/to/juli.jpg",
    email: "juli@example.com",
    birthday: "1992-05-15",
    lastSeen: "2023-10-02T15:30:00Z",
    timeSpent: 350
  },
  {
    id: 3,
    username: "CoffeeBrunch",
    password: "12345678",
    role: "user",
    bio: "Coffee enthusiast and brunch blogger.",
    profileImage: "/path/to/coffeebrunch.jpg",
    email: "coffeebrunch@example.com",
    birthday: "1988-08-08",
    lastSeen: "2023-10-03T09:20:00Z",
    timeSpent: 220
  },
  {
    id: 4,
    username: "owner",
    password: "12345",
    role: "owner",
    businessId: "business123", // Example business ID linked to this owner
    email: "owner@example.com",
    birthday: "1985-12-12",
    profileImage: "/path/to/owner.jpg"
  },
  {
    id: 5,
    username: "Owner2",
    password: "67890",
    role: "owner",
    businessId: "business456", // Another business ID linked to this owner
    email: "owner2@example.com",
    birthday: "1987-07-07",
    profileImage: "/path/to/owner2.jpg"
  }
];

export default usersDB;
