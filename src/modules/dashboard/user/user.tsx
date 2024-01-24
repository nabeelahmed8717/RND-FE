import { IDashboardPeople } from "../../../common/interfaces/dashboardInterface";
import Image from "next/image";
import Link from "next/link";
import activeYellow from "../../../assets/images/admin-dashboard/active-yellow.png";
import expertImage from "../../../assets/images/admin-dashboard/admin-expert.png";
import inActiveYellow from "../../../assets/images/admin-dashboard/inactive-gray.png";
import userImage from "../../../assets/images/admin-dashboard/admin-user.png";

const User: React.FC<IDashboardPeople> = (props: IDashboardPeople) => {
  const { id, name, pathLink, quantity, active, inactive } = props;

  console.log(pathLink);

  return (
    <div className="user-wrapper bg-white font-source-sans-pro">
      <Link href={name === "Users" ? "/manageUsers" : "rndExpert"}>
        <div className="cursor-pointer">
          <div className="flex align-center" style={{ height: "58px" }}>
            <div
              className={` ${
                name === "Users" ? "pink-border" : "orange-border"
              } user-div flex align-center justify-center `}
            >
              <Image
                src={name === "Users" ? userImage : expertImage}
                alt="users"
                width={24}
                height={24}
                priority
              />
            </div>
            <div className="total-users">
              <p className="fs-18 fw-700 dark-color lh-24 half-opacity m-0">
                {name}
              </p>
              <p className="fs-24 fw-700 dark-color lh-32 m-0">{quantity}</p>
            </div>
          </div>
          <div className="flex align-center justify-between border-bottom mt-20">
            <div className="flex align-center">
              <Image
                src={activeYellow}
                alt="active"
                width={8}
                height={8}
                priority
              />
              <p className="fs-12 fw-600 dark-color user-active">Active</p>
            </div>
            <p className="fs-12 fw-700 dark-color float-right">{active}</p>
          </div>
          <div className="flex align-center justify-between border-bottom">
            <div className="flex align-center">
              <Image
                src={inActiveYellow}
                alt="active"
                width={8}
                height={8}
                priority
              />
              <p className="fs-12 fw-600 dark-color user-active">Inactive</p>
            </div>
            <p className="fs-12 fw-700 dark-color float-right">{inactive}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default User;
