# solana-spl-token-anchor

This repository contains a simple SPL token smart contract built using the Anchor framework on the Solana blockchain. The contract includes functions to mint new SPL tokens and to transfer these tokens between accounts.

## Prerequisites

Before you begin, ensure you have the following software installed:

- **Rust and Cargo**: [Installation Guide](https://www.rust-lang.org/tools/install)
- **Solana CLI**: [Installation Guide](https://docs.solana.com/cli/install-solana-cli-tools)
- **Anchor**: [Installation Guide](https://project-serum.github.io/anchor/getting-started/installation.html)

## Project Structure

solana-spl-token-anchor/ 
    <br />├── Anchor.toml 
    <br />├── Cargo.lock 
    <br />├── Cargo.toml 
    <br />├── migrations/ 
    <br />├── programs/ 
    <br />│ └── solana_spl_token_anchor/ 
    <br />│ └── src/ 
    <br />│ └── lib.rs 
    <br />├── tests/ 
    <br />│ └── solana_spl_token_anchor.ts <
    <br />└── README.md 

## Getting Started

1. Clone this repository:

   ```bash
   git clone https://github.com/mr-crypter/spl-token-contract.git
   cd spl-token-contract

2. Build the smart contract:
     ```bash
     anchor build

3. Start a local Solana testnet:
    ```bash
    solana-test-validator

4. In a separate terminal, run:
     ```bash
     solana config set --url localhost

5. Deploy the smart contract:
     ```bash
    anchor deploy 

6. Run the tests:
     ```bash
     anchor test



Usage
The smart contract provides two main functions:
1. mint_token
This function mints a new SPL token and initializes the mint account and token account for the specified wallet address.

2. transfer_token
This function transfers the SPL token from one account to another.
You can interact with these functions using the Anchor CLI or by writing custom client code. Refer to the Anchor documentation for more information.

