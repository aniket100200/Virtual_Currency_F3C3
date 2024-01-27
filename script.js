const bottom=document.querySelector(".bottom"),
sortByMktCap=document.querySelector(".sort_cap"),
sortByPer=document.querySelector(".sort_per");

let fData=[{"id":"bitcoin","symbol":"btc","name":"Bitcoin","image":"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400","current_price":41682,"market_cap":817332366277,"market_cap_rank":1,"fully_diluted_valuation":875261686003,"total_volume":24727177393,"high_24h":42195,"low_24h":40085,"price_change_24h":1570.75,"price_change_percentage_24h":3.91601,"market_cap_change_24h":29641764929,"market_cap_change_percentage_24h":3.76312,"circulating_supply":19610112.0,"total_supply":21000000.0,"max_supply":21000000.0,"ath":69045,"ath_change_percentage":-39.69565,"ath_date":"2021-11-10T14:24:11.849Z","atl":67.81,"atl_change_percentage":61303.35062,"atl_date":"2013-07-06T00:00:00.000Z","roi":null,"last_updated":"2024-01-27T09:59:36.052Z"},{"id":"ethereum","symbol":"eth","name":"Ethereum","image":"https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628","current_price":2265.86,"market_cap":272147480736,"market_cap_rank":2,"fully_diluted_valuation":272146702505,"total_volume":9791772326,"high_24h":2280.63,"low_24h":2206.34,"price_change_24h":55.28,"price_change_percentage_24h":2.50051,"market_cap_change_24h":4891026857,"market_cap_change_percentage_24h":1.83009,"circulating_supply":120180302.955156,"total_supply":120179959.288654,"max_supply":null,"ath":4878.26,"ath_change_percentage":-53.58088,"ath_date":"2021-11-10T14:24:19.604Z","atl":0.432979,"atl_change_percentage":522892.20012,"atl_date":"2015-10-20T00:00:00.000Z","roi":{"times":71.67151096085453,"currency":"btc","percentage":7167.151096085453},"last_updated":"2024-01-27T09:59:32.759Z"},{"id":"tether","symbol":"usdt","name":"Tether","image":"https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661","current_price":0.999691,"market_cap":96031404406,"market_cap_rank":3,"fully_diluted_valuation":96031404406,"total_volume":23261924885,"high_24h":1.002,"low_24h":0.997415,"price_change_24h":0.00193329,"price_change_percentage_24h":0.19376,"market_cap_change_24h":354230150,"market_cap_change_percentage_24h":0.37023,"circulating_supply":96036749591.5366,"total_supply":96036749591.5366,"max_supply":null,"ath":1.32,"ath_change_percentage":-24.38609,"ath_date":"2018-07-24T00:00:00.000Z","atl":0.572521,"atl_change_percentage":74.74366,"atl_date":"2015-03-02T00:00:00.000Z","roi":null,"last_updated":"2024-01-27T09:55:24.420Z"},{"id":"binancecoin","symbol":"bnb","name":"BNB","image":"https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970","current_price":303.99,"market_cap":46737837962,"market_cap_rank":4,"fully_diluted_valuation":46737837962,"total_volume":837069065,"high_24h":307.06,"low_24h":296.32,"price_change_24h":7.66,"price_change_percentage_24h":2.58544,"market_cap_change_24h":879795471,"market_cap_change_percentage_24h":1.91852,"circulating_supply":153856150.0,"total_supply":153856150.0,"max_supply":200000000.0,"ath":686.31,"ath_change_percentage":-55.73064,"ath_date":"2021-05-10T07:24:17.097Z","atl":0.0398177,"atl_change_percentage":762936.36455,"atl_date":"2017-10-19T00:00:00.000Z","roi":null,"last_updated":"2024-01-27T09:59:23.202Z"},{"id":"solana","symbol":"sol","name":"Solana","image":"https://assets.coingecko.com/coins/images/4128/large/solana.png?1696504756","current_price":91.96,"market_cap":39799331635,"market_cap_rank":5,"fully_diluted_valuation":52181684271,"total_volume":2172725820,"high_24h":93.47,"low_24h":87.43,"price_change_24h":4.23,"price_change_percentage_24h":4.8275,"market_cap_change_24h":1494362816,"market_cap_change_percentage_24h":3.90122,"circulating_supply":433260186.828978,"total_supply":568055928.259408,"max_supply":null,"ath":259.96,"ath_change_percentage":-64.69142,"ath_date":"2021-11-06T21:54:35.825Z","atl":0.500801,"atl_change_percentage":18228.21666,"atl_date":"2020-05-11T19:35:23.449Z","roi":null,"last_updated":"2024-01-27T09:59:27.820Z"},{"id":"ripple","symbol":"xrp","name":"XRP","image":"https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442","current_price":0.528956,"market_cap":28755884540,"market_cap_rank":6,"fully_diluted_valuation":52878490366,"total_volume":862519923,"high_24h":0.535152,"low_24h":0.51275,"price_change_24h":0.01620666,"price_change_percentage_24h":3.16073,"market_cap_change_24h":757772756,"market_cap_change_percentage_24h":2.70651,"circulating_supply":54374512255.0,"total_supply":99987956150.0,"max_supply":100000000000.0,"ath":3.4,"ath_change_percentage":-84.45975,"ath_date":"2018-01-07T00:00:00.000Z","atl":0.00268621,"atl_change_percentage":19560.72086,"atl_date":"2014-05-22T00:00:00.000Z","roi":null,"last_updated":"2024-01-27T09:59:35.901Z"},{"id":"usd-coin","symbol":"usdc","name":"USDC","image":"https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694","current_price":1.0,"market_cap":26111875638,"market_cap_rank":7,"fully_diluted_valuation":25487993140,"total_volume":5119555820,"high_24h":1.003,"low_24h":0.997126,"price_change_24h":0.00293664,"price_change_percentage_24h":0.29451,"market_cap_change_24h":80111799,"market_cap_change_percentage_24h":0.30775,"circulating_supply":26094247293.1651,"total_supply":25470785983.8999,"max_supply":null,"ath":1.17,"ath_change_percentage":-14.68556,"ath_date":"2019-05-08T00:40:28.300Z","atl":0.877647,"atl_change_percentage":13.99664,"atl_date":"2023-03-11T08:02:13.981Z","roi":null,"last_updated":"2024-01-27T09:59:31.872Z"},{"id":"staked-ether","symbol":"steth","name":"Lido Staked Ether","image":"https://assets.coingecko.com/coins/images/13442/large/steth_logo.png?1696513206","current_price":2265.13,"market_cap":21222566573,"market_cap_rank":8,"fully_diluted_valuation":21222566573,"total_volume":14825337,"high_24h":2279.09,"low_24h":2205.8,"price_change_24h":53.85,"price_change_percentage_24h":2.4353,"market_cap_change_24h":403463759,"market_cap_change_percentage_24h":1.93795,"circulating_supply":9371588.82499379,"total_supply":9371588.82499379,"max_supply":9371588.82499379,"ath":4829.57,"ath_change_percentage":-53.12637,"ath_date":"2021-11-10T14:40:47.256Z","atl":482.9,"atl_change_percentage":368.79535,"atl_date":"2020-12-22T04:08:21.854Z","roi":null,"last_updated":"2024-01-27T09:59:27.295Z"},{"id":"cardano","symbol":"ada","name":"Cardano","image":"https://assets.coingecko.com/coins/images/975/large/cardano.png?1696502090","current_price":0.479529,"market_cap":16811127335,"market_cap_rank":9,"fully_diluted_valuation":21558298400,"total_volume":364660581,"high_24h":0.489724,"low_24h":0.470141,"price_change_24h":0.00938789,"price_change_percentage_24h":1.99682,"market_cap_change_24h":180828436,"market_cap_change_percentage_24h":1.08734,"circulating_supply":35090929536.8906,"total_supply":45000000000.0,"max_supply":45000000000.0,"ath":3.09,"ath_change_percentage":-84.50332,"ath_date":"2021-09-02T06:00:10.474Z","atl":0.01925275,"atl_change_percentage":2384.67781,"atl_date":"2020-03-13T02:22:55.044Z","roi":null,"last_updated":"2024-01-27T09:59:33.703Z"},{"id":"avalanche-2","symbol":"avax","name":"Avalanche","image":"https://assets.coingecko.com/coins/images/12559/large/Avalanche_Circle_RedWhite_Trans.png?1696512369","current_price":32.18,"market_cap":11790032118,"market_cap_rank":10,"fully_diluted_valuation":13975398164,"total_volume":542858732,"high_24h":32.98,"low_24h":30.89,"price_change_24h":1.11,"price_change_percentage_24h":3.57985,"market_cap_change_24h":345827838,"market_cap_change_percentage_24h":3.02186,"circulating_supply":367036951.595786,"total_supply":435069852.921509,"max_supply":720000000.0,"ath":144.96,"ath_change_percentage":-77.83835,"ath_date":"2021-11-21T14:18:56.538Z","atl":2.8,"atl_change_percentage":1046.91384,"atl_date":"2020-12-31T13:15:21.540Z","roi":null,"last_updated":"2024-01-27T09:59:24.880Z"}];
function showData(arr)
{
    bottom.innerHTML="";
    arr.forEach((i)=>
    {
        bottom.innerHTML+=
        `
        <div class="item">
                    <div>
                        <img src="${i.image}">
                        <p>${i.name}</p>
                    </div>
                    <div class="symbol">
                        ${i.symbol.toUpperCase()}
                    </div> 
                    <div class="current_price">
                      $ ${i.current_price}
                    </div>
                    <div class="total_volume">
                       $ ${i.total_volume}
                    </div>
                    <div class="price_change_percentage_24h ${i.price_change_24h<0 ? 'dec' : 'inc'}">
                        ${i.price_change_percentage_24h}%
                    </div>
                    <div class="market_cap">
                       Mkt Cap: $ ${i.market_cap}
                    </div>
                </div>
        `
    });
};

fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
.then(e=>e.json())
.then(data=>{
    console.log(typeof data);
    const arr=Object.keys(data).map(key=>data[key]);
   fData=arr;
  showData(fData);
})


sortByMktCap.addEventListener('click',(e)=>{
    fData.sort((a,b)=>{
        return b.market_cap-a.market_cap;
    });
    showData(fData);    
});

sortByPer.addEventListener('click',(e)=>{
    fData.sort((a,b)=>{
        return a.price_change_percentage_24h-b.price_change_percentage_24h;
    });
    showData(fData);   
});



//I'll use Debouncing..

const input=document.querySelector("input");

let timeout;
input.addEventListener('input',(e)=>{
   debouncing(input.value.toLowerCase());
});

function debouncing(tar)
{
    clearTimeout(timeout);
   timeout = setTimeout(()=>{
       let dataToShow= fData.filter(ele=>{
        let eleName=ele.name.toLowerCase();
        let symbol=ele.symbol.toLowerCase();
        if(eleName.indexOf(tar)!=-1 || symbol.indexOf(tar)!=-1)return true;
        return false;
       });

       showData(dataToShow);
    },500);
}






