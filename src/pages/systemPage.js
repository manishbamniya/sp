import React, { Component } from "react";
import { getSystemData } from "../store/systemModule/systemAction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import MainTable from "../components/Table";
import Spinner from "../components/Spinner";

class SystemPage extends Component {
  componentDidMount() {
    this.props.showSystemData();
  }
  render() {
    const systemData = this.props.systemData;
    const isFetching = this.props.isFetching;
    console.log(systemData);

    const columns = [
      {
        field: "allocated_computer_id",
        headerName: "Allocated ID",
        valueGetter: (v) => {
          return (
            <Link
              to={{
                pathname: `system/${v}/systemDetails`,
              }}
            >
              <span>{v}</span>
            </Link>
          );
        },
      },
      { field: "computer_serial_number", headerName: "Computer Serial Number" },
      { field: "employee_id", headerName: "Employee ID" },
      { field: "is_deleted", headerName: "isDeleted" },
    ];
    return (
      <>
        {isFetching ? (
          <Spinner />
        ) : (
          <MainTable headCells={columns} records={systemData} />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    systemData: state.system.system,
    isFetching: state.system.isFetching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showSystemData: () => dispatch(getSystemData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SystemPage);
