import {
  Connection,
  PublicKey,
  sendAndConfirmTransaction,
  Transaction,
  TransactionInstruction,
} from '@solana/web3.js';
import * as dotenv from 'dotenv';

import { PROGRAM_ID } from 'config';
import { loadWallet } from 'utils';

dotenv.config();

const main = async () => {
  const connection = new Connection(process.env.OFFICIAL_SOL_DEV_HTTPS!);
  const wallet = loadWallet();

  const programId = new PublicKey(PROGRAM_ID);

  const ix = new TransactionInstruction({
    keys: [],
    programId,
  });
  const tx = new Transaction().add(ix);
  const sig = await sendAndConfirmTransaction(connection, tx, [wallet]);
  console.log(sig);
};

main();
