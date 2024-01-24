import Image from "next/image";
import { IAdminSystemPerformance } from "../../../common/interfaces/dashboardInterface";

import sessionImg from "../../../assets/images/admin-dashboard/security-time.png";
import trendUpImg from "../../../assets/images/admin-dashboard/trend-up.png";
import orangeTickImg from "../../../assets/images/admin-dashboard/tick-circle.png";
import durationImg from "../../../assets/images/admin-dashboard/duration.png";

const SystemPerformance: React.FC<IAdminSystemPerformance> = (
  props: IAdminSystemPerformance
) => {
  const { id, name, performanceTime, performancePercentage } = props;

  return (
    <div className="system-performace-wrapper font-source-sans-pro bg-white">
      <div
        className={`${
          name === "Sessions"
            ? "session-bg"
            : name === "Page Load Time"
            ? "page-per-load-bg"
            : name === "Bounce Rate"
            ? "bounce-rate-bg"
            : "session-duration-bg"
        }  img-div-wrapper flex align-center justify-center`}
      >
        <Image
          priority
          width="30px"
          height="30px"
          src={
            name === "Sessions"
              ? sessionImg
              : name === "Page Load Time"
              ? orangeTickImg
              : name === "Bounce Rate"
              ? trendUpImg
              : durationImg
          }
          alt={name}
        />
      </div>

      <p className="fs-14 fw-700 dark-color opacity-0-8 lh-20 mb-0 mt-1 text-no-wrap">
        {name}
      </p>
      <p className="fs-24 fw-700 dark-color lh-32  margin-0-3">
        {performanceTime}
      </p>
      <p className="fs-14 fw-600 darl-color lh-20 opacity-0-8 margin-0-3">
        {performancePercentage}%
      </p>
    </div>
  );
};

export default SystemPerformance;
