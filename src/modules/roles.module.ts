import { Module } from '@nestjs/common';
import { RolesService } from './roles/roles.service';
import { RolesController } from './roles/roles.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Role} from "./roles/roles.model";
import {UserRoles} from "./roles/user-roles.model";
import {User} from "./users/users.model";

@Module({
  providers: [RolesService],
  controllers: [RolesController],
  imports: [
      SequelizeModule.forFeature([Role, User, UserRoles])
  ],
    exports: [RolesService]
})
export class RolesModule {}
