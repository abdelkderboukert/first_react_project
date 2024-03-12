import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid"
import { Typography } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from '@mui/styles';


export default class Login extends Component {
    defaultVotes = 2;

    constructor(props) {
        super(props);
        this.state = {
            /*guestCanPause: true,*/
            age : this.defaultVotes,
        };

        this.handelroombuttonpressed = this.handelroombuttonpressed.bind(this);
        this.sendinfouser = this.sendinfouser.bind(this);
        /*this.handleguestcanpausechange = this.handleguestcanpausechange.bind(this);
        this.handlevoteschange = this.handlevoteschange.bind(this);*/
        this.namescanf = this.namescanf.bind(this);
        this.prenamescanf = this.prenamescanf.bind(this);
        this.agescanf = this.agescanf.bind(this);
    }

    handelroombuttonpressed() {
        console.log(this.state);
    }

    namescanf(e) {
        this.setState({
            name: e.target.value,
        })
    }

    prenamescanf(e) {
        this.setState({
            prename: e.target.value,
        })
    }

    agescanf(e) {
        this.setState({
            age: e.target.value,
        })
    }

    sendinfouser() {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({
                name: this.state.name,
                prename: this.state.prename,
                age: this.state.age
            }),
        };
        fetch('/api/', requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));
    }

    render() {
        return (
        <Grid container spacing={1} >
            <Grid item xs={12} align="center">
                <Typography component='h4' variant='h4'>login</Typography>
            </Grid>
            <Grid item xs={12} align="center" style={{ marginBottom: '16px' }}>
                <FormControl>
                    <TextField required={true} 
                    type="text"
                    onChange={this.namescanf}
                    inputProps={{
                        min: 1,
                        style: { textAlign: "center" },
                    }}
                    />
                    <FormHelperText>
                        <div align="center">
                            user name
                        </div>
                    </FormHelperText>
                </FormControl>
                <FormControl>
                    <TextField required={true} 
                    type="text"
                    onChange={this.prenamescanf}
                    inputProps={{
                        min: 1,
                        style: { textAlign: "center" },
                    }}
                    />
                    <FormHelperText>
                        <div align="center">
                            prename
                        </div>
                    </FormHelperText>
                </FormControl>
                <FormControl>
                    <TextField required={true} 
                    type="number"
                    defaultValue={this.defaultVotes}
                    onChange={this.agescanf}
                    inputProps={{
                        min: 1,
                        style: { textAlign: "center" },
                    }}
                    />
                    <FormHelperText>
                        <div align="center">
                            age
                        </div>
                    </FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={12} align="center">
                <Button color="primary" variant="contained" onClick={this.sendinfouser}>new</Button>
            </Grid>
            <Grid item xs={12} align="center">
                <Button color="primary" variant="contained" to="/" component={ Link }>back</Button>
            </Grid>
        </Grid>);
    }
} 