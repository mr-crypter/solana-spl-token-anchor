use anchor_lang::prelude::*;
use anchor_spl::token::{Token, Mint, TokenAccount};

// Declare the program ID (replace with your actual program ID)
declare_id!("2DCEkar8pu1ipZNSKNU6iRktaWSLDmDgC82nsvMGSeZg");

#[program]
pub mod spl_token_project {
    use super::*;

    pub fn mint(_ctx: Context<MintToken>, _amount: u64) -> Result<()> {
        // Mint implementation here
        Ok(())
    }

    pub fn transfer(_ctx: Context<TransferToken>, _amount: u64) -> Result<()> {
        // Transfer implementation here
        Ok(())
    }
}

#[derive(Accounts)]
pub struct MintToken<'info> {
    #[account(mut)]
    pub mint: Account<'info, Mint>,
    #[account(mut)]
    pub to: Account<'info, TokenAccount>,
    
    #[account(signer)]
    pub authority: AccountInfo<'info>,
    pub token_program: Program<'info, Token>,
}

#[derive(Accounts)]
pub struct TransferToken<'info> {
    #[account(mut)]
    pub from: Account<'info, TokenAccount>,
    #[account(mut)]
    pub to: Account<'info, TokenAccount>,
    #[account(signer)]
    pub authority: AccountInfo<'info>,
    pub token_program: Program<'info, Token>,
}