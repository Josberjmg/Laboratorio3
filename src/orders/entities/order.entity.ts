import { CustomerEntity } from "./../../customers/entities/customer.entity";
import { BaseEntity } from "./../../common/config/base.entity";
import { Entity, Column, ManyToMany, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { EmployeeEntity } from "../../employees/entities/employee.entity";
import { ShipperEntity } from "./../../shippers/entities/shipper.entity";
import { OrderDetailEntity } from "./../../order-details/entities/order-detail.entity";

@Entity({name:`order`})
export class OrderEntity extends BaseEntity {
    @Column({type: "date"})
    orderDate: Date
    
    @ManyToOne(()=> CustomerEntity, (customers)=>customers.orders)
    @JoinColumn({name:'customer_id'})
    customers:string

    @ManyToOne(()=> EmployeeEntity, (employee)=>employee.orders)
    @JoinColumn({name:'employee_id'})
    employee:string

    @ManyToOne(()=> ShipperEntity, (shipper)=>shipper.orders)
    @JoinColumn({name:'shipper_id'})
    shipper:string

    @OneToMany(()=>OrderDetailEntity, (orderDetails)=>orderDetails.order)
    orderDetails: OrderDetailEntity[];
}
