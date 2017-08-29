
const aws = require('aws-sdk');
aws.config.loadFromPath('./AwsConfig.json');

const s3 = new aws.S3();
const bucket_name = 'notes.test';

const fs = require('fs');

const list = () => {
  s3.listObjects({
    Bucket: bucket_name
  }, function(err, data){
    //console.log(data);
    data.Contents.map(x => {
      console.log(x.Key);
    })
  })
}

const add = (title,body)=> {

  var base64data = new Buffer(body, 'binary');
  s3.putObject({
     ACL: 'public-read',
     Bucket: bucket_name,
     Key: title,
     Body: base64data
   }, function(err, data) {
     if (err) return console.error(err);
     console.log('uploaded Note[' + title + '] to S3 ');
   });

}

const remove = (title) => {
  console.log('remove', title);
  
  
}

module.exports =  {
  add,
  list,
  remove
}
