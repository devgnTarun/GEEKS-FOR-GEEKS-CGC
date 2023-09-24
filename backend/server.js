require('dotenv').config({path : 'backend/db/config.env'})
const app = require('./app')
const connectToMongo = require('./db/db')


const port = process.env.PORT  || 5000

connectToMongo()


app.listen(port , () => {
    console.log(`Server running on port ${port} `)
})
