import type { NextPage } from 'next'
import Layout from '../../modules/layout/layout/Layout'
import UserGuideMain from '../../modules/userGuide/UserGuideMain'

const UserGuide: NextPage = () => {
  return (
    <Layout>
    <UserGuideMain/>
    </Layout>
  )
}

export default UserGuide
