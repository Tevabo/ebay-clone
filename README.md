# User stories

- As a seller I want to be able to add an advertisement to sell something

- As a seller I want to be able to create advertisements without logging or signing in

- X As a buyer I want to be able to view a list of advertisements as the first thing I see in the app

- As a seller I want to add a title, description, picture (url), price, email address       and phone number to my advertisement

- X As a buyer I want to view the title and price in the advertisement list

-  As a buyer I want to be able to click on an advertisement and be able to see the description, picture (url), price, email address and phone number



# Database structure

-  X table name: advertisement

-  X title, price, ad id

- X*detail page: description, picture(url), price, email address, phone number
* Page exists, could hypothetically display the details if there were any in the database


# Routing and endpoints

Routing through HTTPie done, not yet through client

- GET all advertisements (in a list), should be localhost:4000/ [home]

- GET one detail page, should be localhost:4000/advertisements/:id

- POST should add one advertisement to the list. POST localhost:4000/advertisements

- PUT should change the detail page for the single advertisement you posted?
    PUT localhost:4000/advertisement/:id

# Database integration

- X in the actions do request to localhost:4000