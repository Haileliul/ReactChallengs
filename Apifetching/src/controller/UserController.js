import axios from "axios";
import UserModel from "../model/UserModel";

const BASE_URL = "https://gorest.co.in/public/v2";
const ACCESS_TOKEN =
  "df1deb11351439002c865686c2dd33e642fce2116e1fbf9c83d1efebb9298674";

class UserController {
  static async getAllUsers() {
    try {
      const response = await axios.get(`${BASE_URL}/users`);
      const users = response.data.map((user) => new UserModel(user));
      return users;
    } catch (error) {
      console.error("Failed to fetch data:", error);
      throw new Error("Failed to fetch data");
    }
  }
  static async createUsers(newUser) {
    try {
      const response = await axios.post(`${BASE_URL}/users`, newUser, {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`, // Include access token in the request headers
        },
      });
      // Convert the response data to FoodModel object
      return new UserModel(
        response.data.id,
        response.data.name,
        response.data.email,
        response.data.gender,
        response.data.status
      );
    } catch (error) {
      throw new Error("Failed to create User");
    }
  }
}

export default UserController;
