import React from 'react'
import CommonCheckBoxes from '../../common/components/commonCheckboxes/CommonCheckBoxes'
import { CheckBoxprops } from '../../common/interfaces/CommonCheckBoxInterface';
import {CheckBoxLabelList} from '../../common/mockData/checkBoxLabels/CheckBoxLabelList';


const CheckBoxeComp = (props:CheckBoxprops) => {
  const { label,requiredCheckboxes,setPage } = props;
  return (
    <div><CommonCheckBoxes
   
    /></div>
  )
}

export default CheckBoxeComp