import type { NextPage } from 'next'
import ApiInventoryMain from '../../modules/apiInventory/ApiInventory'
import Layout from '../../modules/layout/layout/Layout'


const ApiInventory: NextPage = () => {
  return (
    <Layout>
  <ApiInventoryMain/>
  </Layout>
  )
}

export default ApiInventory

