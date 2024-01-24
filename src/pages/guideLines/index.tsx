import type { NextPage } from 'next'
import Layout from '../../modules/layout/layout/Layout'
import HMRCGuidLines from '../../modules/guideLines/HmrcGuideLines'

const GuidLines: NextPage = () => {
  return (
    <Layout>
  <HMRCGuidLines/>
  </Layout>
  )
}

export default GuidLines

