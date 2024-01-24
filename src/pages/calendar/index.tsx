import type { NextPage } from 'next'
import CalendarMain from '../../modules/calendar/calendarMain'

import Layout from '../../modules/layout/layout/Layout'


const Calendar: NextPage = () => {
  return (
    <Layout>
      <CalendarMain />
    </Layout>


  )
}

export default Calendar
