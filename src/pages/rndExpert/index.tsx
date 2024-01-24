import type { NextPage } from 'next'
import Layout from '../../modules/layout/layout/Layout'
import RndExpertsSystemAdmin from '../../modules/rndExpert/RndExpertsSystemAdmin'

const RndExpert: NextPage = () => {
  return (
    <Layout>
        <RndExpertsSystemAdmin/>
      </Layout>
  )
}

export default RndExpert
