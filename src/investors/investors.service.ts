import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { FindInvestorResponseDto } from './dto/investor.dto';

import { Investors } from './entity/investors.entity';

@Injectable()
export class InvestorsService extends TypeOrmCrudService<Investors> {
  //Injecting this will allow to use the Investor entity
  constructor(@InjectRepository(Investors) repo: Repository<Investors>) {
    super(repo);
  }

  findByEmail(email: string) {
    return this.repo.find({ where: { user_email: email } });
  }
}
