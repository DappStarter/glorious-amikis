require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remain color harvest forget fresh gate'; 
let testAccounts = [
"0x4bf90b707484b0ad479ece0fc8e185289a6df99c4833325186140215239ed353",
"0x411fff34c57866a97b2e5556154d7a8be177fb27d8909b2ba25d33bf00f11642",
"0x640479fd1f1795b324b729efb7c1fee0a9961f5d9dbea9671babb78fb9d06da6",
"0xf88d88221adec8100cd7c2c9e23ede24899e6d5bd2e8f5a2386535825ae4a9c2",
"0xe658698e43b99fbf57ef19ebd5a51059f234eea8e76657aa430e809337f7ec66",
"0x64a277579700f0c1d4548769607dc5a57c9e5a228977b634a64ac567c7a4cb1b",
"0x26adbe3daae4a25c9e2723b0dee2acd5bc684ed5e4f10b7db4e9950170996df5",
"0x1e945a113a685d4668d84725b74428ab5afc0072e117b51b7cd3b3c0e9aad80b",
"0x01ddf07e56f31862678c532abafcc6e6e18455207994fa65440e54d350a88a18",
"0xb613946afa882eb1f9e9365f59ce9dee5a4ea3eea391c7ab9c43c99034136d5a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
