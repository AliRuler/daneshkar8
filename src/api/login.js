export const Login = (username, password) => {
    return new Promise((resolve, reject) => {
        //pending
        if (username === 'soheil' && password === '1234') {
            //fulfilled
            setTimeout(() => {
                resolve({
                    name: 'soheil',
                    age: 12,
                    country: 'iran'
                })
            }, 6000)
        } else {
            //rejected
            reject('invalid password or username')
        }
    })
}
