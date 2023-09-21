import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("clients")
class Client {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ length: 127 })
    name: string;

    @Column({ length: 127 })
    phone: string;

    @Column({ length: 127, unique: true })
    email: string;

    @Column({ length: 127, unique: true })
    address: string;
}

export default Client;
