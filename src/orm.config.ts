import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  username: 'user_1',
  password: '3minicute3',
  port: 5432,
  host: '127.0.0.1',
  database: 'LiquidityPool',
  synchronize: true, // turn off in production level
  entities: ['dist/**/*.entity{.ts,.js}'],
};
