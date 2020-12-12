import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './User/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import UserEntity from './db/entity/user.entity';
import BooksModule from './Books/books.module';
import GenreModule from './Genre/genre.module';
import BookEntity from './db/entity/book.entity';
import GenreEntity from './db/entity/genre.entity';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { TodoModule } from './todo/todo.module';

@Module({
    imports: [UserModule ,
            BooksModule,
            GenreModule,
            TypeOrmModule.forFeature(
                [UserEntity, BookEntity , GenreEntity],
            ),
            TypeOrmModule.forRoot(),
            AuthModule,
            TodoModule
            ],
    controllers: [AppController],
    providers: [
        AppService,
        {
            provide: APP_GUARD,
            useClass: JwtAuthGuard
        }
    ],
})
export class AppModule {}