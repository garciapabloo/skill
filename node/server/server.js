const express = require ('express')
const app = express()
const port = 3000
var fs = require('fs');



app.get('/', (req, res) => {
    
    //console.log(__dirname + "/users.json");
    
    fs.readFile('/home/pablo/skillAvalith/node/server/users.json', function(err, data){

        if (err) return err;
        let users = JSON.parse(data);
        console.log(users);

        res.json(users)

      //  res.json( 'users.json' );
      //  res.write(data);
        
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));