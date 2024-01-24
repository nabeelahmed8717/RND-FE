import type { NextPage } from 'next'
import ClientsMain from '../../modules/clients/ClientsMain';
import Layout from '../../modules/layout/layout/Layout';

const Claims: NextPage = () => {
  return (
    <Layout>
      <ClientsMain />
    </Layout>
  )
}

export default Claims
