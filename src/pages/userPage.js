import React  from 'react'
import MainTable from '../components/Table'
import { Link } from 'react-router-dom'
import { connect, useSelector  } from "react-redux";
import { getUserData } from "../store/userModule/userAction";

const columns = [
  { field: 'employee_id', headerName: 'EmployeeID',
    valueGetter: (v) => {
            return(
              <Link
                  to = {{
                    pathname:`user/${v}/userDetails`,
                  }}
              >
                <span>{v}</span>
              </Link>
            )
          }},
  { field: 'first_name', headerName: 'FirstName' },
  { field: 'last_name', headerName: 'Last name' },
  { field: 'is_deleted', headerName: 'isDeleted' },
];

export function UserPage() {
  const usersData = useSelector( state => state.user)
  const allUserData = []
  const userListData = []
  Object.values(usersData).map( (item) => {
    return allUserData.push(item)
  })
  
  allUserData.map( (item) => {
    return Object.values(item).map((value)=> {return userListData.push(value)}) 
  })

  return (
    <>
    <MainTable headCells={columns} records={userListData}/>
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    showUserData: dispatch(getUserData())
  };
};

export default connect(null, mapDispatchToProps)(UserPage);