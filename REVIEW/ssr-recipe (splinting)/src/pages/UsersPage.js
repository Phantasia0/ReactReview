import UserContainer from "../containers/UserContainer";
import UsersContainer from "../containers/UsersContainer";
import { Route, Routes } from "react-router-dom";

const UsersPage = () => {
  return (
    <>
      <UsersContainer />
      <Routes>
        <Route path=":id" element={<UserContainer />} />
      </Routes>
    </>
  );
};

export default UsersPage;
