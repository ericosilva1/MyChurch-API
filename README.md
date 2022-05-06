# MyChurch API
This is a RESTful API exercise presented as a challenge and then, as requested, in [MyChurch APP](https://github.com/ericosilva1/MyChurch-APP).

## Features
- Create users;
- Login users;
- Authorized users can create, see, update and delete rooms and children.


## Tech

MyChurch server uses:

- nodejs;
- express;
- json web token;
- bcryptjs.

## Usage

Local:

- clone this repo;
- ``` npm i```;
- set your environment variables with:
```sh
PORT=         // your preference
MONGO_URI=       // your connection to a Mongo DB
JWT_SECRET=   // your own secret
```

## Endpoints:


| Method |	Endpoint | Payload | Response | Action |
| ------ | ------ | ------ | ------ | ------ |
| PUT | checkin/:childId/:roomId | - | { message } | Checkin or checkout child.
|POST|	/auth/signup|	{"name":String, "email":String "password":String}|	{newUser (without password)}|	Create new user|
|POST|	/auth/login	{"email":String, "password":String}|	{user; JWT}|	Return JWT to private routes|
|POST|	/children|	{ "name": String, "age": Number }|	{ newChild }|	Creates a child linked to the user|
|GET|	/children|	-	|[ { children } ]|	Get all children from an user, populated with name, room and age|
|PUT|	/childen/:childId|	{ "name": String, "age": Number }|	{ child }|	Updates a child made by the user|
|DELETE|	/childen/:childId|	-	|{ message }|	Deletes a child|
|POST|	/rooms|	{ name*, teacher, decription,  }|	{ room }|	Creates a room that will be linked to some children|
|GET|	/rooms|	-|	[{ room }]|	Get all rooms from DB|
|GET|	/rooms/:roomId|	-|	{ room }|	Get a room by the id with children populated|
|PUT|	/rooms/:roomId|	{ name*, teacher, decription,  }|	{ room }|	Updates a room name, teacher or description|
|DELETE|	/rooms/:roomId|	-|	{ message }|	Deletes a room.|

All endpoints except the ones starting with /auth need to use a token (bearer) authorization header.


## License

MIT

**Free Software!**