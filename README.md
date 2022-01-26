# Simple REST API Example (2021.2)

![Licença](https://img.shields.io/badge/license-MIT-brightgreen)

## About

<p align="center">Small educational project developed with the objective of presenting the concepts related to the development of backend REST APIs with Node.js for the course *Distributed Systems* (2021.2) of the Computer Engineering Course - Federal University of Maranhão (UFMA)
</p>


## Table of Contents
=================

   * [About](#about)
   * [Table of Contents](#table-of-contents)
   * [Project Description](#-project-description)
   * [Prerequisites](#-prerequisites)
   * [Installation](#-installation)
   * [Technologies](#-technologies)
   * [Author](#-author)

---

## 💻 Project Description

The project consists of a simple REST API developed during the classes of the course in order to help the students to understand how some concepts are implemented in a real world REST API using [Node.js](https://nodejs.org/en/) + [Express.js](https://expressjs.com/). Concepts like distributed algorithms, HTTP methods, endpoints, backend architecture and middlewares were some of the topics discussed during the course.

This application don't implement the `/orders/` endpoints, being a task for the students.

---

<a name="prerequisites"></a>
## ⚙️ Prerequisites

Before starting, you need the Node.js environment installed and configured. It can be installed directly from the [official website](https://nodejs.org/en/) or through the [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm) tool.

Since Node.js is installed and configured (test this with the `node --version` command), you can now clone this repository and install the dependencies.

```bash
# Clone this repository
$ git clone https://github.com/rafaelfl/rest-sd-2021-2

# Enter in the project folder in terminal/cmd
$ cd rest-sd-2021-2
```

---

## 🚀 Installation

After installing Node.js, you can install the dependencies and run the project.

```bash
# Install the dependencies
$ yarn install

# Run the project using the following syntax
$ yarn start
```

To test or consume api locally, you can make use of [Postman](https://www.getpostman.com/), [Insomnia](https://insomnia.rest/download/) or [Thunder Client for VS Code](https://www.thunderclient.com/).

---

## 🗂 API Routes

The route prefix is `/api` by default.

| Route          | Method      | Description |
| -------------- | ----------- | ----------- |
| **/api**       | GET         | Shows a welcome message for the API |
| **/api/menu**  | GET         | List all pizzas in the menu |
| **/api/menu**  | POST        | Add a new pizza to the menu |

### Manipulating the pizza menu

In order to add a new pizza to the menu, one have to send a POST request to the `/api/menu` with a JSON body containing data in the following format:

```
{
    "id": 5,
    "nome": "Napotalina",
    "descricao": "Um misto quente em forma de pizza!",
    "preco": 9.0
}
```

To test if the new pizza was added to the menu, one need to send a GET request to the `/api/menu`. Something like this should be shown in the response body:

```
[
  {
    "id": 1,
    "nome": "Calabresa",
    "descricao": "Calabresa com molho de tomate",
    "preco": 15
  },
  {
    "id": 2,
    "nome": "Nordestina",
    "descricao": "Pizza de carne de sol com manteiga de garrafa",
    "preco": 20
  },
  {
    "id": 3,
    "nome": "Mateus",
    "descricao": "Pizza com presunto, bacon e queijo",
    "preco": 15
  },
  {
    "id": 5,
    "nome": "Napotalina",
    "descricao": "Um misto quente em forma de pizza!",
    "preco": 9
  }
]
```

---

## 🛠 Technologies

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)

---

## 🦸 Author

<a href="https://github.com/rafaelfl/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/31193433?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Prof. Rafael Fernandes Lopes, Ph.D.</b></sub></a>


Developed with 💜 by Rafael Fernandes Lopes

[![Linkedin Badge](https://img.shields.io/badge/-Rafael%20Fernandes%20Lopes-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/rafael-fernandes-lopes/)](https://www.linkedin.com/in/rafael-fernandes-lopes/)
