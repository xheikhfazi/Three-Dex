require("dotenv").config()
const Web3 = require('web3');

const abis = require('./abis');
const { mainnet: addresses } = require('./addresses');

const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/269e68ee0f9c41c283017f6764ca2816'));


const uniswap = new web3.eth.Contract(abis.uniswap.uniswap,addresses.uniswap.router)

const add ='0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F';
const sushi = new web3.eth.Contract(abis.sushi.sushi,add)

const ONE_WEI = web3.utils.toBN(web3.utils.toWei('1'));
const rc= web3.utils.toBN(web3.utils.toWei('1'));
// const DIRECTION =
// {
//   SUSHI_TO_UNISWAP: 0,
//   UNISWAP_TO_SUSHI: 1
// };

const init = async () => {
  const networkId = await web3.eth.net.getId();


  let gh =await sushi.methods.getAmountOut(rc,'0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2','0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48').call();

  gh=gh/1e6;
  console.log(gh);
  // let ethPrice;
  // const updateEthPrice = async () => {
  //   const results = await uniswap.methods.getAmountsOut(AMOUNT_ETH_WEI, [addresses.tokens.weth, addresses.tokens.usdc]).call();   //ETH to USDC 
  //   ethPrice = web3.utils.toBN(AMOUNT_ETH_WEI).mul(web3.utils.toBN(results[1])).div(ONE_WEI);
  // }
  // await updateEthPrice();
  // setInterval(updateEthPrice, 15000);

  // web3.eth.subscribe('newBlockHeaders')
  //   .on('data', async block => {
  //     console.log(`New block received. Block # ${block.number}`);

  //     const ONE_WEI = web3.utils.toBN(web3.utils.toWei(web3.utils.toBN('1')));
  //     const up= web3.utils.toBN(web3.utils.toWei(web3.utils.toBN('1')));

  //     // sushi.getAmountsOut(up, [addresses.tokens.eth, addresses.tokens.usdc]);

  //       const amountsOut1 = await sushi.methods.getAmountOut(up, [addresses.tokens.eth, addresses.tokens.usdc]).call();
  //       // console.log(amountsOut1);
  //       //ETH to USDC
  //     // // const amountsOut2 = await uniswap.methods.getAmountsOut(AMOUNT_ETH_WEI, [addresses.tokens.eth, addresses.tokens.usdc]).call();    //ETH to USDC
      
      
  //     // console.log(`Sushi -> Uniswap. ETH input / output: ${web3.utils.fromWei(AMOUNT_ETH_WEI.toString())} / ${web3.utils.fromWei(amountsOut1[1].toString())}`);
  //     // console.log(`Uniswap -> Sushi. ETH input / output: ${web3.utils.fromWei(AMOUNT_ETH_WEI.toString())} / ${web3.utils.fromWei(amountsOut2[1].toString())}`);

  //   //   const usdcFromSushi = web3.utils.toBN(amountsOut1[1]);
  //   //   const usdcFromUniswap = web3.utils.toBN(amountsOut2[1]);


  //   //   let direction;
  //   //   if (usdcFromSushi.gt(usdcFromUniswap)) {
  //   //     direction = DIRECTION.SUSHI_TO_UNISWAP;
  //   //     console.log(`Sushi -> Uniswap is more profitable`);
  //   //   } else {
  //   //     direction = DIRECTION.UNISWAP_TO_SUSHI;
  //   //     console.log(`Uniswap -> Sushi is more profitable`);
  //   //   }
    
  //   //   if (direction === DIRECTION.SUSHI_TO_UNISWAP) {
  //   //     // Sushi -> Uniswap swap
  //   //     const tx = await sushi.methods.swapETHForExactTokens(AMOUNT_ETH_WEI, usdcFromSushi, addresses.tokens.usdc, addresses.uniswap.router).send({
  //   //       from: process.env.WALLET_ADDRESS,
  //   //       gasPrice: web3.utils.toWei('60', 'gwei')
  //   //     });
  //   //     console.log(`Sushi -> Uniswap swap tx: ${tx.transactionHash}`);
  //   //   } else {
  //   //     // Uniswap -> Sushi swap
  //   //     const tx = await uniswap.methods.swapETHForExactTokens(AMOUNT_ETH_WEI, usdcFromUniswap, addresses.tokens.usdc, addresses.sushi.router).send({
  //   //       from: process.env.WALLET_ADDRESS,
  //   //       gasPrice: web3.utils.toWei('60', 'gwei')
  //   //     });
  //   //     console.log(`Uniswap -> Sushi swap tx: ${tx.transactionHash}`);
  //   //   }
  //   })
  //   .on('error', error => {
  //     console.error(`Error: ${error}`);
  //   });
    
  }

  init();