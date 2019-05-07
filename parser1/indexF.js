const osmosis = require( "osmosis" ), fs = require( "fs" ),

        MongoClient = require( "mongodb" ).MongoClient,
        url = "mongodb://localhost:27017/",
        mongoClient = new MongoClient( url, { useNewUrlParser: true });         // create host connection

var json = {}, element = {}, i = 0;

osmosis
    .get( "https://stackoverflow.com" )                                         // request to http(s)://...
    .find( ".question-summary" )                                                // find needed class
    .set({                                                                      // create needed item via classes
        name: ".summary h3 a", stats: { 
            votes: ".votes .mini-counts span",
            answers: ".status .mini-counts span",
            views: ".views .mini-counts span"
        }                        
                    
    })
    .data(( data ) => {                                                         // work with on data
        json[ "post_" + i ] = { post_name: data.name, post_stats: data.stats }; i++;
    })
    .done( () => {
        fs.writeFileSync( "data.json", JSON.stringify( json ), ( err ) => {     // write data to needed file
            if ( err ) throw err;                             
        });

        mongoClient.connect(( err, client ) => {                                // write data to mongodb
            if ( err ) { throw err } 
            else {
                const db = client.db( "my_db" );
                const collection = db.collection( "my_coll" );
                collection.insertOne( json, function( err, result ) {
                    if ( err ) throw err;
                    client.close();
                });
            }
        });
    });