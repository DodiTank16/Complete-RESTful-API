const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/Olymics", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection Successfully Done");
}).catch((e) => {
    console.log("Connection Unsuccessful", e);

})