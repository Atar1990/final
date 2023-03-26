import React, { useState } from 'react';
import '../App.css';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { validateEmail } from '../utils/helpers'
import { Button } from '@mui/material';

function Signup() {
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [loginFields, setLoginFields] = useState({
        email: '',
        name: '',
        password1: '',
        password2: ''
    })
    const handleClickShowPassword1 = () => setShowPassword1((show) => !show);
    const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className="App-login">
            <img className="App-logo" src="logo.png" />
            <FormControl sx={{ m: 1, width: 'calc(100% - 16px)' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-name">Name</InputLabel>
                <OutlinedInput
                    error={!loginFields.name && loginFields.name !== ''}
                    onBlur={ev => { setLoginFields({ ...loginFields, name: ev.target.value }) }}
                    id="outlined-adornment-name"
                    type="text"
                    label="Name"
                />
            </FormControl>
            <FormControl sx={{ m: 1, width: 'calc(100% - 16px)' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
                <OutlinedInput
                    error={!!loginFields.email && !validateEmail(loginFields.email)}
                    onBlur={ev => { setLoginFields({ ...loginFields, email: ev.target.value }) }}
                    id="outlined-adornment-email"
                    type="email"
                    label="Email"
                />
            </FormControl>
            <FormControl sx={{ m: 1, width: 'calc(100% - 16px)' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword1 ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword1}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword1 ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    onBlur={ev => { setLoginFields({ ...loginFields, password1: ev.target.value }) }}
                    label="Password"
                />
            </FormControl>
            <FormControl sx={{ m: 1, width: 'calc(100% - 16px)' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Validate password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword2 ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword2}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword2 ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    onBlur={ev => { setLoginFields({ ...loginFields, password2: ev.target.value }) }}
                    label="Password"
                    error={loginFields.password1 !== loginFields.password2 && loginFields.password1 !== ''}
                />
            </FormControl>
            <Button onClick={() => { console.log(loginFields); }} variant="contained">Signup</Button>
        </div>
    );
}

export default Signup;
