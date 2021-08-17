import React, {useEffect} from "react";
import MainTable from "../components/Table";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUserData } from "../store/userModule/userAction";
import Spinner from "../components/Spinner";
import AddUser from "../components/AddUser";
import Filters from "../components/Filters";

const columns = [
  {
    field: "employee_id",
    headerName: "EmployeeID",
    valueGetter: (v) => {
      return (
        <Link
          to={{
            pathname: `user/${v}/userDetails`,
          }}
        >
          <span>{v}</span>
        </Link>
      );
    },
  },
  { field: "first_name", headerName: "FirstName" },
  { field: "last_name", headerName: "Last name" },
  { field: "is_deleted", headerName: "isDeleted" },
];

function UserPage(props) {
  const { usersData, isFetching, showUserData } = props;
  console.log(usersData)

  useEffect( () => {
    showUserData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <>
      <AddUser />
      <Filters />
      {isFetching ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <MainTable headCells={columns} records={usersData} />
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    usersData: state.user.user,
    isFetching: state.user.isFetching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showUserData: () => dispatch(getUserData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
