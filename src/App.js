import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "./actions";
import { ClipLoader } from "react-spinners"; // Import the spinner component

const App = ({ users, loading, error, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  if (loading) {
    return (
      <div className="loading-spinner">
        <ClipLoader color="#36D7B7" loading={loading} size={50} />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {console.log(loading)}
      <h1>Users</h1>
      <ul>
        {Array.isArray(users) &&
          users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users.users,
  loading: state.users.loading,
  error: state.users.error,
});

const mapDispatchToProps = {
  fetchUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
