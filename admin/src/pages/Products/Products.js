import { useState, useEffect } from 'react';
import './Products.scss';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { productRows } from 'Ultils/dummyData';
import { Link } from 'react-router-dom';
import { getProducts, deleteProduct } from 'service/apiCalls';
import {useDispatch, useSelector} from 'react-redux';

const Products = () => {
  const columns = [
    { field: '_id', headerName: 'ID', width: 220 },
    {
      field: 'product', headerName: 'Product', width: 220, renderCell: (params) => {
        return (
          <div className="listProduct">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        )
      }
    },
    { field: 'inStock', headerName: 'Stock', width: 120 },
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
            <DeleteOutline className="productListDelete" onClick={() => handleDelete(params.row._id)} />
          </>
        )
      }
    }
  ];

  const [data, setData] = useState(productRows);
 const dispatch = useDispatch();
 const productsList = useSelector(state => state.products.productsList);
  useEffect(() => {
    getProducts(dispatch);
  }, []);

  // useEffect(() => {
  //   setProduct
  // }, [productsList]);

  const handleDelete = (id) => {
    // setData(data.filter(item => item.id !== id));
    deleteProduct(dispatch, id)
  }
  
  return (
    <div className="productsContainer">
      <DataGrid
        rows={productsList}
        getRowId={(row) => row._id}
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
