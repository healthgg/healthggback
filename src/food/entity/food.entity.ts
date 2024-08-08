import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { IFood } from '../interface/food.interface';
import { nutrientModel } from 'src/nutrient/entity/nutrient.entity';

@Entity('food')
export class foodModel implements IFood {
  @PrimaryColumn({ comment: '음식 ID' })
  food_id: number;

  @Column({ type: 'varchar', length: '255', comment: '음식 이미지 url' })
  food_imageurl: string;

  @Column({ type: 'varchar', length: '20', comment: '음식 이름' })
  food_name: string;

  @Column({ type: 'varchar', length: '50', comment: '음식 설명' })
  food_notice: string;

  @OneToOne(() => nutrientModel, (nutrient) => nutrient.food_id)
  @JoinColumn({ name: 'nutrient_id' })
  nutrient: nutrientModel;
}
