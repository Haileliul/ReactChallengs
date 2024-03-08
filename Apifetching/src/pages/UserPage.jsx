import React, { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";

import UserController from "../controller/UserController";

const UserPage = () => {
  const [Id, setId] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [gender, setgender] = useState("");
  const [status, setstatus] = useState("Active");





  // ========================================This one is for post method ====================================

  const CreateUserMutation = useMutation({
    mutationKey: ["postMutuate"],
    mutationFn: UserController.createUsers,
    onSuccess: () => {
      // Reset form fields on successful post creation

      setId("");
      setname("");
      setemail("");
      setgender("");

      console.log("Haile the data has been saved bro ");
    },
    onError: (error) => {
      console.error("Error creating post:", error);
    },
  });
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    try {
      await CreateUserMutation.mutateAsync({ Id, name, email, gender, status });
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  // =========================================This one is for get method ===================================

  const UserQuery = useQuery({
    queryKey: ["Posts"],
    queryFn: UserController.getAllUsers,
  });
  if (UserQuery.isLoading) {
    console.log("it is still loading bro");
    return <div>Loading....</div>;
  }
  if (UserQuery.isError) {
    if (UserQuery.error.response && UserQuery.error.status === 404) {
      console.log("data  not found");
      return <div>Posts not found</div>;
    } else {
      
      console.log("we have server error");
      return <div>Error fetching data : {UserQuery.error.message}</div>;
    }
  }

 
  return (
    <div className="grid grid-cols-3 w-screen h-screen">
      <div className="col-span-2 bg-green-400">
        <div className="w-[500px] h-[300px] bg-white">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 items-end w-fit justify-center"
          >
            <span>
              <label htmlFor="userId">userId</label>
              <input
                type="text"
                id="userId"
                className="outline-blue-500   border-2 border-black px-2 ml-2"
                onChange={(Event) => {
                  setId(Event.target.value);
                }}
              />
            </span>
            <span>
              <label htmlFor="name">UserName</label>
              <input
                type="text"
                id="name"
                className="outline-blue-500   border-2 border-black px-2 ml-2"
                onChange={(Event) => {
                  setname(Event.target.value);
                }}
              />
            </span>
            <span>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="outline-blue-500   border-2 border-black px-2 ml-2"
                onChange={(Event) => {
                  setemail(Event.target.value);
                }}
              />
            </span>
            <span>
              <label htmlFor="body">Gender</label>
              <input
                type="text"
                id="body"
                className="outline-blue-500   border-2 border-black px-2 ml-2"
                onChange={(Event) => {
                  setgender(Event.target.value);
                }}
              />
            </span>

            <button type="submit" disabled={CreateUserMutation.isLoading}>
              {CreateUserMutation.isLoading ? "Creating..." : "Create Post"}
            </button>
          </form>
        </div>
      </div>
      <div className="col-span-1 bg-amber-400 h-full overflow-auto">
        {UserQuery.data.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </div>
    </div>
  );
};

export default UserPage;
// ===========================
