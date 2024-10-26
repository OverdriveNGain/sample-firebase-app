import { useState } from "react";
import { UsersContext } from "../../contexts/users-context";
import { UsersService } from "../../services/users-service";

const usersService = new UsersService();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  usersService.updateSetFunction(setUsers);

  return (
    <UsersContext.Provider value={{ users, usersService }}>
      {children}
    </UsersContext.Provider>
  );
};
