import { Box } from '@mui/material'
import React, { FC } from 'react'

const CustomCheckBox: FC<{ name: string, label: string }> = (props) => {
    const { name, label } = props
    return (
        <Box className='custom-Checkbox-wrapper' display="flex" alignItems="center" gap="8px">
            <input type="checkbox" id={name} className="remember-checkbox" />
            <label htmlFor={name} className="fs-16 fw-600 font-source-sans-pro cursor-pointer">{label}</label>
        </Box>
    )
}

export default CustomCheckBox;