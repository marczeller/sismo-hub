
import { dataProviders } from "@group-generators/helpers/data-providers";
import { SupportedNetwork } from "@group-generators/helpers/data-providers/big-query";
import { Tags, ValueType, GroupWithData } from "topics/group";
import {
  GenerationContext,
  GenerationFrequency,
  GroupGenerator,
} from "topics/group-generator";

// Generated from factory.sismo.io

const generator: GroupGenerator = {
  
  generationFrequency: GenerationFrequency.Once,
  
  generate: async (context: GenerationContext): Promise<GroupWithData[]> => {
  
    // const bqProvider = new dataProviders.BigQueryProvider({network: SupportedNetwork.POLYGON});

    // const holders = await bqProvider.getERC1155Ownership({
    //   contractAddress: "0x71a7089C56DFf528f330Bc0116C0917cd05B51Fc",
    //   tokenId: "30000001",
    // });

    // const tokenProvider = new dataProviders.TokenProvider();
    
    // const holders = await tokenProvider.getNftHolders({
    //   contractAddress: "0x8b4616926705Fb61E9C4eeAc07cd946a5D4b0760",
    //   network: SupportedNetwork.MAINNET,
    // });

    // sBTC: 0xfe18be6b3bd88a2d2a7f928d00292e7a9963cfc6
    
    const tokenProvider = new dataProviders.TokenProvider();
    
    const holders = await tokenProvider.getERC20Holders({
      contractAddress: "0x4104b135DBC9609Fc1A9490E61369036497660c8",
      network: SupportedNetwork.MAINNET,
      // minAmount: 10000,
      // tokenDecimals: 18,
      // forcedValue: 1,
      snapshot: "2021-10-19",
    });

    return [
      {
        name: "0xlegion-lens-follower",
        timestamp: context.timestamp,
        description: "Snapshot everyday. if you've just followed 0xlegion.lens, please wait 48 hours.",
        specs: "",
        data: holders,
        valueType: ValueType.Score,
        tags: [Tags.Factory],
      },
    ];
  },
};

export default generator;
