import React from 'react'
import DashboardLayout from '../layouts/dashboardLayout'
import ProductCategory from '../components/productCategory'

const Dashboard = () => {
  return (
    <>
        <DashboardLayout>
            <ProductCategory />
        </DashboardLayout>
    </>
  )
}

export default Dashboard
