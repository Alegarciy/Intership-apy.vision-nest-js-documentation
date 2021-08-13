import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('investors')
export class Investors {
  //auto-increment
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_email: string;

  @Column()
  usd: number;

  @Column()
  lp_amount: number;

  @Column()
  lp_name: string;

  @Column()
  pool_address: string;
}
