import { Grid } from "@mui/material";

const QuestionSkeleton = (props: any) => {
 
  return (
    <Grid container spacing={2}>
    <Grid item xs={12} lg={12} md={12}>
      <div className="skeleton-card">
        <div className="description">
          <div className="main-line line" />
          <div className="main-line line" />
          <div className="main-line line-40" />
          <div className="main-line line-70" />
          <div className="main-line line-70" />
        </div>
      </div>
    </Grid>
  </Grid>
  );
};

export default QuestionSkeleton;
