import DoubleArrowRightIcon from "../../assets/icons/common/DoubleArrowRightIcon";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import Stack from "@mui/material/Stack";

export const HmrcGuideLinesTableConstants = () => {
  const onGuideLinesNavigateHandler = (item: any) => {
    console.log("data", item);
  };

  return [
    {
      title: (
        <div
          className="primary-color fs-16 fw-700 lh-24 align-center font-source-sans-pro"
          style={{ marginLeft: "30px", fontStyle: "normal" }}
        >
          No.
        </div>
      ),
      render: (guideLineList: any) => {
        return (
          <span
            className="hmrc-guidline-list dark-color flex "
            style={{
              justifyContent: "flex-start",
              marginLeft: "35px",
              fontFamily: "Source Sans Pro",
              fontStyle: "normal",
            }}
          >
            {guideLineList.id}
          </span>
        );
      },
    },
    {
      title: (
        <div className="primary-color fs-16 fw-700 lh-24 align-center font-source-sans-pro">
          Main guidelines
        </div>
      ),
      render: (guideLineList: any, index: any) => {
        return (
          <Grid container>
            <Grid xs={12} md={12}>
              <span
                className="hmrc-guidline-list dark-color align-center flex justifyCenter"
                style={{
                  justifyContent: "flex-start",
                }}
              >
                <Link href={guideLineList.link}>
                  <a
                    className="dark-color fs-16 fw-600 lh-24"
                    target="_blank"
                    style={{
                      textDecoration: "none",
                      fontFamily: "Source Sans Pro",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <div
                      key={index}
                      onClick={() =>
                        onGuideLinesNavigateHandler(guideLineList.id)
                      }
                      style={{ marginLeft: "0px" }}
                    >
                      <Grid
                        xs={12}
                        md={12}
                        className="flex align-center cursor-pointer"
                        sx={{ marginLeft: "0px" }}
                      >
                        {guideLineList.list}
                      </Grid>
                    </div>
                  </a>
                </Link>
                <span
                  className="flex align-center"
                  style={{ marginLeft: "0px", whiteSpace: "nowrap" }}
                >
                  <DoubleArrowRightIcon />
                </span>
              </span>
            </Grid>
          </Grid>
        );
      },
    },

    { 
      title: (
        <Stack
          direction="row"
          spacing={6}
          className="flex dark-color align-center justify-end"
          sx={{ marginRight: "-15px" }}
        >
          <div className="flex dark-color align-center ">
            <Link href="https://www.hmrc.gov.uk/gds/cird/attachments/rdsimpleguide.pdf">
              <a
                target="_blank"
                className="primary-color fs-18 fw-600 lh-24 flex align-center font-source-sans-pro"
                style={{
                  textDecoration: "none",

                  fontFamily: "Source Sans Pro",

                  whiteSpace: "nowrap",
                }}
              >
                Summary Guidelines
              </a>
            </Link>

            <DoubleArrowRightIcon />
          </div>

          <div className="flex dark-color align-center justify-end ">
            <Link href="https://www.gov.uk/hmrc-internal-manuals/corporate-intangibles-research-and-development-manual/cird80000">
              <a
                target="_blank"
                className="primary-color fs-18 fw-600 lh-24 flex align-center font-source-sans-pro"
                style={{ textDecoration: "none", whiteSpace: "nowrap" }}
              >
                Detail Guidelines
              </a>
            </Link>

            <DoubleArrowRightIcon />
          </div>
        </Stack>
      ),

      render: (guideLineList: any) => {
        return <span style={{ display: "flex" }}></span>;
      },
    },
    
  ];
};
