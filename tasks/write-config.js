var fs = require('fs');

var config = {
  domain: process.env.DOMAIN,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  appToken: process.env.APPTOKEN,
  adminEmail: "",
  emailUponError: "false",
  logDatasetID: "",
  outgoingMailServer: "",
  smtpPort: "",
  sslPort: "",
  smtpUsername: "",
  smtpPassword: "",
  filesizeChunkingCutoffMB: "10",
  numRowsPerChunk: "10000"
};

var control = {
  "action" : "Replace", 
  "csv" :
    {
      "useSocrataGeocoding": false,
      "columns": null,
      "skip": 0,
      "fixedTimestampFormat": ["ISO8601","MM/dd/yy","MM/dd/yyyy","dd-MMM-yyyy"],
      "floatingTimestampFormat": ["ISO8601","MM/dd/yy","MM/dd/yyyy","dd-MMM-yyyy"],
      "timezone": "UTC",
      "separator": ",",
      "quote": "\"",
      "encoding": "utf-8",
      "emptyTextIsNull": true,
      "trimWhitespace": true,
      "trimServerWhitespace": true,
      "overrides": {}
    }
};

fs.writeFile('config.json', JSON.stringify(config), function(err) {
  if(err) {
    console.log('Failed to write config.json.');
  } else {
    console.log("config.json written!");
  }
}); 

fs.writeFile('control.json', JSON.stringify(control), function(err) {
  if(err) {
    console.log('Failed to write control.json.');
  } else {
    console.log("control.json written!");
  }
}); 
