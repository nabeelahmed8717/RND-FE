import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';

export const TableSkeleton = () => {
    let skeletonLoader = new Array();
    let i;
    for (i = 0; i< 10; i++) {
        skeletonLoader[i] = [
            { xs: 0.5 },
            { xs: 2 },
            { xs: 2 },
            { xs: 2 },
            { xs: 2 },
            { xs: 2 },
            { xs: 1.5 }
        ]
    }
    return (
        <Grid container my={2}>
            <Grid item container xs={12} columnSpacing={3} rowSpacing={3} flexDirection='row'>
                {skeletonLoader.map((e) => e?.map((item: any,index:number) =>
                    <Grid item xs={item.xs} key={index}>
                        <Skeleton animation="wave" />
                    </Grid>
                )
                )}
            </Grid>
        </Grid>
    )
}