import React from 'react'
import MainTable from '../components/Table'
import { Link } from 'react-router-dom'

const columns = [
  { field: 'CustomerId', headerName: 'CustomerId',
    valueGetter: (v,d) => {
            return(
              <Link
                  to = {{
                    pathname:`user/${v}/userDetails`,
                    data:{
                      d
                    }
                  }}
              >
                <span>{v}</span>
              </Link>
            )
          }},
  { field: 'type', headerName: 'Type' },
  { field: 'firstName', headerName: 'FirstName' },
  { field: 'lastName', headerName: 'Last name' },
  { field: 'CompanyName', headerName: 'Company name',},
  { field: 'PersonMobile', headerName: 'Person Mobile',},
  { field: 'PersonEmail', headerName: 'Person Email',},
  { field: 'Status', headerName: 'Status',},
  { field: 'Date', headerName: 'Date',},
];

function createData(CustomerId,type, firstName,lastName, CompanyName, PersonMobile, PersonEmail,Status,Date) {
  return {CustomerId, type, firstName, lastName, CompanyName, PersonMobile, PersonEmail,Status,Date};
}

const tableBodyRowsData = [
  createData(1,'COMPANY','Gaurav', 'Kumar', 'Complere Infosystem',923456789 , "Gaurav@gmail.com","ACTIVE","11/12/2019"),
  createData(2,'COMPANY','Shyam', 'Lal', 'Complere Infosystem',913456789 , "Shyam@gmail.com","ACTIVE","11/12/2019"),
  createData(3,'COMPANY','Ram', 'Lal', 'Complere Infosystem',933456789 , "ram@gmail.com","ACTIVE","11/12/2019"),
  createData(4,'COMPANY','Sahil', 'Kumar' , 'Complere Infosystem',943456789 , "Sahil@gmail.com","ACTIVE","11/12/2019"),
  createData(5,'COMPANY','Sandeep','Sharma', 'Complere Infosystem',953456789 , "Sandeep@gmail.com","ACTIVE","11/12/2019"),
  createData(6,'COMPANY','Rajan','Kumar', 'Complere Infosystem',953456789 , "Rajan@gmail.com","ACTIVE","11/12/2019"),
  createData(7,'COMPANY','Rahul', 'Dravid' , 'Complere Infosystem',973456789 , "Rahul@gmail.com","ACTIVE","11/12/2019"),
  createData(8,'COMPANY','Mandeep', 'Singh', 'Complere Infosystem',993456789 , "Mandeep@gmail.com","ACTIVE","11/12/2019"),
  createData(9,'COMPANY','Suresh', 'Kumar', 'Complere Infosystem',993456789 , "Suresh@gmail.com","ACTIVE","11/12/2019"),
  ];
  

export default function UserPage() {

  return (
    <>
    <MainTable headCells={columns} records={tableBodyRowsData}/>
    </>
  )

}