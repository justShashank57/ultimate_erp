import React, { useState } from 'react';

function ProductTable({ data, setData }) {
  const[clickedRow,setClickedRow] = useState(null);
  const [editProductId, setEditProductId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    productId: '',
    name: '',
    stockQuantity: '',
    category: '',
    price: ''
  });

  // Handles the change in input fields
  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };

  // Activates edit mode for a row
  const handleEditClick = (event, product) => {
    event.preventDefault();
    setClickedRow(null)
    setEditProductId(product.productId);
    const formValues = {
      productId: product.productId,
      name: product.name,
      stockQuantity: product.stockQuantity,
      category: product.category,
      price: product.price,
    };
    setEditFormData(formValues);
  };

  // Saves the edits
  const handleSaveClick = (event) => {
    event.preventDefault();
    const editedProduct = {
      productId: editFormData.productId,
      name: editFormData.name,
      stockQuantity: editFormData.stockQuantity,
      category: editFormData.category,
      price: editFormData.price,
    };

    const newProducts = [...data];
    const index = data.findIndex((prod) => prod.productId === editProductId);
    newProducts[index] = editedProduct;

    setData(newProducts);
    setEditProductId(null);
  };
 
//   Delete row
  function deleteRow(event,obj){
      event.preventDefault();
      const filteredProducts = data.filter(product => product.productId !== obj.productId);
      setData(filteredProducts);
  }
  const rows = data.map((obj) => {
    // Check if the row is in edit mode
    if(clickedRow === obj.productId){
       return(
        <tr key={obj.productId}>
          <td>{obj.productId}</td>
          <td>{obj.name}</td>
          <td>{obj.stockQuantity}</td>
          <td>{obj.category}</td>
          <td>{obj.price}</td>
          <td>
              <div style={{display:"flex"}} className='editAndDelete'>
                <img src='pencil.png' onClick={(event) =>handleEditClick(event, obj)}></img>
                <img src='bin.png' onClick={(event)=>deleteRow(event,obj)}></img>
              </div>
          </td>
        </tr>
        
       )
    }
    else if (editProductId === obj.productId) {
      return (
        <tr key={obj.productId}>
          <td>{obj.productId}</td>
          <td><input className='editInputs' type="text" required name="name" value={editFormData.name} onChange={handleEditFormChange} /></td>
          <td><input className='editInputs' type="number" required name="stockQuantity" value={editFormData.stockQuantity} onChange={handleEditFormChange} /></td>
          <td><input className='editInputs' type="text" required name="category" value={editFormData.category} onChange={handleEditFormChange} /></td>
          <td><input className='editInputs' type="text" required name="price" value={editFormData.price} onChange={handleEditFormChange} /></td>
          <td><img className='edit' src='check.png' onClick={handleSaveClick}></img></td>
        </tr>
      );
    } else{
      return (
        <tr key={obj.productId}>
          <td>{obj.productId}</td>
          <td>{obj.name}</td>
          <td>{obj.stockQuantity}</td>
          <td>{obj.category}</td>
          <td>{obj.price}</td>
          <td>
            <img onClick={()=>setClickedRow(obj.productId)} class='edit' src='meatball.png' ></img>
          </td>
        </tr>
      );
    }
  });

  return (
    <table>
        <tr>
          <td style={{width:"18%",fontWeight:"500",fontSize:"1.2rem",color:"#607D8B"}}>ProductID</td>
          <td style={{width:"18%",fontWeight:"500",fontSize:"1.2rem",color:"#607D8B"}}>Product Name</td>
          <td style={{width:"18%",fontWeight:"500",fontSize:"1.2rem",color:"#607D8B"}}>Stock Quantity</td>
          <td style={{width:"18%",fontWeight:"500",fontSize:"1.2rem",color:"#607D8B"}}>Category</td>
          <td style={{width:"18%",fontWeight:"500",fontSize:"1.2rem",color:"#607D8B"}}>Price</td>
          <td style={{width:"10%",fontWeight:"500",fontSize:"1.2rem",color:"#607D8B"}}>Actions</td>
        </tr>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable;
