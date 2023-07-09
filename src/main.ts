import * as process from "process";
import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";


async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);


    const config = new DocumentBuilder()
        .setTitle('NestJS')
        .setDescription('The NestJS API description')
        .setVersion('1.0.0')
        .addTag('Alen')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);

    // app.useGlobalPipes(new ValidationPipe());

    await app.listen(PORT, () => console.log('Server is running = ' + PORT));
}

start();