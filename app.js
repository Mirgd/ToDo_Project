const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override')



app.use(methodOverride('_method', { methods: ['POST', 'GET'] }));
// set the ejs as a default view engine
app.set("view engine", "ejs");
// set the middle ware for communication
app.use(express.urlencoded({ extended: true }));
mongoose.connect('mongodb://0.0.0.0:27017/ToDo', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
     console.log('Connected to DB') 
}
).catch((err) => { 
    console.log('Faild to connect')
    console.log(err) 
})
const router = require('./routes/tasks')
app.use('/', router)       
//insert
//app.post('/create',);

// find
// app.get('/',);
// delete
// app.delete('/delete/:id',)

// update
// app.get('/update/:id',)
// app.put('/update/:id',);
app.listen(3000, () => console.log('Express is running'))