import { Add, KeyboardArrowDown, Settings } from "@mui/icons-material";
import { IAvartar, IHeaderNotification } from "../interfaces/headerInterface";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GroupsIcon from "@mui/icons-material/Groups";
import Image from "next/image";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import apiInventoryIcon from "../../assets/images/layout/api-inventory.png";
import auditIcon from "../../assets/images/layout/audit-log.png";
import calendaricon from "../../assets/images/layout/calendaricon.png";
import claimsIcon from "../../assets/images/layout/claimsIcon.png";
import collaboratorsIcon from "../../assets/images/layout/collaboratorsIcon.png";
import collectionIcon from "../../assets/images/layout/collection.png";
import dashboardIcon from "../../assets/images/layout/dashboard.png";
import feedbackicon from "../../assets/images/layout/feedbackicon.png";
import guideLines from "../../assets/images/layout/guideLines.png";
import helpDiskIcon from "../../assets/images/layout/help-desk.png";
import myenquiry from "../../assets/images/layout/myenquiry.png";
import newsletterIcon from "../../assets/images/layout/newsletter.png";
import ratingIcon from "../../assets/images/layout/ratings.png";
import userGroupIcon from "../../assets/images/layout/user-group.png";
import userguideicon from "../../assets/images/layout/userguideicon.png";
import submenuIcon from "../../assets/images/admin-dashboard/submenuIcon.png";

export const routes = (userType: string) => {
  const ROUTES = [
    {
      path: "/dashboard",
      title: "Dashboard",
      icon: (
        <Image
          src={dashboardIcon}
          alt="dashboard icon"
          priority
          width={24}
          height={24}
        />
      ),
    },
    userType !== "SYS_ADMIN"
      ? {
          path: "/clients",
          title: "Clients",
          icon: (
            <Image
              src={userGroupIcon}
              alt="user group"
              priority
              width={24}
              height={24}
            />
          ),
        }
      : {},

    userType === "RND_EXPERT"
      ? {
          path: "/collections",
          title: "Collections",
          icon: (
            <Image
              src={collectionIcon}
              alt="collections"
              priority
              width={24}
              height={24}
            />
          ),
        }
      : {},

    userType === "INDIVIDUAL"
      ? {
          path: "/claims",
          title: "Claims",
          icon: (
            <Image
              src={claimsIcon}
              alt="claim icon"
              priority
              width={24}
              height={24}
            />
          ),
        }
      : {},
    userType === "INDIVIDUAL"
      ? {
          path: "/collaborators",
          title: "Collaborators",
          icon: (
            <Image
              src={collaboratorsIcon}
              alt="collaborators icon"
              priority
              width={24}
              height={24}
            />
          ),
        }
      : {},

    userType !== "SYS_ADMIN"
      ? {
          path: "/calendar",
          title: "Calendar",
          icon: (
            <Image
              src={calendaricon}
              alt="calendar icon"
              priority
              width={24}
              height={24}
            />
          ),
        }
      : {},
    userType === "SYS_ADMIN"
      ? {
          path: "/manageUsers",
          title: "Manage",
          icon: <GroupsIcon sx={{ color: "white" }} />,
          iconOpenend: (
            <KeyboardArrowUpIcon sx={{ fontSize: "16px", color: "white" }} />
          ),
          iconClosed: (
            <KeyboardArrowDown sx={{ fontSize: "16px", color: "white" }} />
          ),
          submenu: [
            {
              id: 6.1,
              path: "/manageUsers",
              title: "Manage Users",
             
              icon: (
                <NavigateNextIcon
                  sx={{ fontSize: "16px", color: "white", ml: "0px" }}
                />
              ),
            },
            {
              id: 6.2,
              path: "/clients",
              title: "Manage Clients",
             
              icon: (
                <NavigateNextIcon sx={{ fontSize: "16px", color: "white" }} />
              ),
            },
            {
              id: 6.3,
              path: "/claims",
              title: "Manage Claims ",
          
              icon: (
                <NavigateNextIcon sx={{ fontSize: "16px", color: "white" }} />
              ),
            },
          ],
        }
      : {},
    userType === "SYS_ADMIN"
      ? {
          path: "/apiInventory",
          title: "API Inventory",
          icon: (
            <Image
              src={apiInventoryIcon}
              alt="api inventory"
              priority
              width={24}
              height={24}
            />
          ),
        }
      : {},

    userType === "SYS_ADMIN"
      ? {
          path: "/rndExpert",
          title: "RND Experts",
          icon: (
            <Image
              src={collaboratorsIcon}
              alt="collaborators"
              priority
              width={24}
              height={24}
            />
          ),
        }
      : {},

    userType === "SYS_ADMIN"
      ? {
          path: "/newsLetter",
          title: "Newsletter",
          icon: (
            <span style={{ marginLeft: "0.2rem" }}>
              <Image
                src={newsletterIcon}
                alt="newsletter"
                priority
                width={24}
                height={24}
                objectFit="contain"
              />
            </span>
          ),
        }
      : {},

    userType === "SYS_ADMIN"
      ? {
          path: "/auditLog",
          title: "Audit Log",
          icon: (
            <Image
              src={auditIcon}
              alt="audit log"
              priority
              width={24}
              height={24}
            />
          ),
        }
      : {},

    userType === "SYS_ADMIN"
      ? {
          path: "/ratingsFeedback",
          title: "Ratings & Feedback",
          icon: (
            <Image
              src={ratingIcon}
              alt="ratings"
              priority
              width={24}
              height={24}
            />
          ),
        }
      : {},

    userType === "SYS_ADMIN"
      ? {
          path: "/itHelpDesk",
          title: "IT Help Desk",
          icon: (
            <Image
              src={helpDiskIcon}
              alt="help disk"
              priority
              width={24}
              height={24}
            />
          ),
        }
      : {},
    {
      path: "/userGuide",
      title: "User Guide",
      icon: (
        <Image
          src={userguideicon}
          alt="user guide icon"
          priority
          width={24}
          height={24}
        />
      ),
    },
    {
      path: "/guideLines",
      title: "HMRC Guidelines",
      icon: (
        <Image
          src={guideLines}
          alt="guidelines icon"
          priority
          width={24}
          height={24}
        />
      ),
    },
    {
      path: "/accountSettings/myProfile",
      title: "Account Settings ",
      icon: <Settings sx={{ color: "white" }} />,
      iconOpenend: <Add sx={{ fontSize: "16px", color: "white" }} />,
    },
  ];

  return ROUTES;
};

export const avatarData: IAvartar[] = [
  {
    id: "1",
    title: "My Enquires",
    path: "/myenquires",
    icon: <Image src={myenquiry} alt="query" priority />,
  },
  {
    id: "2",
    title: "Feedback",
    path: "/feeback",
    icon: <Image src={feedbackicon} alt="feedback" priority />,
  },
];
export const headerNotificationData: IHeaderNotification[] = [
  {
    id: "1",
    title: "Client added",
    description: "Client One Private Limited has been added. ",
    path: "",
    date: "today",
    hours: "5 hours ago",
  },
  {
    id: "2",
    title: "Client added",
    description: "Client One Private Limited has been added. ",
    path: "",
    date: "today",
    hours: "3 hours ago",
  },
  {
    id: "3",
    title: "Client added",
    description: "Client One Private Limited has been added. ",
    path: "",
    date: "today",
    hours: "12 hours ago",
  },
  {
    id: "4",
    title: "Client added",
    description: "Client One Private Limited has been added. ",
    path: "",
    date: "yesterday",
    hours: "5 hours ago",
  },
];
