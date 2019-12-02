# fake-api

##### Usage

```
git clone https://github.com/andyBobro/fake-api.git
cd fake-api
yarn install
yarn api
```

You can view formatted json on address: `http://localhost:9000/view/<PART OF YOUR DATA>` and get it by request on `http://localhost:9000/api/<PART OF YOUR DATA>`

ex. 
```http://localhost:9000/api/users```

Also, if you want to go deeper in your data, you can send request like this: 
```http://localhost:9000/api/<PART OF YOUR DATA>/<DEEPER PART OF YOUR DATA>```

ex. `http://localhost:9000/api/users/0` (for getting first user of array)
