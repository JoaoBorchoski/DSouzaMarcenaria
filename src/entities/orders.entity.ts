import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    JoinColumn,
    ManyToOne,
    CreateDateColumn,
} from "typeorm";
import Client from "./clients.entity";

@Entity("orders")
class Order {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({ length: 127 })
    price: string;

    @CreateDateColumn({ type: "date" })
    order_date: string;

    @Column({ type: "date" })
    delivery_date: Date;

    @Column({ type: "date" })
    payment_deadline: string;

    @Column({ type: "boolean", default: false })
    is_finished: boolean;

    @ManyToOne(() => Client, { onDelete: "CASCADE" })
    @JoinColumn()
    client: Client | number;
}

export default Order;
