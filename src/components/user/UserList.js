import React, { useContext, useEffect } from "react";
import UserContext from "../../context/userContext";
import { Table } from "reactstrap";
const UserList = (props) => {
  const userContext = useContext(UserContext);
  const { getUsers, usersList } = userContext;
  useEffect(() => {
    if (usersList.length) {
    } else {
      getUsers();
    }
    // eslint-disable-next-line
  }, []);
  const userClicked = (id) => {
    props.history.push(`/user-profile/${id}`);
  };
  return (
    <div className='py-3'>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((user) => {
            return (
              <tr key={user.id} onClick={() => userClicked(user.id)}>
                <th scope='row'>{user.id}</th>
                <td>
                  {user.first_name} {user.last_name}
                </td>
                <td>{user.email}</td>
                <td>
                  <img
                    src={user.avatar}
                    style={{ borderRadius: "50%" }}
                    width='30'
                    alt=''
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default UserList;
