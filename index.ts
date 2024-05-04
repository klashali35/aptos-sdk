import { AptosClient } from '@aptos-labs/aptos';

async function main() {
  const client = new AptosClient('https://fullnode.devnet.aptoslabs.com/v1');
  const account = await client.getAccount('0x1');
  console.log(account);
}

main().catch(console.error);
