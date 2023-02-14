import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { EntrepriseModule } from './entreprise/entreprise.module';
import { ChronomodeModule } from './chronomode/chronomode.module';
import { InfractionsModule } from './infractions/infractions.module';
import { JourneeModule } from './journee/journee.module';
import { SemaineModule } from './semaine/semaine.module';
import { BiSemaineModule } from './bi-semaine/bi-semaine.module';
import { TriSemaineModule } from './triSemaine/triSemaine.module';
import { MoisModule } from './mois/mois.module';
import { AnneeModule } from './annee/annee.module';
import { PrismaModule } from './prisma/prisma.module';
import { APP_GUARD } from '@nestjs/core';
import {
  ThrottlerGuard,
  ThrottlerModule,
} from '@nestjs/throttler';



@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    BookmarkModule,
    PrismaModule,
    EntrepriseModule,
    ChronomodeModule,
    InfractionsModule,
    JourneeModule,
    SemaineModule,
    BiSemaineModule,
    TriSemaineModule,
    MoisModule,
    AnneeModule,
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
