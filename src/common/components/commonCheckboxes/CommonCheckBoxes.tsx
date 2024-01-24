import React from 'react'
import { CheckBoxLabelList } from '../../mockData/checkBoxLabels/CheckBoxLabelList';
import Checkbox from '@mui/material/Checkbox';

const CommonCheckBoxes = (props:any) => {


  return (
    <div>
      <div className="check">
        <ul>
          {CheckBoxLabelList.map((labelList: any) => {
            return ( 
              <div key={labelList.id}>
                <label htmlFor="">
                {/* <li><Checkbox />{props.labelOne}</li>
                <li><Checkbox />{props.labelTwo}</li> */}
                  <Checkbox />
                  {labelList.label}
                 
                </label>  
              </div>
            );
              }
          )}

        </ul>
      </div>
    </div>
  )
}

export default CommonCheckBoxes