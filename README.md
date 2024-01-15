# RESTful API

## How to use?

```
$ git clone https://github.com/Synrgy-Academy-Final-Project/Backend-FSW.git  # get source code of the repository
$ cp .env.example .env                                                       # copy file .env.example to .env
$ npm install                                                                # install package
```

## Scripts

```
$ npm run build                                     # build typescript project
$ npm run dev                                       # run in development mode
$ npm run setup                                     # run migration, seeder
$ npm run knex migrate:up filename.ts               # run migration specific filename
$ npm run knex migrate:down filename.ts             # drop migration specific filename
$ npm run knex migrate:make migration_name          # create new file migration
$ npm run knex seed:make seed_name                  # create new file seeds
$ npm run knex seed:run --specific=filename.ts      # run seed with specific filename
$ npm run keys                                      # create private and public key jwt, no passphrase
```

## Account Login Admin

```json
{
    "email": "mizz@gmail.com",
    "password": "mizz"
}
```

## Run remote database fly

```
$ fly proxy 5432 -a backend-fsw-db
```
