# docker composer basic commands

- docker-compose up -d #create multiple containers node
- docker-compose up --build #force rebuild containers
- docker-compose down #rewove multiple containers node

## docker restart policies

| on             | description                                        |
| :------------- | :------------------------------------------------- |
| "no"           | never attempt to restart                           |
| always         | if stops from any reason always try to restart     |
| on-failure     | only restart if container stops with an error code |
| unless-stopped | alwyas restart unless stop (killed) focibly        |

`"no"` is default, use quotes because `no` in yml is false
