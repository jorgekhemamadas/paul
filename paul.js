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

//

//
    else if(process.argv[3] == 'tunnelssh'){
//    const proxyscrape_http = await axios.get('https://api.proxyscrape.com/v2/?request=displayproxies&protocol=http&timeout=10000&country=all&ssl=all&anonymity=all');
//    const proxyscrape_http = await axios.get('https://api.proxyscrape.com/v2/?request=getproxies&protocol=http&timeout=10000&country=all&ssl=all&anonymity=all');
//    const proxyscrape_http = await axios.get('http://free-proxy.cz/es/proxylist/country/CO/all/ping/all');
//    const proxyscrape_http = await axios.get('https://free-proxy-list.net/anonymous-proxy.html');
//    const proxyscrape_http = await axios.get('https://free-proxy-list.net/');
//    const proxyscrape_http = await axios.get('https://www.sslproxies.org/');
//    const proxyscrape_http = await axios.get('https://www.us-proxy.org/');
//////    const proxyscrape_http = await axios.get('https://raw.githubusercontent.com/jorgekhemamadas/Server-PW.1/main/server.1');

//
try {
	const proxyscrape_http = await axios.get(`https://api.proxyscrape.com/v2/?request=displayproxies&protocol=http&timeout=10000&country=all&ssl=all&anonymity=all`);
} catch (error) {
console.log("")
console.log("  error al intentar conectar con el tunnel ssh :(".red)
console.log("")
	// errors
}
//
//        const proxyscrape_http = await axios.get(`http://localhost:9999/`);
      const proxyscrape_http = await axios.get(`https://api.proxyscrape.com/v2/?request=displayproxies&protocol=http&timeout=10000&country=all&ssl=all&anonymity=all`);
      var proxies = proxyscrape_http.data.replace(/\r/g, '').split('\n');

    }
    else{
      console.log('tunnelssh!!!')
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
    else if(process.argv[3] == 'tunnelssh'){
      let tunnelssh = proxies[Math.floor(Math.random() * proxies.length)];
      var agent = new HttpsProxyAgent('http://' + tunnelssh);
      var url=process.argv[2]
      var cung={

        url:process.argv[2],
        httpsAgent: agent,
        medthod:'get',
//        headers:{
  //         'Cache-Control': 'no-cache',
    //       'User-Agent': fakeUa()
        headers:{
        'User-Agent': fakeUa(),
        'Upgrade-Insecure-Requests': '300',
        'Connection':'Keep-Alive',
        'Keep-Alive': 'timeout=1,max=5',
        'Origin': 'http://' + tunnelssh,
        'Referrer': 'http://google.com/' + tunnelssh,
        'X-Forwarded-For': tunnelssh

        }
      }

      var today = new Date();
      var now = today.toLocaleTimeString('en-US');

      axios(cung).then(function (res){
console.log("",now.gray,"[Paul Walker] conexion aceptada".green,res.status,url.gray,tunnelssh.blue)
//console.log("[Paul Walker] proxy aceptado".green,res.status+proxy.blue)
//        console.log("[Paul Walker] proxy aceptado".green,res.status)
      }).catch(function (error){
console.log("",now.gray,"[Paul Walker] conexion denegada".red,error.response.status,url.gray,tunnelssh.blue)
//        console.log("[Paul Walker] proxy rechazado".red,error.response.status)
//var today = new Date();
//var now = today.toLocaleTimeString('en-US');
//console.log(now);
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
      console.log("\033\143")
      console.log('     P A U L  W A L K E R     '.inverse)
//var today = new Date();
//var now = today.toLocaleTimeString('en-US');
//console.log(now);
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
