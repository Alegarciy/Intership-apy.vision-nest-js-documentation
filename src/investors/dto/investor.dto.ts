export class FindInvestorResponseDto {
  id: number;
  user_email: string;
  usd: number;
  lp_amount: number;
  lp_email: string;
  pool_address: string;
}

export class CreateInvestorDto {
  user_email: string;
}

export class UpdateInvestorWalletDto {
  id: number;
  user_email: string;
  usd: number;
  lp_amount: number;
  name: string;
  pool_address: string;
}
