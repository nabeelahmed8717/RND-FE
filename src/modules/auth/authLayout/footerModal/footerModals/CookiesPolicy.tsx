import { Box } from '@mui/material';
import React from 'react';
import { cookiesModal } from '../../../../../common/mockData/modals'


const CookiesPolicy = () => {
  return (
    <div className="modalContent">
      {cookiesModal.map((item:any,) => (
        <div className='cookies-modal' key={item.id}>
          <Box className='description-modal'>
            <p className='fs-18 fw-500 lh-20'>{item.description}</p>
          </Box>
          <h2 className='fs-24 fw-700 lh-20'>{item.heading}</h2>
          <p className='fs-18 fw-500 lh-20'>{item.content1}</p>

          {
            item?.subContent?.map((sub: any, i:number) => (
              <Box marginBottom="15px" key={i}>
                <span className='fs-18 fw-600 lh-24'>{sub.heading}: </span>
                <span className='fs-18 fw-500 lh-20'>{sub.content}</span>
              </Box>
            ))
          }
          <p className='fs-18 fw-500 lh-20'>{item.content}</p>
          <p className='fs-18 fw-500 lh-20'>{item.content2}</p>
          <p className='fs-18 fw-500 lh-20'>{item.content3}</p>
          <p className='fs-18 fw-500 lh-20'>{item.content4}</p>

        </div>
      ))}
    </div>
  );
};

export default CookiesPolicy;
