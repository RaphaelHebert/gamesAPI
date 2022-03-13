| endpoints                | action                               | output                                 |
|--------------------------|--------------------------------------|----------------------------------------|
| GET /users/              | select * from users                  | list of users                          |
| GET /users/:id           | select * from users where user-id=id | string user                            |
| POST /users/             | insert into users user               |                                        |
| GET /scores/:game/:id    | select * from scores where..         | list of scores                         |
| GET /scores/:name/topTen | select * from scores where           | list of the top ten scores for a game  |
| POST /scores/            | insert into scores...                |                                        |
| POST /auth/signIn        | insert into scores...                |  {message, JWT}                        |
| POST /auth/signUp        | insert into scores...                |  {message}                             | 