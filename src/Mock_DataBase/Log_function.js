import usersDB from "../Mock_DataBase/Front_Database";
import {generateToken} from "../Mock_DataBase/Generate_Token"; 
const login = async (username, password) => {
    const user = usersDB.find(user => user.username === username && user.password === password);
    console.log(user);
    if (!user) {
      throw new Error('Invalid credentials');
    }
    
    const token = await generateToken(user);
    return { user, token };
  };

  export default login;
  