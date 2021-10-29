import { useState } from 'react';
import './Products.scss';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { productRows } from 'Ultils/dummyData';
import { Link } from 'react-router-dom';

const Products = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
        return (
          <div className="listProduct">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        )
      }
    },
    { field: 'stock', headerName: 'Stock', width: 120 },
    {
      field: 'status',
      headerName: 'Status',
      // type: 'number',
      width: 120,
    },
    {
      field: 'price',
      headerName: 'Price',
      type: 'number',
      width: 120,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={'/product/' + params.row.id}
            >
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline className="productListDelete" onClick={() => handleDelete(params.row.id)} />
          </>
        )
      }
    }
  ];

  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
  }
  
  return (
    <div className="productsContainer">
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

export default Products
