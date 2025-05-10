Области хранения данных:

-   база данных на json-server
-   BFF
-   redax store

Сущности приложения:

-   пользователь: БД (список пользователей), BFF (сессия текущего), redux store (отображение в браузере)
-   роль пользователя: БД (список ролей), BFF (сессия пользователя с ролью), redux store (использование на клиенте)
-   материал: БД (список материалов), redux store (отображение в браузере)
-   комментарий: БД (список комментариев), стор (отображение в браузере)

Таблицы БД:

-   пользователи - users: id / login / password / registed_at / role_id
-   роли - roles: id / name
-   материалы - materials: id / title / image_url / content / published_at
-   комментарии - comments: id / author_id / material_id / content / published_at

Схема состояния на BFF:

-   сессия текущего пользователя: login / password / role

Схема для redux store (на клиенте):

-   user: id / login / roleId / session
-   materials: массив material: id / title / imageURL / publishedAt / commentsCount
-   material: id / title / imageURL / content / publishedAt / comments: массив comment: id / author / content / publishedAt
-   users: массив user: id / login / registeredAt / role
