import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import 'reflect-metadata';
import CategoryMakeUp from '../dto/categoryMk';
import { ProductTest } from '../../../product-test/entities/product-test.entity';

@Entity('makeup')
export class Makeup {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { unique: true, nullable: false })
  name: string;

  @Column('enum', {
    enum: CategoryMakeUp,
    nullable: false,
  })
  category: CategoryMakeUp;

  @Column('integer', { nullable: false })
  stock: number;

  @Column('text', { nullable: false })
  ware_house_location: string;

  @Column('integer', { nullable: false })
  durability_score: number;

  @OneToMany(() => ProductTest, (productTest) => productTest.product)
  tests: ProductTest[];
}
