import { getRounds, hashSync } from "bcryptjs";
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BeforeInsert,
    BeforeUpdate,
} from "typeorm";

@Entity("users")
class User {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ length: 127 })
    name: string;

    @Column({ length: 127, unique: true })
    email: string;

    @Column({ length: 255 })
    password: string;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        const isEncrypted = getRounds(this.password);

        if (!isEncrypted) {
            this.password = hashSync(this.password, 10);
        }
    }
}

export default User;
