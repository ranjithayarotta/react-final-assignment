import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import RadioButton from "./RadioButton";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
    },
    buttoncolor: {
      backgroundColor:"#007EFF",
      color:"white",
      '&:hover': {
        backgroundColor: '#007EFF',
        borderColor: '#0062cc',
        boxShadow: 'none',
        } ,
        '&:active': {
          boxShadow: 'none',
          backgroundColor: '#007EFF',
          borderColor: '#005cbf',
          },
          '&:focus': {
          boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        } 
    },
    listText: {
      fontFamily: "Montserrat",
      fontStyle: "normal",
    }
  })
);

interface ListItemObject {
  imageName: string;
  description:string;
  price :number,
  applicable:number[]

}

interface TabPanelProps {
  // children?: React.ReactNode;
  item: ListItemObject;
  abc: (val:number) => void; 
 //addSelectedTab:any
  indexVal:number;
  optionValueItem:number

}


export default function List(props: TabPanelProps) {
  const classes = useStyles();
  const handleClick = (event: React.MouseEvent) => {
   // console.log("inside list")
   // console.log(typeof(props.indexVal))
    props.abc(props.indexVal)
    }; 
  //console.log(typeof (props.item.applicable[0]));
   //console.log(props.item.applicable.includes(Number(props.optionValueItem) ));
  // console.log(props.optionValueItem);
  //console.log(typeof (props.item.applicable));
  //console.log(typeof (props.optionValueItem));

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid style={{ textAlign:"center" }} item xs={2}>
              <Paper 
                elevation={3}
                style={{
                  backgroundColor: "grey",
                  width: "70px",
                  height: "70px",
                  display:"inline-block"
                }}
              ></Paper>
            </Grid>
            <Grid item xs={7} container direction="column" spacing={2}>
              <Grid item xs>
                <Typography   className={classes.listText} gutterBottom variant="h5" component="h2">
                  {props.item.imageName}
                </Typography>
                <Typography  className={classes.listText} variant="body2" gutterBottom>
                  {props.item.description}
                </Typography>
              </Grid>
            </Grid>
            <Grid xs={3} item>
              <Grid xs={12}>
                <RadioButton />
              </Grid>
              <Grid xs={12}>
                {
                 ( Number(props.optionValueItem)!==0 && props.item.applicable.indexOf(Number(props.optionValueItem)) > -1 )
                  ? <Button onClick={handleClick} variant="contained" className={classes.buttoncolor}>
                  Select 
                </Button>
                :""
                }
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
