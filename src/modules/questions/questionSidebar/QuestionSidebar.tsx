import { FC, useState } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { QuestionProgressBar } from "../../../common/constants/questionsidebar";
import { collaboratorsTabledata } from "../../../common/mockData/collaborators";

// circle icon of project Main menu after completed
export function ProjectsCheckedCircle() {
  return (
    <ListItemIcon sx={{ justifyContent: "end" }}>
      <span className="Projects-check-pass fs-14 fw-500">
        {" "}
        <CheckCircleIcon />
      </span>
    </ListItemIcon>
  );
}
// circle icon of Cost Main menu after completed
export function CostCheckedCircle() {
  return (
    <ListItemIcon sx={{ justifyContent: "end" }}>
      <span className="Costs-check-pass fs-14 fw-500">
        {" "}
        <CheckCircleIcon />
      </span>
    </ListItemIcon>
  );
}

const QuestionSidebar: FC = (props: any) => {
  const [isShowCollaborator, setIsShowCollaborator] = useState<boolean>(true);

  return (
    <div className="question-sidebar border-radius-8 bg-white">
      {/* Toggel Buttons of sidebar  */}
      <div className="flex mx-0-5">
        <button className="sidebar-button border-0 bg-white fs-16 cursor-pointer"
          style={isShowCollaborator ? { borderBottom: "4px solid #0F5156", fontWeight: "700", } : {}}
          onClick={() => { setIsShowCollaborator(!isShowCollaborator); }}
        > Progress
        </button>
        <button className="sidebar-button border-0 bg-white fs-16 cursor-pointer"
          style={!isShowCollaborator ? { borderBottom: "4px solid #0F5156", fontWeight: "700", } : {}}
          onClick={() => { setIsShowCollaborator(!isShowCollaborator); }}
        > Collaborator
        </button>
      </div>

      {isShowCollaborator && (
        <List sx={{ marginTop: "25px" }}>
          {/* Show Main Menu  */}
          {QuestionProgressBar.map((item, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{ display: "grid", gridTemplateColumns: "1fr" }}
            >
              {/*Color given to main Menu on active */}
              <ListItemButton disableRipple
                sx={{
                  background: props.questionNumber < 7 && item.title == "Qualification Checks" ? "rgba(23, 136, 77, .15)" : props.questionNumber >= 7 &&
                    props.questionNumber <= 14 && item.title == "Company" ? "rgba(255, 138, 67, .15)" : props.questionNumber >= 15 && props.questionNumber < 44 &&
                      item.title == "Projects" ? "rgba(0, 169, 190, .15)" : props.questionNumber >= 44 && item.title == "Costs" ? "rgba(106, 52, 108, .15)" : "",
                  "&:hover": { backgroundColor: "" },
                }}
              >
                <ListItemIcon sx={{ minWidth: "35px" }}>
                  <span className="fs-14 fw-500">{item.icon}</span>
                </ListItemIcon>
                <ListItemText primary={item.title} />
                {/*Icon given to main Menu after completed respective(qualify,Company,Projects,Costs) section */}
                {props.questionNumber >= 7 &&
                  item.title == "Qualification Checks" ? (
                  <ListItemIcon sx={{ justifyContent: "flex-end" }}>
                    <span className="qualify-check-pass fs-14 fw-500">
                      {" "}
                      <CheckCircleIcon />
                    </span>
                  </ListItemIcon>
                ) : (
                  ""
                )}
                {props.questionNumber > 14 && item.title == "Company" ? (
                  <ListItemIcon sx={{ justifyContent: "flex-end" }}>
                    <span className="Company-check-pass fs-14 fw-500">
                      {" "}
                      <CheckCircleIcon />
                    </span>
                  </ListItemIcon>
                ) : (
                  ""
                )}
                {props.questionNumber > 43 && item.title == "Projects" ? (
                  <ProjectsCheckedCircle />
                ) : (
                  ""
                )}
              </ListItemButton>
              {/* To show the Sub manu with respect to questions and title */}
              {props.questionNumber < 7 &&
                item.title == "Qualification Checks" ? (
                <List sx={{ paddingTop: "0px" }}>
                  {item.submenu?.map((subitem, index) => (
                    <ListItem key={index} disablePadding>
                      <ListItemButton
                        disableRipple
                        sx={{
                          padding: "2px 16px",
                          position: "relative",
                          background:
                            props.questionNumber < 7 &&
                              subitem.title == "Background"
                              ? "rgba(23, 136, 77, .1)"
                              : "",
                        }}
                      >
                        <ListItemIcon>
                          <span className="fs-14 fw-500 position-absolute top-22">
                            {subitem.icon}
                          </span>
                        </ListItemIcon>
                        <ListItemText
                          sx={{
                            color: "rgba(52, 58, 64, .5)",
                            fontSize: "14px",
                            fontWeight: "600",
                          }}
                          primary={subitem.title}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              ) : props.questionNumber >= 7 &&
                props.questionNumber <= 14 &&
                item.title == "Company" ? (
                <List sx={{ paddingTop: "0px" }}>
                  {item.submenu?.map((subitem, index) => (
                    <ListItem key={index} disablePadding>
                      <ListItemButton
                        disableRipple
                        sx={{
                          padding: "2px 16px",
                          position: "relative",
                          background:
                            props.questionNumber > 6 &&
                              props.questionNumber < 10 &&
                              subitem.title == "Basics"
                              ? "rgba(255, 138, 67, .1)"
                              : props.questionNumber >= 10 &&
                                props.questionNumber < 15 &&
                                subitem.title ==
                                "SME Status/ RDEC Status"
                                ? "rgba(255, 138, 67, .1)"
                                : "",
                        }}
                      >
                        <ListItemIcon>
                          <span className="fs-14 fw-500 position-absolute top-22">
                            {subitem.icon}
                          </span>
                        </ListItemIcon>
                        <ListItemText
                          sx={{
                            color: "rgba(52, 58, 64, .5)",
                            fontSize: "14px",
                            fontWeight: "600",
                          }}
                          primary={subitem.title}
                        />
                        {props.questionNumber >= 10 &&
                          props.questionNumber < 15 &&
                          subitem.title == "Basics" ? (
                          <ListItemIcon
                            sx={{ justifyContent: "flex-end" }}
                          >
                            <span className="Company-check-pass fs-14 fw-500">
                              {" "}
                              <CheckCircleIcon />
                            </span>
                          </ListItemIcon>
                        ) : (
                          ""
                        )}
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              ) : props.questionNumber >= 15 &&
                props.questionNumber <= 43 &&
                item.title == "Projects" ? (
                <List sx={{ paddingTop: "0px" }}>
                  {item.submenu?.map((subitem, index) => (
                    <ListItem key={index} disablePadding>
                      {/* in SX This is conditions to show acvtive submenu according to question number and submneu title in Projects */}
                      <ListItemButton
                        disableRipple
                        sx={{
                          padding: "2px 16px",
                          position: "relative",
                          background:
                            props.questionNumber < 22 &&
                              subitem.title == "Aims"
                              ? "rgba(0, 169, 190, .1)"
                              : props.questionNumber === 22 &&
                                subitem.title ==
                                "Acting as a Subcontractor"
                                ? "rgba(0, 169, 190, .1)"
                                : props.questionNumber >= 23 &&
                                  props.questionNumber < 27 &&
                                  subitem.title ==
                                  "Competent Professionals"
                                  ? "rgba(0, 169, 190, .1)"
                                  : props.questionNumber === 27 &&
                                    subitem.title == "Trade"
                                    ? "rgba(0, 169, 190, .1)"
                                    : props.questionNumber === 28 &&
                                      subitem.title ==
                                      "Technical Challenges"
                                      ? "rgba(0, 169, 190, .1)"
                                      : props.questionNumber === 29 &&
                                        subitem.title == "Challenge Level"
                                        ? "rgba(0, 169, 190, .1)"
                                        : props.questionNumber === 30 &&
                                          subitem.title == "Area of Science"
                                          ? "rgba(0, 169, 190, .1)"
                                          : props.questionNumber === 31 &&
                                            subitem.title == "Time Span"
                                            ? "rgba(0, 169, 190, .1)"
                                            : props.questionNumber >= 32 &&
                                              props.questionNumber < 34 &&
                                              subitem.title == "Activities"
                                              ? "rgba(0, 169, 190, .1)"
                                              : props.questionNumber === 34 &&
                                                subitem.title == "Outputs"
                                                ? "rgba(0, 169, 190, .1)"
                                                : props.questionNumber >= 35 &&
                                                  props.questionNumber < 41 &&
                                                  subitem.title == "Grants"
                                                  ? "rgba(0, 169, 190, .1)"
                                                  : props.questionNumber >= 41 &&
                                                    props.questionNumber < 43 &&
                                                    subitem.title == "Technical Detail"
                                                    ? "rgba(0, 169, 190, .1)"
                                                    : "",
                        }}
                      >
                        <ListItemIcon>
                          <span className="fs-14 fw-500 position-absolute top-22">
                            {subitem.icon}
                          </span>
                        </ListItemIcon>
                        <ListItemText
                          sx={{
                            color: "rgba(52, 58, 64, .5)",
                            fontSize: "14px",
                            fontWeight: "600",
                          }}
                          primary={subitem.title}
                        />
                        {/* This is conditions to show icon after completed submenu according to question number and submneu title*/}
                        {props.questionNumber >= 22 &&
                          subitem.title == "Aims" ? (
                          <ProjectsCheckedCircle />
                        ) : props.questionNumber >= 23 &&
                          subitem.title ==
                          "Acting as a Subcontractor" ? (
                          <ProjectsCheckedCircle />
                        ) : props.questionNumber >= 27 &&
                          subitem.title ==
                          "Competent Professionals" ? (
                          <ProjectsCheckedCircle />
                        ) : props.questionNumber >= 28 &&
                          subitem.title == "Trade" ? (
                          <ProjectsCheckedCircle />
                        ) : props.questionNumber >= 29 &&
                          subitem.title ==
                          "Technical Challenges" ? (
                          <ProjectsCheckedCircle />
                        ) : props.questionNumber >= 30 &&
                          subitem.title == "Challenge Level" ? (
                          <ProjectsCheckedCircle />
                        ) : props.questionNumber >= 31 &&
                          subitem.title == "Area of Science" ? (
                          <ProjectsCheckedCircle />
                        ) : props.questionNumber >= 32 &&
                          subitem.title == "Time Span" ? (
                          <ProjectsCheckedCircle />
                        ) : props.questionNumber >= 34 &&
                          subitem.title == "Activities" ? (
                          <ProjectsCheckedCircle />
                        ) : props.questionNumber >= 35 &&
                          subitem.title == "Outputs" ? (
                          <ProjectsCheckedCircle />
                        ) : props.questionNumber >= 41 &&
                          subitem.title == "Grants" ? (
                          <ProjectsCheckedCircle />
                        ) : (
                          ""
                        )}
                      </ListItemButton>
                    </ListItem>
                  ))}
                  <div className="sub-menu-line position-absolute" />
                </List>
              ) : props.questionNumber >= 44 &&
                props.questionNumber <= 64 &&
                item.title == "Costs" ? (
                <List sx={{ paddingTop: "0px" }}>
                  {item.submenu?.map((subitem, index) => (
                    <ListItem key={index} disablePadding>
                      {/* in SX This is conditions to show active submenu according to question number and submneu title in Costs */}
                      <ListItemButton
                        disableRipple
                        sx={{
                          padding: "2px 16px",
                          position: "relative",
                          background:
                            props.questionNumber > 43 &&
                              props.questionNumber <= 47 &&
                              subitem.title == "Staff Cost"
                              ? "rgba(106, 52, 108, .07)"
                              : props.questionNumber >= 48 &&
                                props.questionNumber < 50 &&
                                subitem.title == "Software Cost"
                                ? "rgba(106, 52, 108, .07)"
                                : props.questionNumber >= 50 &&
                                  props.questionNumber < 51 &&
                                  subitem.title ==
                                  "Clinical Trials Cost"
                                  ? "rgba(106, 52, 108, .07)"
                                  : props.questionNumber >= 51 &&
                                    props.questionNumber < 57 &&
                                    subitem.title == "Consumables Cost"
                                    ? "rgba(106, 52, 108, .07)"
                                    : props.questionNumber >= 57 &&
                                      props.questionNumber < 62 &&
                                      subitem.title == "EPW Cost"
                                      ? "rgba(106, 52, 108, .07)"
                                      : props.questionNumber >= 62 &&
                                        subitem.title ==
                                        "Subcontractor Cost (SME / RDEC)"
                                        ? "rgba(106, 52, 108, .07)"
                                        : "",
                        }}
                      >
                        <ListItemIcon>
                          <span className="fs-14 fw-500 position-absolute top-22">
                            {subitem.icon}
                          </span>
                        </ListItemIcon>
                        <ListItemText
                          sx={{
                            color: "rgba(52, 58, 64, .5)",
                            fontSize: "14px",
                            fontWeight: "600",
                          }}
                          primary={subitem.title}
                        />
                        {/* This is conditions to show icon after completed submenu according to question number and submneu title*/}
                        {props.questionNumber >= 48 &&
                          subitem.title == "Staff Cost" ? (
                          <CostCheckedCircle />
                        ) : props.questionNumber >= 50 &&
                          subitem.title == "Software Cost" ? (
                          <CostCheckedCircle />
                        ) : props.questionNumber >= 51 &&
                          subitem.title ==
                          "Clinical Trials Cost" ? (
                          <CostCheckedCircle />
                        ) : props.questionNumber >= 57 &&
                          subitem.title == "Consumables Cost" ? (
                          <CostCheckedCircle />
                        ) : props.questionNumber >= 62 &&
                          subitem.title == "EPW Cost" ? (
                          <CostCheckedCircle />
                        ) : (
                          ""
                        )}
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              ) : (
                " "
              )}
            </ListItem>
          ))}
        </List>
      )}
      {/* To show collaborator list */}
      {!isShowCollaborator && (
        <List sx={{ marginTop: "25px" }}>
          {collaboratorsTabledata.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                disableRipple
                sx={{ paddingTop: "0px" }}
              >
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};
export default QuestionSidebar;
