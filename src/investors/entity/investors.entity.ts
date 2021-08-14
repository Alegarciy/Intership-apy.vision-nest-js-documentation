import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('investors')
export class Investors {
  //auto-increment
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_email: string;

  @Column({
    default: 100000,
  })
  usd: number;

  @Column({
    default: 0,
  })
  lp_amount: number;

  @Column({
    default: '',
  })
  lp_name: string;

  @Column({
    default: '',
  })
  pool_address: string;
}
