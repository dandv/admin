Orion Admin
===========

This is the changelog for ```orionjs:admin```.

### 0.4.1

- Added icons to the sidebar. To set a icon to a entity add the ```icon``` key to the entity options. Only FontAwesome is supported.

### 0.4.0

- Added a setup page to create the first user. 
Orion will redirect the route ```/admin``` to ```/admin/setup``` if there are no created users.
The route ```setup``` page will always be visible, but only can creates accounts if there are no users.

- The login route now shows a beatuful page.

- Removed the dependency on ```orionjs:styles```. Now you can style the admin panel however you wan't.
