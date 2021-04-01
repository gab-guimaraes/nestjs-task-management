<h1>NEST.JS Course</h1>

<h3>Creating a NesJS Project<h3>
<h4>Commands Utils<h4>
create project
nest new project-name
nest g module tasks
npm run start:dev
nest g controller tasks --no-spec
nest g service tasks --no-spec

class-validator

npm install class-validator class-transformer --save

<h3>Install Postegres<h3>

install postresql

<h3>typeORM<h3>

npm install --save @nestjs/typeorm typeorm pg


IMPORTANT: TypeORM Entity Configuration

In the upcoming lectures, I will be definint the "entities" property of the TypeORM configuration like so:

entities: [__dirname + '/../**/*.entity.{js,ts}']



Instead, DO NOT include the "entities" property, and add the following property to the configuration:

autoLoadEntities: true



 