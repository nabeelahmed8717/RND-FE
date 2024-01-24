import type { NextPage } from 'next'
import AuditLog from '../../modules/auditLog/AuditLog'
import Layout from '../../modules/layout/layout/Layout'

const Collaborators: NextPage = () => {
  return (
    <Layout>
      <AuditLog/>
    </Layout>
    
  
  )
}

export default Collaborators
