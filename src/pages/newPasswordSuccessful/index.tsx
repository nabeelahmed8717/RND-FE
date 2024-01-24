import React from 'react'
import NewPasswordSuccessful from '../../modules/auth/newPassword/newPasswordSuccessful/newPasswordSuccessful'
import Auth from "../../modules/auth/AuthMain";

const index = () => {
    return (
        <>
            <Auth>
                <NewPasswordSuccessful />
            </Auth>
        </>
    )
}

export default index