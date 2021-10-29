import React, { useState } from 'react';
import './UserList.scss';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { userRows } from 'Ultils/dummyData';
import { Link } from 'react-router-dom';

const UserList = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'user', headerName: 'Username', width: 200, renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        )
      }
    },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      type: 'number',
      width: 90,
    },
    {
      field: 'transaction',
      headerName: 'Transaction volume',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={'/user/' + params.row.id}
            >
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.id)} />
          </>
        )
      }
    }
  ];

  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
  }
  return (
    <div className="userListContainer">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}

export default UserList
