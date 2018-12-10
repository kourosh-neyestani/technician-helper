import React, {Component} from "react";
import axios from 'axios';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {Container, Row, Col} from 'react-grid-system';
import FormControl from '@material-ui/core/FormControl';
import 'moment-timezone';
import moment from 'moment'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import Select from '@material-ui/core/Select';

import './style.css';

const styles = theme => ({
    root: {
        width: '90%',
    },
    button: {
        marginRight: theme.spacing.unit,
    },
    textField: {},
    input: {},
});

function getSteps() {
    return ['Select device', 'Device model', 'Enter zip code', 'Device color', 'Issues', 'Timing', 'Personal info'];
}

class Request extends Component {
    constructor(props) {
        super(props);
        this.getStepContent = this.getStepContent.bind(this);
        this.handleClickDate = this.handleClickDate.bind(this);
        this.handleClickColor = this.handleClickColor.bind(this);
        this.handleClickGroup = this.handleClickGroup.bind(this);
        this.handleSubmitInfo = this.handleSubmitInfo.bind(this);
        this.handleClickDevice = this.handleClickDevice.bind(this);
        this.handleClickProblem = this.handleClickProblem.bind(this);
        this.handleChangeZipcode = this.handleChangeZipcode.bind(this);
        this.handleSubmitZipcode = this.handleSubmitZipcode.bind(this);
        this.state = {
            checkZipcode: true,
            present: 1544360291,
            groupId: null,
            zipcode: null,
            colors: [],
            groups: [],
            devices: [],
            problems: [],
            selectedProblems: [],
            name: null,
            form: {
                device_id: null,
                zipcode: null,
                color: null,
                name: null,
                mobile: null,
                phone: null,
                email: null,
                address: null,
                price: null,
                problems: [],
                day: 0,
                time: 9
            },
            activeStep: 0,
        };
    }

