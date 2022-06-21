# Project REST-Rant

REST-Rant is an app where users can review restaurants.

## Route Table 
| METHOD | PATH | PURPOSE |
| :---:  | :---:| :---:   |
| GET    |  /   | Home page |
| GET    | /places | Places index page|
| POST   | /places | Create new page  |
| GET    | /places/new | Form page for creating a new place |
| GET    | /places/:id | Details about a particular place|
| PUT    | /places/:id | Update a particular place|
| GET    | /places/:id/edit | Form page for editing an existing place |
| POST   | /places/:id/rant  | Create a  rant (comment) about paticular place |
| DELETE | /places/:id/rant/:rantld | Delete a rant (comment) about a particular place | 
| GET    |   *    |404 page (matches any route not defined above) |

## RESTAURANTS (MOCK) DATA
1. Name (string)
2. City (string)
3. State (string)
4. Cuisines (string)
5. Picture (string)
