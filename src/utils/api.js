import { getEnv } from "./env";

export const login = async (loginFields) => {
    const response = await fetch(`${getEnv()}/api/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            Email: loginFields.email,
            Password: loginFields.password
        })
    })
    if (!response.ok) {
        console.log("response not ok");
        throw new Error('Data could not be fetched!')
    } else {
        console.log("response is ok");
        return response.text()
    }
}

export const signup = async (loginFields) => {
    debugger;
    const response = await fetch(`${getEnv()}/api/signup`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            Email: loginFields.email,
            Password: loginFields.password1,
            SurName: loginFields.last_name,
            FirstName: loginFields.first_name
        })
    })
    if (!response.ok) {
        throw new Error('Data could not be fetched!')
    } else {
        return response.text()
    }
}

// export const mapCountry = async (value) => {
//     debugger;
//     const apiURL = 'https://localhost:44303/api/map/';
//     fetch(apiURL + value, {
//         method: 'GET',
//         headers: new Headers({
//             'Content-Type': 'application/json; charset=UTF-8',
//             'Accept': 'application/json; charset=UTF-8'
//         })
//         // body: JSON.stringify({
//         //     country: value
//         // })
//     })
//         .then(response => {
//             console.log('response= ', response);
//             console.log('response statuse=', response.status);
//             console.log('response.ok=', response.ok)

//             return response.json()
//         })

//         .then(
//             (result) => {
//                 console.log("fetch get user by id=", result);
//                 console.log(result[0]);
//                 return result[0];
//             },
//             (error) => {
//                 console.log("err post=", error);
//             });

//     //     .then(response => {
//     //         console.log('response= ', response);
//     //     })
//     // if (response.ok) {
//     //     console.log("response is ok");
//     //     // return response;
//     // } else {
//     //     console.log("response not ok");
//     //     throw new Error('Data could not be fetched!')

//     // }
// }