const anchor = require('@project-serum/anchor');
const { TOKEN_PROGRAM_ID, Token } = require('@solana/spl-token');

async function main() {
    const provider = anchor.AnchorProvider.env();
    anchor.setProvider(provider);

    const idl = JSON.parse(require('fs').readFileSync('./target/idl/spl_token_project.json', 'utf8'));
    const programId = new anchor.web3.PublicKey('YourProgramIDHere');
    const program = new anchor.Program(idl, programId);

    const mint = new anchor.web3.PublicKey('YourMintAddressHere');
    const tokenAccount = new anchor.web3.PublicKey('YourTokenAccountHere');

    try {
        await program.rpc.mintToken(new anchor.BN(1000), {
            accounts: {
                mint,
                tokenAccount,
                authority: provider.wallet.publicKey,
                tokenProgram: TOKEN_PROGRAM_ID,
            },
        });
        console.log("Minting successful!");

        const from = new anchor.web3.PublicKey('Se 2DCEkar8pu1ipZNSKNU6iRktaWSLDmDgC82nsvMGSeZg');
        const to = new anchor.web3.PublicKey(' 2DCEkar8pu1ipZNSKNU6iRktaWSLDmDgC82nsvMGSeZg');

        await program.rpc.transferToken(new anchor.BN(500), {
            accounts: {
                from,
                to,
                authority: provider.wallet.publicKey,
                tokenProgram: TOKEN_PROGRAM_ID,
            },
        });
        console.log("Transfer successful!");
    } catch (err) {
        console.error("Transaction failed", err);
    }
}

main().catch(err => {
    console.error("Main function error", err);
});
