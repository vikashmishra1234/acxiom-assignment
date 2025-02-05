import React from 'react'
import AdminTop from '../component/AdminTop'
import Admin from '../admin-home/Admin'
import Topbar from '../component/Topbar'

const page = () => {
  return (
    <div>
      {/* <AdminTop/> */}
      <Topbar/>
      <Admin/>
    </div>
  )
}

export default page