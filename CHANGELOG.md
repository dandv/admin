Orion Admin
===========

This is the changelog for ```orionjs:admin```. 

### 0.0.4

- Added a setup page to create the first user. 
Orion will redirect the route ```/admin``` to ```/admin/setup``` if there are no created users.
The route ```setup``` page will always be visible, but only can creates accounts if there are no users.

- Removed the dependency on ```orionjs:styles```. Now you can style the admin panel however you wan't.
