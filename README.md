<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">

<h3 align="center">NextJS Blog App</h3>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
  
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This project renders blogs with static content. To add new blog we need to add new blog page to server and update the server. We can use database to get blogs in the future if there are lots of blog content but until now this method makes the content load faster.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- Next JS

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

To install project we need to install Node.js and npm.

First we need to install node.js. You can click the link to donwload node.js remember download to LTS version for stable version.

1. [download node.js](https://nodejs.org/en)

2. npm
   ```sh
   npm install npm@latest -g
   ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Enisbeygorus/nextjs-blog-app.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

To start project. Go to project root folder write

```sh
npm run dev
```

and open http://localhost:3000/ in browser.

you can see blog link, click it and it will route you to blog page.

If you want to add new blog page, create a ".md file" and insert it to **/src/content/blogs**

You can copy **example-template.md** in blogs folder to write your own content.

After adding new blog page just restart server.

## Usage with Docker

To start project with docker. First install docker.

To build an image, in root folder copy the following code and run it.

```sh
docker build --tag node-next-js-blog-app .
```

In Dockerfile expose port is 3000. To run image in container type following code.

```sh
docker run -p 3000:3000 node-next-js-blog-app
```

If you want to start app in different port type following code

and change the &lt;port> which port you want it to run.

```sh
docker run -p <port>:3000 node-next-js-blog-app
```
