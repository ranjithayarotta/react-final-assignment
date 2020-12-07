import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Button, Typography } from "@material-ui/core";
import List from "./List";
import DropItem from "./DropItem";
import CostEstimate from "./CostEstimate";
import { Console } from "console";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
     
      //position: "absolute",
      width: "158px",
      height: "30.2px",
      left: "435px",
      top: "206px",
      margin:"3px",
      padding:"5px",
      '&:hover': {
      cursor: "pointer"
        }
    },
    tabButtonText: {
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "10px",
    },
    tabOnSelect:{
      backgroundColor:"#007EFF",
      color:"white"
    },
    tabDefaultStyle:{
      color: theme.palette.text.secondary,
      background: "#FFFFFF",
    }
  })
);
interface CostEstimateObject
{
    imageName: string,
    description:string,
    price :number,
    applicable:number[]
} 

//type Props = { selectedItemInitializer?: CostEstimateObject[] }; 


export default function Layout() {

  const classes = useStyles();
  const [tabs, setTabs] = React.useState([
    {
      id: 1,
      tabName: "Choose Image",
    },
    {
      id: 2,
      tabName: "Choose Instance Type",
    },
    {
      id: 3,
      tabName: "Choose Storage and Network",
    },
    {
      id: 4,
      tabName: "Configure and Security",
    },
    {
      id: 5,
      tabName: "Review and Launch",
    },
  ]);

  const [selectedItems, setSelectedItems] = React.useState<CostEstimateObject[]>([]);
  const [optionTabItem, setOptionTabItem] = React.useState(10);
  const [layOutItem, setLayoutItem] = React.useState([
    {
      imageName: "Linux 2 Image",
      description:
        "Linux 2 comes with   5 years of support.It provides linux kernal 4.14 tuned for optimal performance",
        price :243.234,
        applicable:[10,30,20,40]
    },
    {
      imageName: "Ubuntu Server 18.04 LTS",
      description:
        "Ubuntu Server 18.04 LTS comes with  5 years of support.It provides linux kernal 4.14 tuned for optimal performace",
        price :300.123,
        applicable:[10,30,20,40]
      },
    {
      imageName: "Microsoft windows server 2019 Base",
      description: "Ubuntu Server 18.04 LTS comes with  5 years of support.It provides linux kernal 4.14 tuned for optimal performace",
      price :338,
      applicable:[10,30,40]
    },
    {
      imageName: "SUSE Linux Enterprise Server",
      description: "Ubuntu Server 18.04 LTS comes with  5 years of support.It provides linux kernal 4.14 tuned for optimal performace",
      price :200,
      applicable:[10,30,20,40]
    }
    
  ]);
  const [selectdTab, setSelectedTab] = React.useState(1);

  // const handleClick = (event: React.MouseEvent)=> {
  //   event.preventDefault();
  //   console.log(event.target)
  //   //alert(event.currentTarget.tagName); // alerts BUTTON
  // } 
  const handleClick = (tabId: number) => (event: React.MouseEvent) => {
    setSelectedTab(tabId)
    }; 

    const addSelectedTab = (selectedItem: number) =>  {
      //console.log("Selected tab");
     // console.log(selectedItem);
    setSelectedItems([...selectedItems,layOutItem[selectedItem]])
    }; 

    const addOptionValue =(listOptionVal: number) =>
    {
      setOptionTabItem(listOptionVal)
    }

    


  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item container xs={9} spacing={3}>
          <Grid item container xs={12}>
            <Grid item xs={8}>
              <Typography variant="h5">Choose image</Typography>
            </Grid>
            <Grid item style={{ textAlign: "right" }} xs={4}>
              <DropItem  addValue={addOptionValue} />
            </Grid>
          </Grid>
          <Grid item container xs={12} spacing={3}>
            {tabs.map((values) => (
              <div key={values.id} onClick={handleClick(values.id)} >
                <div className={ `${classes.paper} ${values.id===selectdTab?classes.tabOnSelect:classes.tabDefaultStyle}`} > 
                  <p className={classes.tabButtonText}>
                  {`${values.id}. ${values.tabName}`}{" "}
                  </p>
                </div>
              </div>
            ))}
          </Grid>
          <Grid item container xs={12} spacing={2}>
            {layOutItem.map((values,index) => (
              <Grid item xs={12}>
                <List item={values} indexVal={index} abc={addSelectedTab} optionValueItem={optionTabItem} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid style={{ marginTop: "50px" }} item xs={3}>
          <CostEstimate  selectedItems={selectedItems} />
        </Grid>
      </Grid>
    </div>
  );
}
