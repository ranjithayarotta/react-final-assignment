import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Divider, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    //  marginBottom: 12,
  },
  estimateText: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "10px",
  },
  totalCostAllign: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "10px",
    textAlign:"right"
  }
});
interface CostEstimateObject
{
    imageName: string,
    description:string,
    price :number,
    applicable:number[]
} 
interface CostEstimateProps {
    // children?: React.ReactNode;
    selectedItems: CostEstimateObject[]
  }
  

export default function CostEstimate(props:CostEstimateProps) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const sum = props.selectedItems
  .reduce((sum, current) => sum + current.price, 0);
  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5" component="h2" >
              Cost Estimate
            </Typography>
          </Grid>
          <Grid container item xs={12}>
          {props.selectedItems.map((values) => (
              <>
                        <Grid item xs={8}> 
                        <Typography variant="h6" component="p" className={classes.estimateText}>
                          {values.imageName}
                        </Typography>
                      </Grid>
                      <Grid item xs={4}> 
                        <Typography variant="h6" component="p" className={classes.estimateText}>
                        ${values.price}
                        </Typography>
                      </Grid>  
                      </>
            ))}
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <CardActions>
<Grid container>
  <Grid item xs={12} style={{textAlign:'right'}}>
      <Typography variant="h5" component="h2" className={classes.totalCostAllign}>
         ${sum}/mo
      </Typography>
  </Grid>

</Grid>
      </CardActions>
    </Card>
  );
}
