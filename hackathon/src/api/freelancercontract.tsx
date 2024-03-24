import { ethers } from "ethers";
import { ABI } from '@/utils/ABI.js'

const contractAddress = `${process.env.CONTRACT_ADDRESS}`;

export default function completeProjectAndPay(): Promise<void> {
    console.log("Acessando contrato")
    try {
        const provider = new ethers.providers.JsonRpcProvider(
            {
                skipFetchSetup: true,
                url: process.env.RPC_URL as string
              }
        ); 
        const signer = provider.getSigner();
        const freelanceContract = new ethers.Contract(contractAddress, ABI, signer);

        const currentTime = Math.floor(Date.now() / 1000);
        const deadline = await freelanceContract.deadline();

        if (currentTime >= deadline) {
            const tx = await freelanceContract.completeProject();
            await tx.wait();

            const compensationAmount = ethers.utils.parseEther("0.5");
            const tx2 = await freelanceContract.withdrawCompensation({ value: compensationAmount });
            await tx2.wait();

            console.log("Projeto concluído e compensação paga com sucesso!");
        } else {
            console.log("A data limite ainda não foi atingida.");
        }
    } catch (error) {
        console.error("Erro ao completar o projeto e pagar a compensação:", error);
    }
}
