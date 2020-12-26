import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const config: TypeOrmModuleOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "admin",
  database: "tasks_nestjs",
  entities: [
     __dirname + "/../**/*.entity.js"
  ],
  synchronize: true
}