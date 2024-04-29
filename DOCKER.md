<!-- # Dockerizing a project  -->

[playlist](https://www.youtube.com/watch?v=31ieHmcTUOk&list=PL4cUxeGkcC9hxjeEtdHFNYMtCpjNBm3h7&index=1)

<!--
> sudo apt install docker.io

Docker Container -> instance of a docker image that one can create, start, stop, move or delete, is portable and is isolated

## Docker Image:

A running container uses an isolated filesystem. This isolated filesystem is provided by an image, and the image must contain everything needed to run an application - all dependencies, configurations, scripts, binaries, etc. The image also contains other configurations for the container, such as environment variables, a default command to run, and other metadata.

## Containerizing an application

> touch Dockerfile -->

Need: A server developed on node 17 on my machine would break on someone else's machine if they are not using node 17, so they need to setup their systems similar to mine prior to attempting to run the code - a bad practise
