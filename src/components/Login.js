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

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [loginFields, setLoginFields] = useState({
        password: '',
        email: ''
    })
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className="App-login">
            <img className="App-logo" src="logo.png" />
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
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    onBlur={ev => { setLoginFields({ ...loginFields, password: ev.target.value }) }}
                    label="Password"
                />
            </FormControl>
            <Button onClick={() => { console.log(loginFields); }} variant="contained">Login</Button>
            <a></a>
        </div>
    );
}

export default Login;
