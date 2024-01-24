import { Fragment, useState } from "react";
import { links } from "../../../../common/constants/auth";
import CustomizedDialogs from "../footerModal/FooterModal";
const AuthFooter = () => {
  const [modalToOpen, setModalToOpen] = useState<string>("")
  return (
    <Fragment>
      <div className="loginFooter">
        <div className="footerEnd">
          <ul className="flex justify-center align-center" >
            {links.map((link:string, i:number)=><li className="fs-14 primary-color cursor-pointer fw-600" key={i} onClick={() => setModalToOpen(link)}>{link}</li>) }
          </ul>
        </div>
      </div>
      <CustomizedDialogs close={() => setModalToOpen("")} open={modalToOpen ? true : false} modalToOpen={modalToOpen} />
    </Fragment>
  );
};
export default AuthFooter;
