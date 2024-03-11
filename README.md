# React App with Microsoft Clarity Integration

This React application consists of a user registration form with Microsoft Clarity for user behavior analytics. This README file will guide you through the application structure and Clarity integration.

## Application Structure

The application provides a user registration form sign up fields. The code snippet for this form component is as follows:

```jsx
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
root: {
'& > *': {
margin: theme.spacing(1),
width: '25ch',
},
},
}));

export default function UserForm() {
const classes = useStyles();
return (
<form className={classes.root} noValidate autoComplete="off">
<TextField id="name" label="Name" variant="outlined" />
<TextField id="email" label="Email" variant="outlined" />
<TextField id="username" label="Username" variant="outlined" />
<TextField
id="password"
label="Password"
type="password"
autoComplete="current-password"
variant="outlined"
/>
<Button variant="contained" color="primary">
Submit
</Button>
</form>
);
}
```

## Microsoft Clarity Integration

The integration with Microsoft Clarity is executed using a loader component which inserts Clarity's tracking script into the DOM based on a condition. Below is the code that accomplishes this:

```jsx
import React, { useEffect } from "react";

function ClarityLoader() {
useEffect(()=> {
const userShouldBeTracked = true;
if(userShouldBeTracked){
(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "lcjetzgzl1");
}
}, [])
return null;
}
```

## Available Scripts
This project was bootstrapped with Create React App and maintains all the usual scripts:

- `npm start`: Runs the app in the development mode
- `npm test`: Launches the test runner in the interactive watch mode
- `npm run build`: Builds the app for production to the `build` folder
- `npm run eject`: Removes the single build dependency, offering more configuration control
