# Parent-Child Form Rendering App

This project is an example of how to render a child application within an iframe, where the parent application provides data to the child application to dynamically render input fields of a form.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Introduction

In web development, there are scenarios where you may need to embed one application within another. This can be achieved using iframes, where a parent application hosts the child application within a separate HTML document. This project demonstrates how to implement such a setup, where a parent application provides data to a child application, which then renders input fields dynamically based on that data.

## Features

- Render a child application within an iframe.
- Pass data from the parent application to the child application.
- Dynamically render input fields based on the provided data.
- Update the parent application with data entered in the child application.

## Tech Stack

This small project aims to render an app inside an iframe. For this task, using any libraries or framework would be overkill and carry a lot of unnecessary dependencies. The best approach is to use vanilla js and plain css.

- Vanilla Javascript
- CSS (Basic, no SASS / SCSS)
- HTML

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/dark-hat-Darkie/iframeApp.git
   ```

2. Navigate to the project directory:

   ```bash
   cd iframeApp
   ```

3. Install any live server that can serve HTML pages

## Usage

1. From the parent app directory, start your live server
   ```bash
   cd parentApp
   ```

3. Open your web browser and navigate to the server link to see the parent application with the child application embedded within an iframe.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Create a new Pull Request.
