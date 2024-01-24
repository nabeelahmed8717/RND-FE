import type { NextPage } from 'next'
import Layout from '../../modules/layout/layout/Layout'
import ManageUsersMain from '../../modules/manageUsers/ManageUsersMain'

const manageUsers: NextPage = () => {
  return (
    <Layout>
      <ManageUsersMain/>
    </Layout>
    
  
  )
}

export default manageUsers