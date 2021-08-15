import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { Investors } from './entity/investors.entity';
import { CreateInvestorDto, UpdateInvestorWalletDto } from './dto/investor.dto';
import { InvestorsService } from './investors.service';

// This crud injection allow us to use the CRUD functionalities
@Crud({
  model: {
    type: Investors,
  },
})
@Controller('investors')
export class InvestorsController implements CrudController<Investors> {
  constructor(public service: InvestorsService) {}

  @Get('/:investorEmail')
  getInvestorByEmail(
    @Param('investorEmail') investorEmail: string,
  ): Promise<Investors[]> {
    return this.service.findByEmail(investorEmail);
  }

  // Just receives the email not the whole Investor object.
  @Post('/create')
  createInvestor(@Body() body: CreateInvestorDto) {
    return this.service.createInvestor(body);
  }

  @Put('/update/:id')
  updateWallet(@Param('id') id: number, @Body() body: UpdateInvestorWalletDto) {
    return this.service.updateWallet(id, body);
  }
}
