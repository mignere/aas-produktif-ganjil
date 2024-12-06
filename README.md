# Running a Static Website with Docker and Node.js Runtime

In this guide, we will create a simple static website using Docker and Node.js. Each part of the code is explained to ensure clarity and flexibility for any modifications you may wish to make.

## Building the Docker Image

To create a Docker image for the container, use the following command:

```docker
docker build -t <image-name>:<tag> .
```

Replace `<image-name>` and `<tag>` with your preferred name and version for the image.

## Running the Container

Once the image is built, you can run a container using the following command:

```docker
docker run -p 3000:3000 <image-name>:<tag>
```

This command maps port 3000 of the container to port 3000 of your local machine, making your static site accessible at `http://localhost:3000`.
