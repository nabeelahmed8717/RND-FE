import {
  AccessTime,
  ConstructionOutlined,
  ExpandLess,
  KeyboardArrowUp,
  Menu,
  Search,
} from "@mui/icons-material";
import {
  Box,
  CSSObject,
  Card,
  Fab,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Theme,
  Toolbar,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import {
  IAvartar,
  IHeaderNotification,
} from "../../../common/interfaces/headerInterface";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { ReactNode, useEffect, useState } from "react";
import {
  avatarData,
  headerNotificationData,
  routes,
} from "../../../common/constants/sidebar";
import {
  getBasePath,
  getChildPath,
  isEmptyObj,
} from "../../../common/utils/utils";
import { useAppDispatch, useAppSelector } from "../../../hooks/use-store.hooks";

import Breadcrumb from "../../../common/components/breadcrumb/Breadcrumb";
import ChatIcon from "../../../assets/icons/common/ChatIcon.png";
import Footer from "../footer/Footer";
import Image from "next/image";
import InboxIcon from "../../../assets/images/layout/InboxIcon.png";
import Link from "next/link";
import MuiDrawer from "@mui/material/Drawer";
import NotificationIcon from "../../../assets/images/layout/notification.png";
import Profile from "../../../assets/images/layout/profile.png";
import SearchIcon from "../../../assets/images/layout/searchicon.svg";
import Sidebarlogouticon from "../../../assets/images/layout/Sidebarlogouticon.png";
import { getDummyRoles } from "../../../helpers/Tokens";
import logo from "../../../assets/images/layout/logo.png";
import { logoutApiCall } from "../../../redux/signin/signin.api";
import logoutIcon from "../../../assets/images/layout/logoutIcon.svg";
import notificationlogo from "../../../assets/images/layout/notificationlogo.png";
import { useRouter } from "next/router";
import { getUserProfile } from "../../../redux/accountSettings/myProfile/myProfileApi";

const drawerWidth = 300;
// open or closed sidebar
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  backgroundColor: "#0F5156",
  position: "relative",
  zIndex: "9",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  [theme.breakpoints.down("lg")]: {
    position: "fixed",
    minHeight: "100vh",
    borderRight: "0px",
  },
});
const closedMixin = (theme: Theme): CSSObject => ({
  backgroundColor: "#0F5156",
  position: "relative",
  zIndex: "9",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(-1)} + -2px)`,
  [theme.breakpoints.up("lg")]: {
    width: `calc(${theme.spacing(30)} + -2px)`,
    height: "100vh",
  },
  [theme.breakpoints.down("lg")]: {
    height: "100vh",
  },
});
// drawer header
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
// sidebar open or closed functionality
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    position: "fixed",
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

interface PropsTypes {
  children?: ReactNode;
}

export default function Layout(props: PropsTypes) {
  const { children } = props;
  // states
  const router = useRouter();
  console.log(router.query?.company);

  const [open, setOpen] = useState(true);
  const [subnav, setSubnav] = useState(false);

  const user = useAppSelector((state) => state.signin.user);
  const { profileValue } = useAppSelector((state) => state.myProfile);
  const [isModal, setIsModal] = useState(false);
  const [activeIcon, setActiveIcon] = useState(6.1);
  const [isOpenNotificationModal, setIsOpenNotificationModal] = useState(false);
  const [isShowYesterday, setIsShowYesterday] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState(
    "Read All Notifications"
  );
  const isResponsive = useMediaQuery("(max-width:1200px)");
  const isMobileResponsive = useMediaQuery("(max-width:576px)");
  const [isSearchBar, setIsSearchBar] = useState(false);

  const dispatch = useAppDispatch();
  const [localStorageRole, setLocalStorageRole] = useState<string | null>();

  var loggedUserRole: any;
  useEffect(() => {
    loggedUserRole = getDummyRoles();
    if (loggedUserRole) setLocalStorageRole(loggedUserRole);
  }, []);

  useEffect(() => {
    dispatch(getUserProfile());
  }, []);

  // Role State
  // const [userRole, setUserRole] = useState("INDIVIDUAL");

  function showLocation(): string | string[] | undefined {
    switch (getBasePath(router.asPath)) {
      case "clients":
        if (localStorageRole === "SYS_ADMIN") {
          return "Manage  Clients";
        } else if(localStorageRole === "RND_EXPERT"){
          return "Client List ";
        }
         else return "Clients List ";

      case "claims":
        if (localStorageRole === "SYS_ADMIN") {
          return "Manage  Claims";
        } else return "Claims List";

      case "manageUsers":
        return "Manage Users";

      case "collaborators":
        return "Colaborators List";

      case "calendar":
        return "Calendar";

      case "userGuide":
        return "User Guide";

      case "guideLines":
        return "HMRC Guidelines";

      case "collections":
        return "Collections List";

      case "apiInventory":
        return "API Inventory List";

      case "rndExpert":
        return "RND Experts";

      case "newsLetter":
        return "Newsletter";

      case "auditLog":
        return "Audit Log";

      case "ratingsFeedback":
        return "Ratings & Feedback";

      case "itHelpDesk":
        return "IT Help Desk";

      case "accountSettings":
        return "Account Settings";

      default:
      case "default":
        return router.query?.company;
    }
  }
  let parts = router.asPath.split("/");
  function showChildLocation(): string {
    switch (getChildPath(router.asPath)) {
      case "users":
        return "Users";
      case "cards":
        return "Cards";
      case "invoices":
        return "Invoice";
      case "myProfile":
        return "My Profile";
      case "consultation":
        return "Consultation";
      case "questions":
        return parts[3].replaceAll("%20", " ");
      default:
      case "myProfile":
        return "";
    }
  }

  // let role = "INDIVIDUAL";

  // let userData: string | null = "INDIVIDUAL";
  // if (typeof window !== "undefined") {
  //   userData =
  //     sessionStorage.getItem("userInfo") || localStorage.getItem("userInfo");
  //   if (userData) {
  //     role = JSON.parse(userData).role;
  //   } else {
  //     router.push("./");
  //   }
  // }

  const handleLogout = () => {
    const response = dispatch(logoutApiCall());
    // if (response.status === 200) {
    localStorage.clear();
    sessionStorage.clear();
    router.push("/signIn");
    // }
  };
  function naviageFunction(path) {
    router.push(path);
  }

  return (
    <>
      {localStorageRole && (
        <div className="sidebar position-relative">
          <Box sx={{ display: "flex" }}>
            <Box sx={{ background: "#0F5156", position: "relative" }}>
              <Drawer
                className={`mainDrawer ${
                  !isResponsive ? "drawer" : "hideDrawer"
                }`}
                variant="permanent"
                open={!isResponsive ? open : !open}
                onClick={() => {
                  setIsModal(false);
                  setIsOpenNotificationModal(false);
                }}
              >
                <DrawerHeader>
                  <div className={open ? "logoHold" : "iconHold"}>
                    {open ? (
                      <Image src={logo} alt="logo" className="logo" priority />
                    ) : (
                      <Image
                        src={logo}
                        alt="logo"
                        className="logo-icon"
                        priority
                      />
                    )}
                  </div>
                </DrawerHeader>
                <Box sx={{ textAlign: "center" }}>
                  <IconButton disableRipple>
                    <Stack
                      className="profile-image"
                      justifyContent="center"
                      direction="row"
                      sx={{ mt: "10px", mb: !open ? 0 : "10px" }}
                    >
                      <div className="profile bg-gradient-green flex align-center">
                        <Image
                          src={
                            profileValue?.profileImage
                              ? profileValue?.profileImage
                              : Profile
                          }
                          alt="profile"
                          priority
                          width={50}
                          height={50}
                          className="profile-image"
                        />
                        <p className="profile-text m-0 fs-18 fw-700 font-source-sans-pro">
                          {profileValue?.firstName && profileValue?.lastName
                            ? profileValue?.firstName +
                              " " +
                              profileValue?.lastName
                            : "Arthur Lewin"}
                        </p>
                      </div>
                    </Stack>
                  </IconButton>
                </Box>
                <Box>
                  {isResponsive && (
                    <form>
                      <div className="searchHold position-relative">
                        <input
                          type="text"
                          placeholder="Search"
                          className="searchInput border-radius-4 font-source-sans-pro"
                          size={20}
                        />
                        <Search className="searchIcon icon-color" />
                      </div>
                    </form>
                  )}
                </Box>
                {/* href={item.path} */}

                {/* Sidebar */}
                <List sx={{ color: "white" }}>
                  {routes(localStorageRole).map((item: any, index: number) => {
                    if (!isEmptyObj(item)) {
                      return (
                        <div
                          className="link text-decoration"
                          key={index}
                          onClick={() => naviageFunction(item.path)}
                        >
                          <ListItem disablePadding sx={{ display: "block" }}>
                            {item.submenu ? (
                              <ListItemButton
                                onClick={() => setSubnav(!subnav)}
                                disableRipple
                                sx={{
                                  background:
                                    getBasePath(item.path) ==
                                      getBasePath(router.asPath) ||
                                    getBasePath(router.asPath) === "clients" ||
                                    getBasePath(router.asPath) === "claims"
                                      ? "#083B3F"
                                      : "",
                                  marginLeft: "16px",
                                  marginRight: "16px",
                                  borderRadius: "6px",
                                  marginTop: "2px",
                                  "&:hover": { backgroundColor: "#083B3F" },
                                }}
                              >
                                <ListItemIcon
                                  className={`icon  ${open ? "min" : "zero"}`}
                                  sx={{ minWidth: "40px" }}
                                >
                                  <span className=" fs-14 fw-500">
                                    {item.icon}
                                  </span>
                                </ListItemIcon>
                                <Stack
                                  direction="row"
                                  alignItems="center"
                                  sx={{ width: "100%" }}
                                >
                                  {(open || isResponsive) && (
                                    <ListItemText
                                      primary={item.title}
                                      className="fs-14 fw-500"
                                    />
                                  )}
                                  {subnav ? (
                                    <span className="add-icon">
                                      {item.submenu ? item.iconClosed : null}
                                    </span>
                                  ) : (
                                    <span className="add-icon">
                                      {item.submenu ? item.iconOpenend : null}
                                    </span>
                                  )}
                                </Stack>
                              </ListItemButton>
                            ) : (
                              <ListItemButton
                                onClick={() => {
                                  setSubnav(false);
                                  isResponsive && setOpen(!open);
                                }}
                                disableRipple
                                sx={{
                                  background:
                                    getBasePath(item.path) ==
                                    getBasePath(router.asPath)
                                      ? "#083B3F"
                                      : " ",
                                  marginLeft: "16px",
                                  marginRight: "16px",
                                  borderRadius: "6px",
                                  marginTop: "2px",
                                  "&:hover": { backgroundColor: "#083B3F" },
                                }}
                              >
                                <ListItemIcon
                                  className="icon"
                                  sx={{ minWidth: "40px" }}
                                >
                                  <span className=" fs-14 fw-500">
                                    {item.icon}
                                  </span>
                                </ListItemIcon>
                                <Stack
                                  direction="row"
                                  justifyContent="space-between"
                                  alignItems="center"
                                  sx={{ width: "100%" }}
                                >
                                  <ListItemText
                                    primary={item.title}
                                    className="fs-14 fw-500"
                                  />
                                </Stack>
                              </ListItemButton>
                            )}
                            {/* sidebar subnav menus show when system admin is login and uncomment submenu from constants*/}
                            <ul className="subnav">
                              {(subnav ||
                                parts[1] === "clients" ||
                                parts[1] === "manageUsers" ||
                                parts[1] === "claims") &&
                                item.submenu?.map((items: any, ind: number) => {
                                  return (
                                    <Link href={items.path} key={ind}>
                                      <li
                                        className="active-li flex"
                                        style={{ padding: "0.4px 42px",paddingBottom:"0.3px" ,width:"80.2%"}}
                                      >
                                        <div className="wrap-line">
                                            
                                            <div className="submenu-vertical-line">
                                              <span className="submenu-horizontal-line"></span>
                                            </div>
                                          </div>
                                        <Stack
                                          direction="row"
                                          spacing={open || isResponsive ? 2 : 0}
                                          alignItems="center"
                                         
                                          sx={{
                                            background:
                                              parts[1] === "manageUsers" &&
                                              items.id === 6.1
                                                ? "#083B3F"
                                                : parts[1] === "claims" &&
                                                  items.id === 6.3
                                                ? "#083B3F"
                                                : parts[1] === "clients" &&
                                                  items.id === 6.2
                                                ? "#083B3F"
                                                : "",
                                            py: "0px",
                                            ml: "4px",
                                            px:"30px",
                                            width:'100%',
                                           transition:"0.9 ease",
                                            borderRadius: "6px",
                                            "&:hover": {
                                              backgroundColor: "#083B3F",
                                              width:"80.2%",
                                              borderRadius: "6px",



                                            },
                                          }}
                                          onClick={() => {
                                            if (
                                              items.id === 6.1 &&
                                              parts[1] === "manageUsers"
                                            ) {
                                              setActiveIcon(6.1);
                                            } else if (items.id === 6.2) {
                                              setActiveIcon(6.2);
                                            } else {
                                              setActiveIcon(6.3);
                                            }
                                            isResponsive && setOpen(!open);
                                          }}
                                        >
                                          {/* <div className="submenu-before-icon position-relative">
                                            <div className="submenu-line-icon position-absolute"></div>
                                          </div> */}
                                          {/* <div className="submenu-vertical-line position-relative">
                                            <div className="submenu-horizontal-line position-absolute"></div>
                                          </div> */}
                                          
                                          <ListItemButton
                                            sx={{
                                            
                                              "&:hover": {
                                                backgroundColor: "#083B3F",
                                               
                                                borderRadius: "6px",
                                              },
                                            }}
                                            className={` sub-menu-title fs-14 fw-500 ${
                                              items.id !== activeIcon
                                                ? "setIcon"
                                                : ""
                                            }`}
                                          >
                                            {items.title}
                                          </ListItemButton>
                                          <div className="submenu-icon">
                                            {"/" + parts[1] === item.path &&
                                              activeIcon === items.id &&
                                              items.icon}
                                          </div>
                                        </Stack>
                                      </li>
                                    </Link>
                                  );
                                })}
                            </ul>
                          </ListItem>
                        </div>
                      );
                    }
                  })}
                  {isResponsive && (
                    <ListItem sx={{ pl: "18px" }} onClick={handleLogout}>
                      <ListItemButton disableRipple>
                        <ListItemIcon
                          className={`icon  ${open ? "min" : "zero"}`}
                          sx={{
                            minWidth: "40px",
                          }}
                        >
                          <span className="d-block fs-14 fw-500 d-block">
                            <Image
                              src={Sidebarlogouticon}
                              alt="logout"
                              priority
                            />
                          </span>
                        </ListItemIcon>
                        <Stack
                          direction="row"
                          alignItems="center"
                          sx={{ width: "100%" }}
                        >
                          <ListItemText className="fs-14 fw-500">
                            Logout
                          </ListItemText>
                        </Stack>
                      </ListItemButton>
                    </ListItem>
                  )}
                </List>
              </Drawer>
              {!isResponsive && (
                <div
                  className={`${
                    localStorageRole === "SYS_ADMIN" && " bottom "
                  } position-absolute sidebar-Logout-btn `}
                >
                  <List>
                    <ListItem sx={{ pl: "0px" }} onClick={handleLogout}>
                      <ListItemButton
                        disableRipple
                        sx={{
                          borderRadius: "6px",
                          "&:hover": { backgroundColor: "#083B3F" },
                        }}
                      >
                        <ListItemIcon
                          className={`icon  ${open ? "min" : "zero"}`}
                          sx={{ minWidth: "40px" }}
                        >
                          <span className=" fs-14 fw-500">
                            <Image
                              src={Sidebarlogouticon}
                              alt="logout"
                              priority
                            />
                          </span>
                        </ListItemIcon>
                        <Stack
                          direction="row"
                          alignItems="center"
                          sx={{ width: "100%" }}
                        >
                          <Link href="/" style={{ textDecoration: "none" }}>
                            <ListItemText className="fs-14 fw-500">
                              Logout
                            </ListItemText>
                          </Link>
                        </Stack>
                      </ListItemButton>
                    </ListItem>
                  </List>
                </div>
              )}
            </Box>

            <Box
              component="main"
              sx={{ p: 3, width: "100%", position: "relative" }}
            >
              <AppBar
                position="relative"
                sx={{ pr: !isResponsive ? "25px" : "0px" }}
              >
                <Toolbar
                  className={!isResponsive ? "toolbar" : "mobiletoolbar"}
                >
                  {" "}
                  {isResponsive && (
                    <Image
                      src={logo}
                      alt="logo"
                      className="logo-icon"
                      priority
                    />
                  )}
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ width: "100%", ml: "20px" }}
                  >
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      {isResponsive && (
                        <IconButton
                          onClick={() => setOpen(!open)}
                          disableRipple
                        >
                          <Menu className="grey-color" />
                        </IconButton>
                      )}
                      <div
                        className={
                          isSearchBar && !isResponsive
                            ? "animatesearch border-radiues-3"
                            : "searchwidth"
                        }
                        // style={{ display: "none" }}
                      >
                        <Stack
                          direction="row"
                          spacing={2}
                          // justifyContent="space-between"
                        >
                          {!isResponsive && (
                            <IconButton
                              disableRipple
                              className={
                                isSearchBar
                                  ? "flex align-center cursor-pointer ml-10"
                                  : "flex align-center cursor-pointer ml-10 search-icon"
                              }
                              onClick={() => setIsSearchBar(!isSearchBar)}
                            >
                              <Image src={SearchIcon} alt="Search" priority />
                            </IconButton>
                          )}
                          {!isResponsive && isSearchBar ? (
                            <form>
                              <div className="searchHold">
                                <input
                                  type="text"
                                  placeholder="Search for anything..."
                                  className="top-searchInput border-radius-4 h-50"
                                  size={40}
                                />
                              </div>
                            </form>
                          ) : (
                            ""
                          )}
                        </Stack>
                      </div>
                    </Stack>

                    <Box className="icons position-relative">
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        spacing={3}
                        alignItems="center"
                        sx={{ mr: "10px" }}
                      >
                        <IconButton disableRipple>
                          <Image src={InboxIcon} alt="Inbox" priority />
                        </IconButton>
                        <IconButton
                          disableRipple
                          sx={{ p: 0, position: "relative" }}
                          onClick={() => {
                            setIsOpenNotificationModal(
                              !isOpenNotificationModal
                            );
                            setIsModal(false);
                            setIsShowYesterday(false);
                            setNotificationMessage("Read All Notifications");
                          }}
                        >
                          <Image
                            src={NotificationIcon}
                            alt="Notification"
                            priority
                          />
                          {!isOpenNotificationModal && (
                            <div className="notification-count position-absolute"></div>
                          )}
                        </IconButton>
                        {/* notifications */}
                        {isOpenNotificationModal && (
                          <div className="notification-modal position-absolute">
                            <ExpandLess
                              fontSize="large"
                              sx={{
                                position: "absolute",
                                color: "#E5E5E5",
                                right: "-2px",
                                top: "-20px",
                              }}
                            />
                            <Card sx={{}}>
                              <List
                                sx={{
                                  width: "100%",
                                  maxWidth: 360,
                                  bgcolor: "background.paper",
                                }}
                              >
                                {!!headerNotificationData.length &&
                                  headerNotificationData.map(
                                    (item: IHeaderNotification) => {
                                      return (
                                        <>
                                          {item.date === "today" && (
                                            <ListItem
                                              key={item.id}
                                              alignItems="flex-start"
                                              sx={{ p: "0 20px", mb: "15px" }}
                                            >
                                              <div className="img-hold gray-border-1 border-radius-8">
                                                <Image
                                                  src={notificationlogo}
                                                  alt="logo"
                                                  priority
                                                />
                                              </div>
                                              <ListItemText
                                                sx={{
                                                  m: "0px",
                                                  color: "#0f5156",
                                                }}
                                                primary={item.title}
                                                secondary={
                                                  <>
                                                    {" "}
                                                    <p className="fs-12 m-0 dark-color font-source-sans-pro">
                                                      {" "}
                                                      {item.description}
                                                    </p>
                                                    <Typography
                                                      sx={{
                                                        fontSize: "10px",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        color: "#6C757D",
                                                      }}
                                                      component="span"
                                                      variant="body2"
                                                      color="text. primary"
                                                    >
                                                      <AccessTime
                                                        sx={{
                                                          fontSize: "10px",
                                                          marginRight: "5px",
                                                        }}
                                                      />
                                                      <span className="font-source-sans-pro">
                                                        {item.hours}{" "}
                                                      </span>
                                                    </Typography>
                                                  </>
                                                }
                                              />
                                            </ListItem>
                                          )}
                                          {isShowYesterday &&
                                            item.date === "yesterday" && (
                                              <>
                                                {isShowYesterday && (
                                                  <h5
                                                    className="fw-900"
                                                    style={{
                                                      margin: "15px 0px",
                                                      padding: "0 20px",
                                                    }}
                                                  >
                                                    Yesterday
                                                  </h5>
                                                )}
                                                <ListItem
                                                  key={item.id}
                                                  alignItems="flex-start"
                                                  sx={{
                                                    p: "0 20px",
                                                    mb: "10px",
                                                  }}
                                                >
                                                  <div className="img-hold gray-border-1 border-radius-8">
                                                    <Image
                                                      src={notificationlogo}
                                                      alt="logo"
                                                      priority
                                                    />
                                                  </div>
                                                  <ListItemText
                                                    sx={{
                                                      m: "0px",
                                                      color: "#0f5156",
                                                    }}
                                                    primary={item.title}
                                                    secondary={
                                                      <>
                                                        <p className="fs-12 m-0 dark-color">
                                                          {" "}
                                                          {item.description}
                                                        </p>
                                                        <Typography
                                                          sx={{
                                                            fontSize: "10px",
                                                            display: "flex",
                                                            alignItems:
                                                              "center",
                                                            color: "#6C757D",
                                                          }}
                                                          component="span"
                                                          variant="body2"
                                                          color="text.primary"
                                                        >
                                                          <AccessTime
                                                            sx={{
                                                              fontSize: "10px",
                                                              marginRight:
                                                                "5px",
                                                            }}
                                                          />
                                                          <span className="font-source-sans-pro">
                                                            {item.hours}{" "}
                                                          </span>
                                                        </Typography>
                                                      </>
                                                    }
                                                  />
                                                </ListItem>
                                              </>
                                            )}
                                        </>
                                      );
                                    }
                                  )}
                              </List>
                              {!isShowYesterday && (
                                <div className="notification-divider" />
                              )}
                              <Typography
                                style={{
                                  textAlign: "center",
                                  padding: "20px 0px",
                                  fontFamily: "Source Sans Pro",
                                }}
                                onClick={() => {
                                  setIsShowYesterday(true);
                                  setNotificationMessage("All Notifications");
                                }}
                                className="cursor-pointer fw-600 "
                              >
                                {notificationMessage}
                              </Typography>
                            </Card>
                          </div>
                        )}
                        <IconButton
                          disableRipple
                          sx={{ p: 0 }}
                          onClick={() => {
                            setIsModal(!isModal);
                            setIsOpenNotificationModal(false);
                          }}
                        >
                          <Image
                            src={
                              profileValue?.profileImage
                                ? profileValue?.profileImage
                                : Profile
                            }
                            alt="profile"
                            priority
                            width={50}
                            height={50}
                            className="avatar"
                          />
                        </IconButton>
                        {isModal && (
                          <div className="profile-modal position-absolute">
                            <ExpandLess
                              fontSize="large"
                              sx={{
                                position: "absolute",
                                color: "#E5E5E5",
                                right: "-2px",
                                top: "-20px",
                              }}
                            />
                            <Card
                              sx={{
                                py: "10px",
                                px: "15px",
                                borderRadius: "8PX",
                                boxShadow:
                                  "0px 6px 14px -6px rgba(24, 39, 75, 0.12), 0px 10px 32px -4px rgba(24, 39, 75, 0.1)",
                              }}
                            >
                              <Stack direction="column" spacing={2}>
                                {!!avatarData.length &&
                                  avatarData.map((item: IAvartar) => {
                                    return (
                                      <Link
                                        href={item.path}
                                        style={{ textDecoration: "none" }}
                                        key={item.id}
                                      >
                                        <Stack
                                          direction="row"
                                          spacing={2}
                                          sx={{ cursor: "pointer" }}
                                        >
                                          <div className="grey-color">
                                            {item.icon}
                                          </div>
                                          <div className="grey-color fw-600 fs-16 font-source-sans-pro">
                                            {item.title}
                                          </div>
                                        </Stack>
                                      </Link>
                                    );
                                  })}
                                <Link
                                  href=""
                                  style={{ textDecoration: "none" }}
                                >
                                  <Stack
                                    direction="row"
                                    spacing={2}
                                    sx={{ cursor: "pointer" }}
                                  >
                                    <div className="grey-color">
                                      <Image
                                        src={logoutIcon}
                                        alt="logout"
                                        priority
                                      />
                                    </div>
                                    <div
                                      className="grey-color fw-600 fs-16 font-source-sans-pro"
                                      onClick={handleLogout}
                                    >
                                      Logout
                                    </div>
                                  </Stack>
                                </Link>
                              </Stack>
                            </Card>
                          </div>
                        )}
                      </Stack>
                    </Box>
                  </Stack>
                </Toolbar>
              </AppBar>
              <Box
                sx={{
                  p: isMobileResponsive ? "10px" : "20px 30px 30px 30px",
                  pb: isMobileResponsive ? "10px" : "10px",
                }}
                onClick={() => {
                  setIsOpenNotificationModal(false);
                  setIsModal(false);
                }}
              >
                {router.asPath !== "/dashboard" && (
                  <Box>
                    <Breadcrumb
                      title="Dashboard"
                      currentComp={showLocation()}
                      mainComponent={showChildLocation()}
                    />
                  </Box>
                )}
                {children}

                {/* <Fab
                  onClick={() => setIsOpenChatBox(!isOpenChatBox)}
                  disableRipple
                  className="messageIcon"
                  sx={{
                    "&:hover": { backgroundColor: "#434242" },
                    color: "#fff",
                    backgroundColor: " #434242",
                    position: "absolute",
                    bottom: 10,
                    right: 20,
                  }}
                >
                  {isOpenChatBox ? (
                    <KeyboardArrowUp />
                  ) : (
                    <Image src={ChatIcon} alt="chat" priority />
                  )}
                </Fab> */}
              </Box>
            </Box>
          </Box>

          <Footer />
        </div>
      )}
    </>
  );
}
