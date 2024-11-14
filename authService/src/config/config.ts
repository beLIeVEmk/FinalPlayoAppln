export const config={
    db:{
        mongo:{
            collections:{
                user:"user"
            },
            database:{
                playo:"playo",
                connectionString:'mongodb://localhost/playo'
            }
        },
    },
    jwt:{
        expiryTime:'1d',
        secretKey:'jwtSecret'
    }
}