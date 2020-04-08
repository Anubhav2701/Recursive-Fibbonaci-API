# Recursive-Fibbonaci-API

Created this API to easily simulate load to a bunch of services deployed in k8s environment.

To Use:
- Clone this repo and go inside the project folder.
- `node index.js`.
- Or you can build the docker image and run it. The default port on which server listens on is 3000.
  Docker Build Example:
  - `docker build . -t fib-api`
  - `docker run -p 8080:3000 fib-api`
  Now you can access API on port 8080 of your machine.
- In a k8s environment, or docker-compose, you can overide `PORT` and `API` env variables and play around with it.
