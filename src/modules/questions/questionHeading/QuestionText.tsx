import { Typography } from '@mui/material'
import React, { FC } from 'react'

const QuestionText:FC<{mb?:string|number, fontWeight?:number, questionText?:string}> = (props) => {
  const {mb, fontWeight, questionText } = props;
  return (
    <Typography mb={mb?mb:"auto"} className={`${fontWeight&&"fw-600"} fs-16 lh-24 dark-color opacity-8`}>{questionText}</Typography>
  )
}

export default QuestionText