import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm';
import TaskEntity from './task.entity';

@Entity()
export default class ItemEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 500})
    name: string;

    @Column({nullable: true})
    dueDate: Date;

    @ManyToOne(type => TaskEntity, taskEntity => taskEntity.items, {onDelete: "CASCADE"})
    task: TaskEntity;
}