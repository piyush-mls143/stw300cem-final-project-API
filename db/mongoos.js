const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/jobhubdbu01', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify:false
})