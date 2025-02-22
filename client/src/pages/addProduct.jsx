import React, { useContext, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { AdminContext } from '../context/AdminContext'
import { assets } from '../assets/assets.js'

function AddProduct() {
  const [docImg, setDocImg] = useState(false)
  const [date, setDate] = useState('')
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  
  const { backendUrl } = useContext(AdminContext)

  const onSubmitHandler = async (e) => {
    e.preventDefault()

    try {
      if (!docImg) {
        return toast.error('Image not selected', { theme: "colored" })
      }

      const formData = new FormData()
      formData.append('image', docImg)
      formData.append('name', name)
      formData.append('category', category)
      formData.append('description', description)
      formData.append('date', date)

      const { data } = await axios.post(backendUrl + '/api/product/add', formData)
      if (data.success) {
        toast.success(data.message, { theme: "colored" })
        setDocImg(false)
        setName('')
        setCategory('')
        setDate('')
        setDescription('')
      } else {
        toast.error(data.message, { theme: "colored" })
      }

    } catch (error) {
      toast.error(error.message, { theme: "colored" })
    }
  }

  return (
    <div className="container d-flex justify-content-center align-items-center my-5 pt-5">
      <div className="col-lg-9 mx-auto">
        <div className="card p-4 shadow-lg">
          <h3 className="text-success text-center">Add Product</h3>
          <form onSubmit={onSubmitHandler}>
            
            {/* Image Upload */}
            <div className="text-center">
              <label htmlFor="product-img">
                <img 
                  src={docImg ? URL.createObjectURL(docImg) : assets.upload_area} 
                  alt="Upload" 
                  className="img-fluid border border-success p-2 mb-3 rounded" 
                  style={{ maxWidth: "150px" }}
                />
              </label>
              <input type="file" onChange={(e) => setDocImg(e.target.files[0])} id="product-img" hidden />
              <p className="text-success">Upload Product Image</p>
            </div>

            {/* Product Name */}
            <div className="mb-3">
              <label className="text-success">Product Name</label>
              <input 
                onChange={(e) => setName(e.target.value)} 
                value={name} 
                type="text" 
                className="form-control border-success" 
                placeholder="Product Name" 
                required 
              />
            </div>

            {/* Product Category */}
            <div className="mb-3">
              <label className="text-success">Product Category</label>
              <input 
                onChange={(e) => setCategory(e.target.value)} 
                value={category} 
                type="text" 
                className="form-control border-success" 
                placeholder="Product Category" 
                required 
              />
            </div>

            {/* About Product */}
            <div className="mb-3">
              <label className="text-success">About Product</label>
              <textarea 
                onChange={(e) => setDescription(e.target.value)} 
                value={description} 
                className="form-control border-success" 
                placeholder="About Product" 
                rows={3} 
                required 
              />
            </div>

            {/* Date */}
            <div className="mb-3">
              <label className="text-success">Date Added</label>
              <input 
                type="date" 
                onChange={(e) => setDate(e.target.value)} 
                value={date} 
                className="form-control border-success" 
                required 
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-success btn-block w-100">Add Product</button> 
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddProduct
