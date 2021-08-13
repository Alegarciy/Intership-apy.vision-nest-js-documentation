import { Controller, Get, Param } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { Investors } from './entity/investors.entity';
import { FindInvestorResponseDto } from './dto/investor.dto';
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
  getInvestorByEmail(@Param('investorEmail') investorEmail: string): any {
    return this.service.findByEmail(investorEmail);
  }
}
