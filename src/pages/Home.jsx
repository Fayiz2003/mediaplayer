import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'
const Home = () => {
  const [removeCategoryVideoResponseFromView , setRemoveCategoryVideoResponseFromView] = useState("")
  const [removeVideoResponseFromCategory,setRemoveVideoResponseFromCategory] = useState("")
  // to sharing of data between two child (Add.jsx -> view.jsx)   through their parent (Home.jsx) it is known as STATE LIFTING
  const [uploadVideoResponse,setUploadVideoResponse] = useState("")
  return (
    <div style={{paddingTop:'100px'}}>
      <div className="container d-flex justify-content-between">
        <Add setUploadVideoResponse={setUploadVideoResponse}  />  
        <Link to={'/history'}> Watch History</Link>
      </div>
      <div className="container-fluid row my-5">
        <div className="col-lg-6">
          <h3>All Videos</h3>
          <View setRemoveCategoryVideoResponseFromView={setRemoveCategoryVideoResponseFromView}
                uploadVideoResponse = {uploadVideoResponse} 
                removeVideoResponseFromCategory={removeVideoResponseFromCategory} />

        </div>
        <div className="col-lg-6">
          {/* passing the function from parent to child ((state Lifting)) */}
          <Category removeCategoryVideoResponseFromView = {removeCategoryVideoResponseFromView}
          setRemoveVideoResponseFromCategory={setRemoveVideoResponseFromCategory}/>
        </div>
      </div>
    </div>
  )
}

export default Home