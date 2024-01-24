import type { NextPage } from 'next'
import CollaboratorsMain from '../../modules/collaborators/CollaboratorsMain'
import Layout from '../../modules/layout/layout/Layout'

const Collaborators: NextPage = () => {
  return (
    <Layout>
      <CollaboratorsMain/>
    </Layout>
  )
}

export default Collaborators
