import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "./../../common/config/base.entity";
import { OrderEntity } from "./../../orders/entities/order.entity";

@Entity({name: `shipper`})
export class ShipperEntity extends BaseEntity{
    @Column({type: "varchar"})
    shipperName:string
    @Column({type: "varchar"})
    phone: string

    @OneToMany(()=>OrderEntity, (orders)=>orders.shipper)
    orders: OrderEntity[];
}

