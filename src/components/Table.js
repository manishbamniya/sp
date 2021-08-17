import React, { useState } from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  makeStyles,
  Typography,
  Select,
  MenuItem,
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 4),
    padding: theme.spacing(2),
  },

  table: {
    "& thead th": {
      backgroundColor: "whiteSmoke",
    },
    "& tbody td": {
      padding: theme.spacing(3, 2),
    },
  },

  div: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(2),
  },

  paginationContainer: {
    display: "flex",
  },

  selectComponent: {
    margin: theme.spacing(0, 2),
  },
  icon: {
    paddingBottom: theme.spacing(1),
  },
}));

export default function MainTable(props) {
  const { headCells, records } = props;
  const classes = useStyles();
  const pages = [5, 10, 15];
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(pages[0]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(1);
  };

  const handleRecordsPaging = () => {
    return records.slice((page - 1) * rowsPerPage, page * rowsPerPage);
  };

  const labelPage = () => {
    return `Records: 
      ${(page - 1) * rowsPerPage + 1} - ${
      handleRecordsPaging().length < rowsPerPage
        ? records.length
        : page * rowsPerPage
    } From ${records.length}`;
  };

  const renderRow = (head, rowsData) => {
    let value = "";
    if (head.valueGetter) {
      value = head.valueGetter(rowsData[head.field]);
    } else {
      value = rowsData[head.field];
    }
    return <TableCell key={head.field}>{value}</TableCell>;
  };

  return (
    <>
      <div className={classes.div}>
        <Typography>{labelPage()}</Typography>

        <div className={classes.paginationContainer}>
          <Typography>Records Per Page:</Typography>
          <Select
            className={classes.selectComponent}
            onChange={handleRowsPerPageChange}
            value={rowsPerPage || ""}
            disableUnderline
            inputProps={{
              classes: {
                icon: classes.icon,
              },
            }}
          >
            {pages.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>

          <Pagination
            count={Math.ceil(records.length / rowsPerPage)}
            page={page}
            onChange={handlePageChange}
          />
        </div>
      </div>

      <TableContainer>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              {headCells.map((item) => (
                <TableCell key={item.field}>{item.headerName}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {handleRecordsPaging().map((item) => (
              <TableRow key={item.employee_id}>
                {headCells.map((value) => renderRow(value, item))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
