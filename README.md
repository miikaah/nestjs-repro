This is a repro to showcase problems in NestJS v5.1.0 with @nestjs/swagger v2.5.1 date 15.9.2018.

I started by generating a new NestJS project with `nest new nestjs-repro`

### Major problem

Steps (following https://docs.nestjs.com/recipes/swagger):

1. `npm install --save @nestjs/swagger`
1. Copy & paste the bootstrap config for Swagger from the aforementioned URL to main.ts
1. Generate a new controller with `nest g controller problem`
1. Add a get route handler with a path parameter like here (https://docs.nestjs.com/controllers) in Headers -> Route parameters
1. Navigate to http://localhost:3000/api/#/default/get_problem__id_
1. As you can see Parameters section says `No parameters` so clearly the Swagger spec hasn't been correctly generated

This is the first time I've tried NestJs so I'm assuming this is a regression, or that the documentation is not up-to-date.
