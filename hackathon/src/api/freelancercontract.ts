import { ethers } from "ethers";
import ABI from '@/utils/ABI.js'

const contractAddress = "0xD881421c172409b048cb22b6904e22B42b204967";

export async function completeProjectAndPay(): Promise<void> {
    // console.log(ethers)
    console.log("https://sepolia-rpc.scroll.io/")
    try {
        const provider = new ethers.JsonRpcProvider("https://sepolia-rpc.scroll.io/" as string);

        const wallet = new ethers.Wallet("bfc73aa80de8595fdb36d16ebed11b35452ac0845e321e25af13ea52b108b956")
        const signer = wallet.connect(provider);

        const freelanceContract = new ethers.Contract(contractAddress, ABI[0].abi, signer);

        const currentTime = Math.floor(Date.now() / 1000);

        const deadline = 90;

        if (currentTime >= deadline) {
            const tx = await freelanceContract.completeProject();
            // await tx.wait();
            const compensationAmount = "0.5";
            const tx2 = freelanceContract.withdrawCompensation;
            // await tx2.wait();

            console.log("Projeto concluído e compensação paga com sucesso!");
        } else {
            console.log("A data limite ainda não foi atingida.");
        }
    } catch (error) {
        console.error("Erro ao completar o projeto e pagar a compensação:", error);
    }
}
