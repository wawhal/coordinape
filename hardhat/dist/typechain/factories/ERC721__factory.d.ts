import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC721, ERC721Interface } from "../ERC721";
export declare class ERC721__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(name_: string, symbol_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ERC721>;
    getDeployTransaction(name_: string, symbol_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC721;
    connect(signer: Signer): ERC721__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b506040516200272b3803806200272b833981810160405281019062000037919062000193565b81600090805190602001906200004f92919062000071565b5080600190805190602001906200006892919062000071565b50505062000376565b8280546200007f906200029b565b90600052602060002090601f016020900481019282620000a35760008555620000ef565b82601f10620000be57805160ff1916838001178555620000ef565b82800160010185558215620000ef579182015b82811115620000ee578251825591602001919060010190620000d1565b5b509050620000fe919062000102565b5090565b5b808211156200011d57600081600090555060010162000103565b5090565b60006200013862000132846200022f565b62000206565b9050828152602081018484840111156200015157600080fd5b6200015e84828562000265565b509392505050565b600082601f8301126200017857600080fd5b81516200018a84826020860162000121565b91505092915050565b60008060408385031215620001a757600080fd5b600083015167ffffffffffffffff811115620001c257600080fd5b620001d08582860162000166565b925050602083015167ffffffffffffffff811115620001ee57600080fd5b620001fc8582860162000166565b9150509250929050565b60006200021262000225565b9050620002208282620002d1565b919050565b6000604051905090565b600067ffffffffffffffff8211156200024d576200024c62000336565b5b620002588262000365565b9050602081019050919050565b60005b838110156200028557808201518184015260208101905062000268565b8381111562000295576000848401525b50505050565b60006002820490506001821680620002b457607f821691505b60208210811415620002cb57620002ca62000307565b5b50919050565b620002dc8262000365565b810181811067ffffffffffffffff82111715620002fe57620002fd62000336565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6123a580620003866000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb46514610224578063b88d4fde14610240578063c87b56dd1461025c578063e985e9c51461028c576100cf565b80636352211e146101a657806370a08231146101d657806395d89b4114610206576100cf565b806301ffc9a7146100d457806306fdde0314610104578063081812fc14610122578063095ea7b31461015257806323b872dd1461016e57806342842e0e1461018a575b600080fd5b6100ee60048036038101906100e9919061167f565b6102bc565b6040516100fb91906119f9565b60405180910390f35b61010c61039e565b6040516101199190611a14565b60405180910390f35b61013c600480360381019061013791906116d1565b610430565b6040516101499190611992565b60405180910390f35b61016c60048036038101906101679190611643565b6104b5565b005b6101886004803603810190610183919061153d565b6105cd565b005b6101a4600480360381019061019f919061153d565b61062d565b005b6101c060048036038101906101bb91906116d1565b61064d565b6040516101cd9190611992565b60405180910390f35b6101f060048036038101906101eb91906114d8565b6106ff565b6040516101fd9190611bb6565b60405180910390f35b61020e6107b7565b60405161021b9190611a14565b60405180910390f35b61023e60048036038101906102399190611607565b610849565b005b61025a6004803603810190610255919061158c565b6109ca565b005b610276600480360381019061027191906116d1565b610a2c565b6040516102839190611a14565b60405180910390f35b6102a660048036038101906102a19190611501565b610ad3565b6040516102b391906119f9565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061038757507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610397575061039682610b67565b5b9050919050565b6060600080546103ad90611ddb565b80601f01602080910402602001604051908101604052809291908181526020018280546103d990611ddb565b80156104265780601f106103fb57610100808354040283529160200191610426565b820191906000526020600020905b81548152906001019060200180831161040957829003601f168201915b5050505050905090565b600061043b82610bd1565b61047a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047190611b16565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006104c08261064d565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610531576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052890611b76565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610550610c3d565b73ffffffffffffffffffffffffffffffffffffffff16148061057f575061057e81610579610c3d565b610ad3565b5b6105be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105b590611ab6565b60405180910390fd5b6105c88383610c45565b505050565b6105de6105d8610c3d565b82610cfe565b61061d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061490611b96565b60405180910390fd5b610628838383610ddc565b505050565b610648838383604051806020016040528060008152506109ca565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156106f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ed90611af6565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610770576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161076790611ad6565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600180546107c690611ddb565b80601f01602080910402602001604051908101604052809291908181526020018280546107f290611ddb565b801561083f5780601f106108145761010080835404028352916020019161083f565b820191906000526020600020905b81548152906001019060200180831161082257829003601f168201915b5050505050905090565b610851610c3d565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156108bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108b690611a76565b60405180910390fd5b80600560006108cc610c3d565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16610979610c3d565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516109be91906119f9565b60405180910390a35050565b6109db6109d5610c3d565b83610cfe565b610a1a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a1190611b96565b60405180910390fd5b610a2684848484611038565b50505050565b6060610a3782610bd1565b610a76576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a6d90611b56565b60405180910390fd5b6000610a80611094565b90506000815111610aa05760405180602001604052806000815250610acb565b80610aaa846110ab565b604051602001610abb92919061196e565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610cb88361064d565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610d0982610bd1565b610d48576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d3f90611a96565b60405180910390fd5b6000610d538361064d565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610dc257508373ffffffffffffffffffffffffffffffffffffffff16610daa84610430565b73ffffffffffffffffffffffffffffffffffffffff16145b80610dd35750610dd28185610ad3565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610dfc8261064d565b73ffffffffffffffffffffffffffffffffffffffff1614610e52576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e4990611b36565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ec2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eb990611a56565b60405180910390fd5b610ecd838383611258565b610ed8600082610c45565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f289190611cf1565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f7f9190611c6a565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b611043848484610ddc565b61104f8484848461125d565b61108e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161108590611a36565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606060008214156110f3576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611253565b600082905060005b6000821461112557808061110e90611e3e565b915050600a8261111e9190611cc0565b91506110fb565b60008167ffffffffffffffff811115611167577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156111995781602001600182028036833780820191505090505b5090505b6000851461124c576001826111b29190611cf1565b9150600a856111c19190611e87565b60306111cd9190611c6a565b60f81b818381518110611209577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856112459190611cc0565b945061119d565b8093505050505b919050565b505050565b600061127e8473ffffffffffffffffffffffffffffffffffffffff166113f4565b156113e7578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026112a7610c3d565b8786866040518563ffffffff1660e01b81526004016112c994939291906119ad565b602060405180830381600087803b1580156112e357600080fd5b505af192505050801561131457506040513d601f19601f8201168201806040525081019061131191906116a8565b60015b611397573d8060008114611344576040519150601f19603f3d011682016040523d82523d6000602084013e611349565b606091505b5060008151141561138f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161138690611a36565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506113ec565b600190505b949350505050565b600080823b905060008111915050919050565b600061141a61141584611bf6565b611bd1565b90508281526020810184848401111561143257600080fd5b61143d848285611d99565b509392505050565b60008135905061145481612313565b92915050565b6000813590506114698161232a565b92915050565b60008135905061147e81612341565b92915050565b60008151905061149381612341565b92915050565b600082601f8301126114aa57600080fd5b81356114ba848260208601611407565b91505092915050565b6000813590506114d281612358565b92915050565b6000602082840312156114ea57600080fd5b60006114f884828501611445565b91505092915050565b6000806040838503121561151457600080fd5b600061152285828601611445565b925050602061153385828601611445565b9150509250929050565b60008060006060848603121561155257600080fd5b600061156086828701611445565b935050602061157186828701611445565b9250506040611582868287016114c3565b9150509250925092565b600080600080608085870312156115a257600080fd5b60006115b087828801611445565b94505060206115c187828801611445565b93505060406115d2878288016114c3565b925050606085013567ffffffffffffffff8111156115ef57600080fd5b6115fb87828801611499565b91505092959194509250565b6000806040838503121561161a57600080fd5b600061162885828601611445565b92505060206116398582860161145a565b9150509250929050565b6000806040838503121561165657600080fd5b600061166485828601611445565b9250506020611675858286016114c3565b9150509250929050565b60006020828403121561169157600080fd5b600061169f8482850161146f565b91505092915050565b6000602082840312156116ba57600080fd5b60006116c884828501611484565b91505092915050565b6000602082840312156116e357600080fd5b60006116f1848285016114c3565b91505092915050565b61170381611d25565b82525050565b61171281611d37565b82525050565b600061172382611c27565b61172d8185611c3d565b935061173d818560208601611da8565b61174681611f74565b840191505092915050565b600061175c82611c32565b6117668185611c4e565b9350611776818560208601611da8565b61177f81611f74565b840191505092915050565b600061179582611c32565b61179f8185611c5f565b93506117af818560208601611da8565b80840191505092915050565b60006117c8603283611c4e565b91506117d382611f85565b604082019050919050565b60006117eb602483611c4e565b91506117f682611fd4565b604082019050919050565b600061180e601983611c4e565b915061181982612023565b602082019050919050565b6000611831602c83611c4e565b915061183c8261204c565b604082019050919050565b6000611854603883611c4e565b915061185f8261209b565b604082019050919050565b6000611877602a83611c4e565b9150611882826120ea565b604082019050919050565b600061189a602983611c4e565b91506118a582612139565b604082019050919050565b60006118bd602c83611c4e565b91506118c882612188565b604082019050919050565b60006118e0602983611c4e565b91506118eb826121d7565b604082019050919050565b6000611903602f83611c4e565b915061190e82612226565b604082019050919050565b6000611926602183611c4e565b915061193182612275565b604082019050919050565b6000611949603183611c4e565b9150611954826122c4565b604082019050919050565b61196881611d8f565b82525050565b600061197a828561178a565b9150611986828461178a565b91508190509392505050565b60006020820190506119a760008301846116fa565b92915050565b60006080820190506119c260008301876116fa565b6119cf60208301866116fa565b6119dc604083018561195f565b81810360608301526119ee8184611718565b905095945050505050565b6000602082019050611a0e6000830184611709565b92915050565b60006020820190508181036000830152611a2e8184611751565b905092915050565b60006020820190508181036000830152611a4f816117bb565b9050919050565b60006020820190508181036000830152611a6f816117de565b9050919050565b60006020820190508181036000830152611a8f81611801565b9050919050565b60006020820190508181036000830152611aaf81611824565b9050919050565b60006020820190508181036000830152611acf81611847565b9050919050565b60006020820190508181036000830152611aef8161186a565b9050919050565b60006020820190508181036000830152611b0f8161188d565b9050919050565b60006020820190508181036000830152611b2f816118b0565b9050919050565b60006020820190508181036000830152611b4f816118d3565b9050919050565b60006020820190508181036000830152611b6f816118f6565b9050919050565b60006020820190508181036000830152611b8f81611919565b9050919050565b60006020820190508181036000830152611baf8161193c565b9050919050565b6000602082019050611bcb600083018461195f565b92915050565b6000611bdb611bec565b9050611be78282611e0d565b919050565b6000604051905090565b600067ffffffffffffffff821115611c1157611c10611f45565b5b611c1a82611f74565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000611c7582611d8f565b9150611c8083611d8f565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611cb557611cb4611eb8565b5b828201905092915050565b6000611ccb82611d8f565b9150611cd683611d8f565b925082611ce657611ce5611ee7565b5b828204905092915050565b6000611cfc82611d8f565b9150611d0783611d8f565b925082821015611d1a57611d19611eb8565b5b828203905092915050565b6000611d3082611d6f565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015611dc6578082015181840152602081019050611dab565b83811115611dd5576000848401525b50505050565b60006002820490506001821680611df357607f821691505b60208210811415611e0757611e06611f16565b5b50919050565b611e1682611f74565b810181811067ffffffffffffffff82111715611e3557611e34611f45565b5b80604052505050565b6000611e4982611d8f565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611e7c57611e7b611eb8565b5b600182019050919050565b6000611e9282611d8f565b9150611e9d83611d8f565b925082611ead57611eac611ee7565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008201527f73206e6f74206f776e0000000000000000000000000000000000000000000000602082015250565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b61231c81611d25565b811461232757600080fd5b50565b61233381611d37565b811461233e57600080fd5b50565b61234a81611d43565b811461235557600080fd5b50565b61236181611d8f565b811461236c57600080fd5b5056fea26469706673582212200a5b01099b01a8eb6ef7a835a55253f35a11b7fb5bf01dde44edec03760ccee464736f6c63430008020033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): ERC721Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC721;
}