    // ComponentDidMount
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/groups').then(group => {
            const groups = group.data;
            this.setState({groups});
        });
        axios.get('http://127.0.0.1:8000/colors/').then(color => {
            const colors = color.data;
            this.setState({colors});
        });
        axios.get('http://127.0.0.1:8000/problems/').then(problem => {
            const problems = problem.data;
            this.setState({problems});
        });
    }

    // Request methods
    handleClickGroup(id) {

        let t = id - 1;

        const devices = this.state.groups[t].devices;
        this.setState({devices, groupId: id});
    };
    handleClickDevice(id) {

        this.setState(prevState => ({
            form: {
                ...prevState.form,
                device_id: id
            }
        }))
    }
    handleChangeZipcode = (event) => {
        const value = event.target.value;
        this.setState({zipcode: value})
    };
    handleSubmitZipcode = event => {
        event.preventDefault();

        const inputZipcode = {
            zipcode: this.state.zipcode
        };

        axios.post('http://127.0.0.1:8000/return/service-possibility', {inputZipcode})
            .then(res => {
                if (true) { //res.data['service-possibility']
                    this.setState(prevState => ({
                        form: {
                            ...prevState.form,
                            zipcode: this.state.zipcode
                        }
                    }));
                    this.setState({
                        checkZipcode: true
                    });
                } else {
                    this.setState({
                        checkZipcode: false
                    });
                }
                console.log(res.data['service-possibility'])
            })
    };
    handleClickColor = (id) => {
        this.setState(prevState => ({
            form: {
                ...prevState.form,
                color: id
            }
        }))
    };
    handleClickProblem = (id) => {

        let problemsArray = this.state.selectedProblems,
            problemsIndex = problemsArray.indexOf(id);

        if (problemsArray.includes(id) && problemsIndex > -1) {
            this.state.selectedProblems.splice(problemsIndex, id);
        } else {
            this.state.selectedProblems.push(id);
        }

        this.setState(prevState => ({
            form: {
                ...prevState.form,
                problems: this.state.selectedProblems
            }
        }))

    };
    handleSubmitInfo = event => {
        event.preventDefault();

        const name = event.target.name.value,
            email = event.target.email.value,
            phone = event.target.phone.value,
            mobile = event.target.phone.value,
            address = event.target.phone.value;

        this.setState(prevState => ({
            form: {
                ...prevState.form,
                name: name,
                email: email,
                phone: phone,
                mobile: mobile,
                address: address

            }
        }))

    };
    handleChangeTime = event => {
        this.setState(prevState => ({
            form: {
                ...prevState.form,
                time: event.target.value
            }
        }));
    };
    handleClickDate = (event, id) => {
        event.preventDefault();
        this.setState(prevState => ({
            form: {
                ...prevState.form,
                day: id
            }
        }));
    };

    // Stepper Methods
    handleNext = () => {
        const {activeStep} = this.state;
        this.setState({
            activeStep: activeStep + 1,
        });
    };
    handleBack = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1,
        }));
    };
    handleCheck = (id) => {
        if (this.state.groupId != null && id === 0) {
            return true;
        } else if (this.state.form.device_id != null && id === 1) {
            return true;
        } else if (this.state.form.zipcode != null && id === 2) {
            return true;
        } else if (this.state.form.color != null && id === 3) {
            return true;
        } else if (this.state.form.problems.length !== 0 && id === 4) {
            return true;
        } else if (this.state.form.day != null && this.state.form.time != null && id === 5) {
            return true;
        } else if (this.state.form.address != null && this.state.form.name !=  null && this.state.form.email != null & this.state.form.mobile != null && id === 6) {
            return true;
        } else if (id === 7) {
            return true;
        } else {
            return false;
        }
    };

    // Get Step Content
    getStepContent(step) {

        const groups = this.state.groups.map((item, i) => {
            return (
                <li key={i} onClick={() => this.handleClickGroup(item.id)}>
                    <div className={(this.state.groupId === item.id) ? 'active' : ''}>
                        <h3>{item.name}</h3>
                        <img src={require('../../assets/img/iphone.png')} alt=""/>
                    </div>
                </li>
            )
        });

        const devices = this.state.devices.map((item, i) => {
            return (
                <li key={i} onClick={() => this.handleClickDevice(item.id)}>
                    <div className={(this.state.form.device_id === item.id) ? 'active' : ''}>
                        <h3>{item.name}</h3>
                        <img src={require('../../assets/img/iphone.png')} alt=""/>
                    </div>
                </li>
            )
        });

        const colors = this.state.colors.map((item, i) => {
            return (
                <li key={i} onClick={() => this.handleClickColor(item.name)}>
                    <div className={(this.state.form.color === item.name) ? 'active' : ''}>
                        <span style={{backgroundColor: item.code}}></span>
                    </div>
                </li>
            )
        });

        const problems = this.state.problems.map((item, i) => {
            return (
                <li key={i} onClick={() => this.handleClickProblem(item.id)}>
                    <div className={(this.state.form.problems.includes(item.id)) ? 'active' : 'false'}>
                        <h3>{item.name}</h3>
                    </div>
                </li>
            )
        });

        const now = this.state.present;

        switch (step) {
            case 0:
                return (
                    <div className="request-step">
                        <div className="step-header">
                            <h3 className="step-header-title">
                                What needs to be repaired?
                            </h3>
                        </div>
                        <div className="step-content">
                            <ul className="request-devices-list">
                                {(!Array.isArray(groups) || !groups.length) ? '...' : groups}
                            </ul>
                        </div>
                    </div>
                );
            case 1:
                return (
                    <div className="request-step">
                        <div className="step-header">
                            <h3 className="step-header-title">
                                Select your model
                            </h3>
                        </div>
                        <div className="step-content">
                            <ul className="request-devices-list">
                                {(!Array.isArray(devices) || !devices.length) ? 'Go to prev step. and chosse group first' : devices}
                            </ul>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="request-step">
                        <div className="step-header">
                            <h3 className="step-header-title">
                                Please enter your zip code
                            </h3>
                        </div>
                        <div className="step-content step-content-zipcode">
                            <form onSubmit={this.handleSubmitZipcode}>
                                <div className="form-input">
                                    <input type="text" onChange={(event) => this.handleChangeZipcode(event)}
                                           placeholder="Enter your ZIP code hear" value={this.state.form.zipcode ? this.state.form.zipcode : null}/>
                                    <button className="form-zipcode-button">
                                        Check ZIP code
                                    </button>
                                </div>
                                <div className={this.state.checkZipcode ? "hide" : "form-error"}>
                                    <h3>Sorry, we do not currently service in your area<br/>
                                    <small>
                                        Please choose another zip code
                                    </small></h3>
                                </div>
                            </form>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="request-step">
                        <div className="step-header">
                            <h3 className="step-header-title">
                                Select color
                            </h3>
                        </div>
                        <div className="step-content">
                            <ul className="request-colors-list">
                                {(!Array.isArray(colors) || !colors.length) ? '...' : colors}
                            </ul>
                        </div>
                    </div>

                );
            case 4:
                return (
                    <div className="request-step">
                        <div className="step-header">
                            <h3 className="step-header-title">
                                What's the issue?
                            </h3>
                        </div>
                        <div className="step-content">
                            <ul className="request-problems-list">
                                {(!Array.isArray(problems) || !problems.length) ? '...' : problems}
                            </ul>
                        </div>
                    </div>
                );
            case 5:
                return (
                    <div className="request-step">
                        <div className="step-header">
                            <h3 className="step-header-title">
                                When do you want us to come?
                                <small>We can be there in a heartbeat</small>
                            </h3>
                        </div>
                        <div className="step-content timing">
                            <ul className="timing-date">
                                {[0, 1, 2, 3, 4].map((key, i) =>
                                    <li key={i} className={( this.state.form.day === i ) ? 'active' : ''}
                                        onClick={(e) => this.handleClickDate(e, i)}>
                                        <span
                                            className="count">{i === 0 ? null : moment.unix(now).add(i, 'days').format("D")}</span>
                                        <span className={i === 0 ? 'today' : ''}>{i === 0 ? "today" : moment.unix(now).add(i, 'days').format("ddd")}</span>
                                    </li>
                                )}
                            </ul>
                            <FormControl fullWidth>
                                <InputLabel htmlFor="age-simple">At what time?</InputLabel>
                                <Select
                                    value={this.state.form.time}
                                    onChange={this.handleChangeTime}
                                    inputProps={{
                                        name: 'timingTime',
                                    }}
                                >
                                    <MenuItem value={9}>9am - 10am</MenuItem>
                                    <MenuItem value={10}>10am - 11am</MenuItem>
                                    <MenuItem value={11}>11am - 12am</MenuItem>
                                    <MenuItem value={12}>12am - 1pm</MenuItem>
                                    <MenuItem value={13}>1pm - 2pm</MenuItem>
                                    <MenuItem value={14}>2pm - 3pm</MenuItem>
                                    <MenuItem value={15}>3pm - 4pm</MenuItem>
                                    <MenuItem value={16}>4pm - 5pm</MenuItem>
                                    <MenuItem value={17}>5pm - 6pm</MenuItem>
                                    <MenuItem value={18}>6pm - 7pm</MenuItem>
                                    <MenuItem value={19}>7pm - 8pm</MenuItem>
                                    <MenuItem value={20}>8pm - 9pm</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                );
            case 6:
                return (
                    <div className="request-step">
                        <div className="step-content">
                            <form onSubmit={this.handleSubmitInfo}>
                                <Row>
                                    <Col lg={6}>
                                        <h3 className="step-header-title">
                                            Where can we meet you?
                                        </h3>
                                        <div className="form-control">
                                            <FormControl fullWidth>
                                                <TextField
                                                    name="address"
                                                    label="Address"
                                                    id="margin-none"
                                                    required={true}
                                                    // className={classes.textField}
                                                    helperText="Please select your address from the list"
                                                />
                                            </FormControl>
                                        </div>
                                        <div className="form-control">
                                            <FormControl fullWidth>
                                                <TextField
                                                    label="More details"
                                                    id="margin-none"
                                                    // className={classes.textField}
                                                    helperText="Add / suite / floor No. (optional)"
                                                />
                                            </FormControl>
                                        </div>
                                        <div className="form-control">
                                            <FormControl fullWidth>
                                                <TextField
                                                    label="Instructions"
                                                    id="margin-none"
                                                    // className={classes.textField}
                                                    helperText="Add instructions (optional)"
                                                />
                                            </FormControl>
                                        </div>
                                        <div className="form-control button-block hidden-lg-down">
                                            <Button variant="contained" size="large" color="primary" type="submit"
                                                    fullWidth={true}>
                                                Submit Repait Request
                                            </Button>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <h3 className="step-header-title">
                                            Enter your personal info
                                        </h3>
                                        <div className="form-control">
                                            <FormControl fullWidth>
                                                <TextField
                                                    name="name"
                                                    label="Name"
                                                    helperText="Some important text"
                                                    required={true}
                                                />
                                            </FormControl>
                                        </div>
                                        <div className="form-control">
                                            <FormControl fullWidth>
                                                <TextField
                                                    name="email"
                                                    type="email"
                                                    label="Email address"
                                                    helperText="Please type in a valid email address"
                                                    required={true}
                                                />

                                            </FormControl>
                                        </div>
                                        <div className="form-control">
                                            <FormControl fullWidth>
                                                <TextField
                                                    name="phone"
                                                    type="number"
                                                    label="Phone number"
                                                    helperText="Enter your phone number"
                                                    required={true}
                                                />
                                            </FormControl>
                                        </div>
                                        <div className="form-control">
                                            <FormControl fullWidth>
                                                <TextField
                                                    name="mobile"
                                                    type="number"
                                                    label="Mobile number"
                                                    helperText="Enter your mobile number"
                                                    required={true}
                                                />
                                            </FormControl>
                                        </div>
                                        <div className="form-control button-block hidden-lg-up">
                                            <Button variant="contained" size="large" color="primary" type="submit"
                                                    fullWidth={true}>
                                                Submit Repait Request
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </form>
                        </div>
                    </div>
                );
            default:
                return 'Unknown step';
        }
    }

    render() {
        const {classes} = this.props;
        const steps = getSteps();
        const {activeStep} = this.state;

        return (
            <div className="section-request section-request-horizontal">
                <div className="request-menu">
                    <Container>
                        <Stepper activeStep={activeStep}>
                            {steps.map((label, index) => {
                                const props = {};
                                const labelProps = {};
                                return (
                                    <Step key={label} {...props}>
                                        <StepLabel {...labelProps} className="hidden-this-lg-down">{label}</StepLabel>
                                    </Step>
                                );
                            })}
                        </Stepper>
                    </Container>
                </div>
                <Container>
                    <div>
                        {activeStep === steps.length ? (
                            <div>
                                <div className="request-step">
                                    <div className="step-header">
                                        <h3 className="step-header-title">
                                            Thanks {this.state.form.name}
                                            <br/>
                                            <br/>
                                            <small>we received your request</small>
                                        </h3>
                                        <h5>We will provide your tech's name and arrival time by SMS and email</h5>
                                    </div>
                                    <div className="step-content">
                                        <ul className="request-colors-list">

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div>
                                {this.getStepContent(activeStep)}
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={this.handleBack}
                                        className={classes.button + ' button-prev-step'}
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={this.handleNext}
                                        className={classes.button + ' button-next-step'}
                                        disabled={this.handleCheck(activeStep) !== true}
                                    >
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next '}
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </Container>
                {
                    console.log(this.state.form)
                }
            </div>
        );
    }
}

Request.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(Request);