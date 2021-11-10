import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CoordinapeCircle, CoordinapeCircleInterface } from "../CoordinapeCircle";
export declare class CoordinapeCircle__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(name: string, id: string, uri: string, _minimumV: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<CoordinapeCircle>;
    getDeployTransaction(name: string, id: string, uri: string, _minimumV: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): CoordinapeCircle;
    connect(signer: Signer): CoordinapeCircle__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b506040516200493a3803806200493a8339818101604052810190620000379190620002be565b838381600090805190602001906200005192919062000185565b5080600190805190602001906200006a92919062000185565b5050506200008d62000081620000b760201b60201c565b620000bf60201b60201c565b8160119080519060200190620000a592919062000185565b5080600e819055505050505062000509565b600033905090565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b828054620001939062000414565b90600052602060002090601f016020900481019282620001b7576000855562000203565b82601f10620001d257805160ff191683800117855562000203565b8280016001018555821562000203579182015b8281111562000202578251825591602001919060010190620001e5565b5b50905062000212919062000216565b5090565b5b808211156200023157600081600090555060010162000217565b5090565b60006200024c62000246846200039e565b62000375565b9050828152602081018484840111156200026557600080fd5b62000272848285620003de565b509392505050565b600082601f8301126200028c57600080fd5b81516200029e84826020860162000235565b91505092915050565b600081519050620002b881620004ef565b92915050565b60008060008060808587031215620002d557600080fd5b600085015167ffffffffffffffff811115620002f057600080fd5b620002fe878288016200027a565b945050602085015167ffffffffffffffff8111156200031c57600080fd5b6200032a878288016200027a565b935050604085015167ffffffffffffffff8111156200034857600080fd5b62000356878288016200027a565b92505060606200036987828801620002a7565b91505092959194509250565b60006200038162000394565b90506200038f82826200044a565b919050565b6000604051905090565b600067ffffffffffffffff821115620003bc57620003bb620004af565b5b620003c782620004de565b9050602081019050919050565b6000819050919050565b60005b83811015620003fe578082015181840152602081019050620003e1565b838111156200040e576000848401525b50505050565b600060028204905060018216806200042d57607f821691505b6020821081141562000444576200044362000480565b5b50919050565b6200045582620004de565b810181811067ffffffffffffffff82111715620004775762000476620004af565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b620004fa81620003d4565b81146200050657600080fd5b50565b61442180620005196000396000f3fe608060405234801561001057600080fd5b50600436106101f05760003560e01c80637c8da89d1161010f578063c87b56dd116100a2578063e8436b3811610071578063e8436b38146105c7578063e97dcb62146105e5578063e985e9c5146105ef578063f2fde38b1461061f576101f0565b8063c87b56dd14610543578063d1d4f78914610573578063d50011f71461058f578063dd66e16b146105ab576101f0565b8063a22cb465116100de578063a22cb465146104d1578063b88d4fde146104ed578063bdd4d18d14610509578063c30f4a5a14610527576101f0565b80637c8da89d146104475780638da5cb5b1461046557806395a8c58d1461048357806395d89b41146104b3576101f0565b80633e4f49e6116101875780636352211e116101565780636352211e146103c157806370a08231146103f1578063715018a61461042157806374a8f1031461042b576101f0565b80633e4f49e61461032957806342842e0e1461035957806349a26b9d146103755780634ac9e9d914610391576101f0565b80630aa582a3116101c35780630aa582a31461028f57806318160ddd146102bf57806323b872dd146102dd57806328cfcf41146102f9576101f0565b806301ffc9a7146101f557806306fdde0314610225578063081812fc14610243578063095ea7b314610273575b600080fd5b61020f600480360381019061020a9190612fe3565b61063b565b60405161021c91906135e4565b60405180910390f35b61022d61071d565b60405161023a919061361a565b60405180910390f35b61025d60048036038101906102589190613076565b6107af565b60405161026a919061355b565b60405180910390f35b61028d60048036038101906102889190612f6b565b610834565b005b6102a960048036038101906102a49190612e00565b61094c565b6040516102b69190613937565b60405180910390f35b6102c761097e565b6040516102d4919061391c565b60405180910390f35b6102f760048036038101906102f29190612e65565b6109a3565b005b610313600480360381019061030e9190612e00565b610a2f565b604051610320919061391c565b60405180910390f35b610343600480360381019061033e9190613076565b610a78565b6040516103509190613937565b60405180910390f35b610373600480360381019061036e9190612e65565b610aa2565b005b61038f600480360381019061038a9190612fa7565b610b2e565b005b6103ab60048036038101906103a69190612e00565b610cab565b6040516103b8919061391c565b60405180910390f35b6103db60048036038101906103d69190613076565b610cf4565b6040516103e8919061355b565b60405180910390f35b61040b60048036038101906104069190612e00565b610da6565b604051610418919061391c565b60405180910390f35b610429610e5e565b005b61044560048036038101906104409190612e00565b610ee6565b005b61044f610fd5565b60405161045c919061391c565b60405180910390f35b61046d610fe4565b60405161047a919061355b565b60405180910390f35b61049d60048036038101906104989190612fa7565b61100e565b6040516104aa91906135e4565b60405180910390f35b6104bb611049565b6040516104c8919061361a565b60405180910390f35b6104eb60048036038101906104e69190612f2f565b6110db565b005b61050760048036038101906105029190612eb4565b61125c565b005b6105116112ea565b60405161051e91906135c2565b60405180910390f35b610541600480360381019061053c9190613035565b611467565b005b61055d60048036038101906105589190613076565b6114fd565b60405161056a919061361a565b60405180910390f35b61058d60048036038101906105889190612fa7565b6115a4565b005b6105a960048036038101906105a49190613076565b611706565b005b6105c560048036038101906105c09190612e00565b61178c565b005b6105cf611a96565b6040516105dc919061391c565b60405180910390f35b6105ed611aa0565b005b61060960048036038101906106049190612e29565b611b91565b60405161061691906135e4565b60405180910390f35b61063960048036038101906106349190612e00565b611c25565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061070657507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610716575061071582611d1d565b5b9050919050565b60606000805461072c90613be5565b80601f016020809104026020016040519081016040528092919081815260200182805461075890613be5565b80156107a55780601f1061077a576101008083540402835291602001916107a5565b820191906000526020600020905b81548152906001019060200180831161078857829003601f168201915b5050505050905090565b60006107ba82611d87565b6107f9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107f0906137fc565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061083f82610cf4565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156108b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108a79061389c565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166108cf611df3565b73ffffffffffffffffffffffffffffffffffffffff1614806108fe57506108fd816108f8611df3565b611b91565b5b61093d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109349061373c565b60405180910390fd5b6109478383611dfb565b505050565b60006009600061095b84610a2f565b815260200190815260200160002060009054906101000a900460ff169050919050565b600061098a600a611eb4565b6109946007611eb4565b61099e9190613adc565b905090565b6109ab611df3565b73ffffffffffffffffffffffffffffffffffffffff166109c9610fe4565b73ffffffffffffffffffffffffffffffffffffffff1614610a1f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a169061381c565b60405180910390fd5b610a2a838383611ec2565b505050565b6000600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600d600083815260200190815260200160002060009054906101000a900460ff169050919050565b610aaa611df3565b73ffffffffffffffffffffffffffffffffffffffff16610ac8610fe4565b73ffffffffffffffffffffffffffffffffffffffff1614610b1e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b159061381c565b60405180910390fd5b610b29838383611f22565b505050565b6004610b38611df3565b73ffffffffffffffffffffffffffffffffffffffff16610b56610fe4565b73ffffffffffffffffffffffffffffffffffffffff161480610b855750610b84610b7e611df3565b8261100e565b5b610bc4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bbb906138dc565b60405180910390fd5b6000610bcf84610da6565b14610c0f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c069061371c565b60405180910390fd5b60008260ff161415610c56576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c4d906137bc565b60405180910390fd5b600e54600f60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610ca68383611f42565b505050565b6000600f60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610d9d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d949061379c565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610e17576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e0e9061377c565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610e66611df3565b73ffffffffffffffffffffffffffffffffffffffff16610e84610fe4565b73ffffffffffffffffffffffffffffffffffffffff1614610eda576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ed19061381c565b60405180910390fd5b610ee4600061206c565b565b6004610ef0611df3565b73ffffffffffffffffffffffffffffffffffffffff16610f0e610fe4565b73ffffffffffffffffffffffffffffffffffffffff161480610f3d5750610f3c610f36611df3565b8261100e565b5b610f7c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f73906138dc565b60405180910390fd5b6001610f8783610da6565b1015610fc8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fbf9061365c565b60405180910390fd5b610fd182612132565b5050565b6000610fdf61097e565b905090565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600080826009600061101f87610a2f565b815260200190815260200160002060009054906101000a900460ff161660ff161415905092915050565b60606001805461105890613be5565b80601f016020809104026020016040519081016040528092919081815260200182805461108490613be5565b80156110d15780601f106110a6576101008083540402835291602001916110d1565b820191906000526020600020905b8154815290600101906020018083116110b457829003601f168201915b5050505050905090565b6110e3611df3565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611151576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611148906136dc565b60405180910390fd5b806005600061115e611df3565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff1661120b611df3565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405161125091906135e4565b60405180910390a35050565b611264611df3565b73ffffffffffffffffffffffffffffffffffffffff16611282610fe4565b73ffffffffffffffffffffffffffffffffffffffff16146112d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112cf9061381c565b60405180910390fd5b6112e484848484612245565b50505050565b606060006112f6610fd5565b67ffffffffffffffff811115611335577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280602002602001820160405280156113635781602001602082028036833780820191505090505b509050600080600190505b6113786007611eb4565b811161145e5761138781611d87565b80156113b7575060006009600083815260200190815260200160002060009054906101000a900460ff1660ff1614155b1561144b5760006113c782610cf4565b9050808484806113d690613c48565b95508151811061140f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050505b808061145690613c48565b91505061136e565b50819250505090565b61146f611df3565b73ffffffffffffffffffffffffffffffffffffffff1661148d610fe4565b73ffffffffffffffffffffffffffffffffffffffff16146114e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114da9061381c565b60405180910390fd5b80601190805190602001906114f9929190612c0f565b5050565b606061150882611d87565b611547576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161153e9061387c565b60405180910390fd5b60006115516122a7565b90506000815111611571576040518060200160405280600081525061159c565b8061157b84612339565b60405160200161158c929190613537565b6040516020818303038152906040525b915050919050565b60046115ae611df3565b73ffffffffffffffffffffffffffffffffffffffff166115cc610fe4565b73ffffffffffffffffffffffffffffffffffffffff1614806115fb57506115fa6115f4611df3565b8261100e565b5b61163a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611631906138dc565b60405180910390fd5b600161164584610da6565b1015611686576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161167d9061365c565b60405180910390fd5b60008260ff1614156116cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116c4906137bc565b60405180910390fd5b81600960006116db86610a2f565b815260200190815260200160002060006101000a81548160ff021916908360ff160217905550505050565b61170e611df3565b73ffffffffffffffffffffffffffffffffffffffff1661172c610fe4565b73ffffffffffffffffffffffffffffffffffffffff1614611782576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117799061381c565b60405180910390fd5b80600e8190555050565b6002611796611df3565b73ffffffffffffffffffffffffffffffffffffffff166117b4610fe4565b73ffffffffffffffffffffffffffffffffffffffff1614806117e357506117e26117dc611df3565b8261100e565b5b611822576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611819906138dc565b60405180910390fd5b600061182d83610da6565b1461186d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118649061371c565b60405180910390fd5b60106000611879611df3565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561193e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119359061383c565b60405180910390fd5b6001600f60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461198e9190613a55565b925050819055506001601060006119a3611df3565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550611a39611df3565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4b2c9a3db1e8916a20d447c88fedca2325dffd42f7e881a889cb8d00cd032d7860405160405180910390a35050565b6000600e54905090565b6000611ab2611aad611df3565b610da6565b14611af2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ae9906138fc565b60405180910390fd5b600e54600f6000611b01611df3565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015611b7d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b749061375c565b60405180910390fd5b611b8f611b88611df3565b6001611f42565b565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b611c2d611df3565b73ffffffffffffffffffffffffffffffffffffffff16611c4b610fe4565b73ffffffffffffffffffffffffffffffffffffffff1614611ca1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c989061381c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611d11576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d089061367c565b60405180910390fd5b611d1a8161206c565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16611e6e83610cf4565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600081600001549050919050565b611ed3611ecd611df3565b826124e6565b611f12576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f09906138bc565b60405180910390fd5b611f1d8383836125c4565b505050565b611f3d8383836040518060200160405280600081525061125c565b505050565b611f4c6007612820565b6000611f586007611eb4565b9050611f648382612836565b816009600083815260200190815260200160002060006101000a81548160ff021916908360ff16021790555080600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506000600f60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff167f417bd5cc050be3e92901f43658440307e9026cc9143e47f1ccb384752c1d6eba8360405161205f9190613937565b60405180910390a2505050565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050612180600a612820565b60006009600083815260200190815260200160002060006101000a81548160ff021916908360ff1602179055506000600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff167f1d241883f81c647958cb56cba91a9d8ab1bab9726a97b9a16d0dae61d0690d36600060405161223991906135ff565b60405180910390a25050565b612256612250611df3565b836124e6565b612295576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161228c906138bc565b60405180910390fd5b6122a184848484612a04565b50505050565b6060601180546122b690613be5565b80601f01602080910402602001604051908101604052809291908181526020018280546122e290613be5565b801561232f5780601f106123045761010080835404028352916020019161232f565b820191906000526020600020905b81548152906001019060200180831161231257829003601f168201915b5050505050905090565b60606000821415612381576040518060400160405280600181526020017f300000000000000000000000000000000000000000000000000000000000000081525090506124e1565b600082905060005b600082146123b357808061239c90613c48565b915050600a826123ac9190613aab565b9150612389565b60008167ffffffffffffffff8111156123f5577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156124275781602001600182028036833780820191505090505b5090505b600085146124da576001826124409190613adc565b9150600a8561244f9190613c91565b603061245b9190613a55565b60f81b818381518110612497577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856124d39190613aab565b945061242b565b8093505050505b919050565b60006124f182611d87565b612530576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612527906136fc565b60405180910390fd5b600061253b83610cf4565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806125aa57508373ffffffffffffffffffffffffffffffffffffffff16612592846107af565b73ffffffffffffffffffffffffffffffffffffffff16145b806125bb57506125ba8185611b91565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff166125e482610cf4565b73ffffffffffffffffffffffffffffffffffffffff161461263a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016126319061385c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156126aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016126a1906136bc565b60405180910390fd5b6126b5838383612a60565b6126c0600082611dfb565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546127109190613adc565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546127679190613a55565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6001816000016000828254019250508190555050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156128a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161289d906137dc565b60405180910390fd5b6128af81611d87565b156128ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016128e69061369c565b60405180910390fd5b6128fb60008383612a60565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461294b9190613a55565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b612a0f8484846125c4565b612a1b84848484612a65565b612a5a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612a519061363c565b60405180910390fd5b50505050565b505050565b6000612a868473ffffffffffffffffffffffffffffffffffffffff16612bfc565b15612bef578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02612aaf611df3565b8786866040518563ffffffff1660e01b8152600401612ad19493929190613576565b602060405180830381600087803b158015612aeb57600080fd5b505af1925050508015612b1c57506040513d601f19601f82011682018060405250810190612b19919061300c565b60015b612b9f573d8060008114612b4c576040519150601f19603f3d011682016040523d82523d6000602084013e612b51565b606091505b50600081511415612b97576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612b8e9061363c565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050612bf4565b600190505b949350505050565b600080823b905060008111915050919050565b828054612c1b90613be5565b90600052602060002090601f016020900481019282612c3d5760008555612c84565b82601f10612c5657805160ff1916838001178555612c84565b82800160010185558215612c84579182015b82811115612c83578251825591602001919060010190612c68565b5b509050612c919190612c95565b5090565b5b80821115612cae576000816000905550600101612c96565b5090565b6000612cc5612cc084613977565b613952565b905082815260208101848484011115612cdd57600080fd5b612ce8848285613ba3565b509392505050565b6000612d03612cfe846139a8565b613952565b905082815260208101848484011115612d1b57600080fd5b612d26848285613ba3565b509392505050565b600081359050612d3d81614378565b92915050565b600081359050612d528161438f565b92915050565b600081359050612d67816143a6565b92915050565b600081519050612d7c816143a6565b92915050565b600082601f830112612d9357600080fd5b8135612da3848260208601612cb2565b91505092915050565b600082601f830112612dbd57600080fd5b8135612dcd848260208601612cf0565b91505092915050565b600081359050612de5816143bd565b92915050565b600081359050612dfa816143d4565b92915050565b600060208284031215612e1257600080fd5b6000612e2084828501612d2e565b91505092915050565b60008060408385031215612e3c57600080fd5b6000612e4a85828601612d2e565b9250506020612e5b85828601612d2e565b9150509250929050565b600080600060608486031215612e7a57600080fd5b6000612e8886828701612d2e565b9350506020612e9986828701612d2e565b9250506040612eaa86828701612dd6565b9150509250925092565b60008060008060808587031215612eca57600080fd5b6000612ed887828801612d2e565b9450506020612ee987828801612d2e565b9350506040612efa87828801612dd6565b925050606085013567ffffffffffffffff811115612f1757600080fd5b612f2387828801612d82565b91505092959194509250565b60008060408385031215612f4257600080fd5b6000612f5085828601612d2e565b9250506020612f6185828601612d43565b9150509250929050565b60008060408385031215612f7e57600080fd5b6000612f8c85828601612d2e565b9250506020612f9d85828601612dd6565b9150509250929050565b60008060408385031215612fba57600080fd5b6000612fc885828601612d2e565b9250506020612fd985828601612deb565b9150509250929050565b600060208284031215612ff557600080fd5b600061300384828501612d58565b91505092915050565b60006020828403121561301e57600080fd5b600061302c84828501612d6d565b91505092915050565b60006020828403121561304757600080fd5b600082013567ffffffffffffffff81111561306157600080fd5b61306d84828501612dac565b91505092915050565b60006020828403121561308857600080fd5b600061309684828501612dd6565b91505092915050565b60006130ab83836130b7565b60208301905092915050565b6130c081613b10565b82525050565b6130cf81613b10565b82525050565b60006130e0826139e9565b6130ea8185613a17565b93506130f5836139d9565b8060005b8381101561312657815161310d888261309f565b975061311883613a0a565b9250506001810190506130f9565b5085935050505092915050565b61313c81613b22565b82525050565b600061314d826139f4565b6131578185613a28565b9350613167818560208601613bb2565b61317081613d7e565b840191505092915050565b61318481613b91565b82525050565b6000613195826139ff565b61319f8185613a39565b93506131af818560208601613bb2565b6131b881613d7e565b840191505092915050565b60006131ce826139ff565b6131d88185613a4a565b93506131e8818560208601613bb2565b80840191505092915050565b6000613201603283613a39565b915061320c82613d8f565b604082019050919050565b6000613224601983613a39565b915061322f82613dde565b602082019050919050565b6000613247602683613a39565b915061325282613e07565b604082019050919050565b600061326a601c83613a39565b915061327582613e56565b602082019050919050565b600061328d602483613a39565b915061329882613e7f565b604082019050919050565b60006132b0601983613a39565b91506132bb82613ece565b602082019050919050565b60006132d3602c83613a39565b91506132de82613ef7565b604082019050919050565b60006132f6601d83613a39565b915061330182613f46565b602082019050919050565b6000613319603883613a39565b915061332482613f6f565b604082019050919050565b600061333c602683613a39565b915061334782613fbe565b604082019050919050565b600061335f602a83613a39565b915061336a8261400d565b604082019050919050565b6000613382602983613a39565b915061338d8261405c565b604082019050919050565b60006133a5601383613a39565b91506133b0826140ab565b602082019050919050565b60006133c8602083613a39565b91506133d3826140d4565b602082019050919050565b60006133eb602c83613a39565b91506133f6826140fd565b604082019050919050565b600061340e602083613a39565b91506134198261414c565b602082019050919050565b6000613431602583613a39565b915061343c82614175565b604082019050919050565b6000613454602983613a39565b915061345f826141c4565b604082019050919050565b6000613477602f83613a39565b915061348282614213565b604082019050919050565b600061349a602183613a39565b91506134a582614262565b604082019050919050565b60006134bd603183613a39565b91506134c8826142b1565b604082019050919050565b60006134e0603183613a39565b91506134eb82614300565b604082019050919050565b6000613503601a83613a39565b915061350e8261434f565b602082019050919050565b61352281613b7a565b82525050565b61353181613b84565b82525050565b600061354382856131c3565b915061354f82846131c3565b91508190509392505050565b600060208201905061357060008301846130c6565b92915050565b600060808201905061358b60008301876130c6565b61359860208301866130c6565b6135a56040830185613519565b81810360608301526135b78184613142565b905095945050505050565b600060208201905081810360008301526135dc81846130d5565b905092915050565b60006020820190506135f96000830184613133565b92915050565b6000602082019050613614600083018461317b565b92915050565b60006020820190508181036000830152613634818461318a565b905092915050565b60006020820190508181036000830152613655816131f4565b9050919050565b6000602082019050818103600083015261367581613217565b9050919050565b600060208201905081810360008301526136958161323a565b9050919050565b600060208201905081810360008301526136b58161325d565b9050919050565b600060208201905081810360008301526136d581613280565b9050919050565b600060208201905081810360008301526136f5816132a3565b9050919050565b60006020820190508181036000830152613715816132c6565b9050919050565b60006020820190508181036000830152613735816132e9565b9050919050565b600060208201905081810360008301526137558161330c565b9050919050565b600060208201905081810360008301526137758161332f565b9050919050565b6000602082019050818103600083015261379581613352565b9050919050565b600060208201905081810360008301526137b581613375565b9050919050565b600060208201905081810360008301526137d581613398565b9050919050565b600060208201905081810360008301526137f5816133bb565b9050919050565b60006020820190508181036000830152613815816133de565b9050919050565b6000602082019050818103600083015261383581613401565b9050919050565b6000602082019050818103600083015261385581613424565b9050919050565b6000602082019050818103600083015261387581613447565b9050919050565b600060208201905081810360008301526138958161346a565b9050919050565b600060208201905081810360008301526138b58161348d565b9050919050565b600060208201905081810360008301526138d5816134b0565b9050919050565b600060208201905081810360008301526138f5816134d3565b9050919050565b60006020820190508181036000830152613915816134f6565b9050919050565b60006020820190506139316000830184613519565b92915050565b600060208201905061394c6000830184613528565b92915050565b600061395c61396d565b90506139688282613c17565b919050565b6000604051905090565b600067ffffffffffffffff82111561399257613991613d4f565b5b61399b82613d7e565b9050602081019050919050565b600067ffffffffffffffff8211156139c3576139c2613d4f565b5b6139cc82613d7e565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000613a6082613b7a565b9150613a6b83613b7a565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115613aa057613a9f613cc2565b5b828201905092915050565b6000613ab682613b7a565b9150613ac183613b7a565b925082613ad157613ad0613cf1565b5b828204905092915050565b6000613ae782613b7a565b9150613af283613b7a565b925082821015613b0557613b04613cc2565b5b828203905092915050565b6000613b1b82613b5a565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b6000613b9c82613b84565b9050919050565b82818337600083830152505050565b60005b83811015613bd0578082015181840152602081019050613bb5565b83811115613bdf576000848401525b50505050565b60006002820490506001821680613bfd57607f821691505b60208210811415613c1157613c10613d20565b5b50919050565b613c2082613d7e565b810181811067ffffffffffffffff82111715613c3f57613c3e613d4f565b5b80604052505050565b6000613c5382613b7a565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415613c8657613c85613cc2565b5b600182019050919050565b6000613c9c82613b7a565b9150613ca783613b7a565b925082613cb757613cb6613cf1565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f726563697069656e74206973206e6f7420696e76697465642e00000000000000600082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f726563697069656e7420697320616c726561647920696e76697465642e000000600082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b7f73656e646572206469646e27742072656365697665206d696e696d756d20766f60008201527f75636865732e0000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b7f726f6c652063616e6e6f74206265206e6f6e6500000000000000000000000000600082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f73656e64657220616c726561647920766f756368656420666f7220726563697060008201527f69656e742e000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008201527f73206e6f74206f776e0000000000000000000000000000000000000000000000602082015250565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b7f6d6574686f642063616e206f6e6c792062652063616c6c65642062792077686f60008201527f2068617320656e6f75676820726f6c652e000000000000000000000000000000602082015250565b7f73656e64657220697320616c726561647920696e76697465642e000000000000600082015250565b61438181613b10565b811461438c57600080fd5b50565b61439881613b22565b81146143a357600080fd5b50565b6143af81613b2e565b81146143ba57600080fd5b50565b6143c681613b7a565b81146143d157600080fd5b50565b6143dd81613b84565b81146143e857600080fd5b5056fea26469706673582212204d579cff297699b7047d8dcd91203e069dd0cd34938d1dcb988de82b4c1b293e64736f6c63430008020033";
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
    static createInterface(): CoordinapeCircleInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CoordinapeCircle;
}
