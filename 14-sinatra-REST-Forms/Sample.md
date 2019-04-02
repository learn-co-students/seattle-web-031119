- Model/Kitchen/Chef : - Produces food.
  - class Chef < ActiveRecord::Base

- Controller/Server : - Taking the order to the chef/kitchen.
                      - Get the menu
  - 'GET'  for the menu
  - 'POST' for the kitchen for what the viewer wanted

- View/Customer : - Order food with dietary rsestrictions - Get food from controller
       - Send food back to the controller
         - DELETE ( POST/DELETE) , PATCH(POST/PATCH)
       - Update order
          - PATCH(POST/PATCH)
       - Delete/eat the food
          - DELETE ( POST/ PATCH)
       - I don't like this item/remove it from the restaurant
          - DELETE (POST/PATCH)
       - Pay the check.
          - GET ( check) -> UPDATE(POST/PATCH)

          - Relationship with a class for checks.

          - Update variable (POST/PATCH)
[] Create, [] Read,[] Update, [] Delete
[] GET, [] POST, [] PATCH, [] DELETE
---------------------------------------------------------
