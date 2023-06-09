import Subtext from "../../common/subtext";
import Title from "../../common/title";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import styles from "./style.module.css";
import sc1 from "../../../images/sc1.png";
import sc2 from "../../../images/sc2.png";
import sc3 from "../../../images/sc3.png";
import sc4 from "../../../images/sc4.png";

const CreateScenario = () => {
  const [secenario, setSecenario] = useState("");
  const onChangeScenario = (e) => {
    setSecenario(e.target.value);
  };

  return (
    <Box>
      <div style={{ marginBottom: "50px" }}>
        <Title type="main">Create Scenario</Title>
        <Subtext>Define the new scenario</Subtext>
      </div>
      <div style={{ marginBottom: "50px" }}>
        <Title required={true}>Name of Scenario</Title>
        <TextField
          className={styles.textfield}
          id="outlined-basic"
          label=""
          variant="outlined"
          onChange={onChangeScenario}
          value={secenario}
        />
      </div>
      <div style={{ marginBottom: "50px" }}>
        <Title required={true}>Name of Child</Title>
        <FormControl className={styles.select}>
          {/* <InputLabel id="demo-simple-select-label"></InputLabel> */}
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div style={{ marginBottom: "50px" }}>
        <Title required={true}>Scenario Type</Title>
        <Subtext>Choose Scenario Type</Subtext>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <img src={sc1} alt={"sc1"} />
          <div className={styles.sceneText}>Using the shower</div>
        </div>
        <div className={styles.image}>
          <img src={sc2} alt={"sc2"} />
          <div className={styles.sceneText}>Potty Training</div>
        </div>
        <div className={styles.image}>
          <img src={sc3} alt={"sc3"} />
          <div className={styles.sceneText}>Go to a new place</div>
        </div>
        <div className={styles.image}>
          <img src={sc4} alt={"sc4"} />
          <div className={styles.sceneText} style={{ marginTop: "13px" }}>
            Share an object
          </div>
        </div>
      </div>
      <div className={styles.advance}>
        <span>Advance Options</span>
        <ExpandMoreIcon />
      </div>
    </Box>
  );
};

export default CreateScenario;
