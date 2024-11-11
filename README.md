# PolyDocs

https://polykarma.github.io/poly-docs/

PolyDocs is a collaborative, community-driven resource for students and educators at Polytechnique Montreal. Our goal is to create a centralized repository of knowledge, including course notes, tutorials, study guides, and more, that is accessible and editable by anyone within the Polytechnique community. Whether you're looking to learn, review, or contribute, PolyDocs has something for you.

## Table of Contents
- [Website](#website)
- [Installation](#installation)
- [Local Development](#local-development)
- [How to Contribute](#how-to-contribute)
- [Content Guidelines](#content-guidelines)
- [License](#license)

## Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator. Docusaurus makes it easy to create organized, content-rich documentation websites, which is perfect for our community-driven project.

## Installation

To set up the project locally, first clone the repository, then install the dependencies:

```bash
$ git clone https://github.com/YOUR_GITHUB_USERNAME/poly-docs.git
$ cd poly-docs
$ yarn
```

## Local Development

To start a local development server:

```bash
$ yarn start
```

This command will start a development server and open the website in your browser. Most changes you make to the code or content will automatically refresh in the browser, so there's no need to restart the server for every change.

## How to Contribute

We welcome contributions from everyone! Here’s how you can contribute to PolyDocs:

1. **Fork the Repository**  
   Click on the "Fork" button at the top right of this repository's GitHub page to create a personal copy of PolyDocs under your GitHub account.

2. **Clone Your Fork**  
   Clone the forked repository to your local machine:
   ```bash
   $ git clone https://github.com/YOUR_GITHUB_USERNAME/poly-docs.git
   $ cd poly-docs
   ```

3. **Create a New Branch**  
   Create a new branch for your contribution:
   ```bash
   $ git checkout -b your-branch-name
   ```

4. **Edit or Add Content**  
   - Add or edit Markdown files (`.md`) in the appropriate directory.
   - Follow our [Content Guidelines](#content-guidelines) for the types of content we’re looking for.

5. **Preview Your Changes**  
   Run the local development server to preview your changes:
   ```bash
   $ yarn start
   ```

6. **Commit and Push Your Changes**  
   Once you’re happy with your changes, commit them:
   ```bash
   $ git add .
   $ git commit -m "Add/Update: Description of changes"
   ```
   Then push your branch to your fork:
   ```bash
   $ git push origin your-branch-name
   ```

7. **Submit a Pull Request (PR)**  
   - Go to the original `poly-docs` repository on GitHub.
   - You’ll see a prompt to submit a pull request from your forked repository.
   - Click on "Compare & pull request," provide a title and description for your PR, and submit it.

8. **PR Review**  
   Your PR will be reviewed by a maintainer. Once approved, it will be merged into the main branch and published on the PolyDocs website!

## Content Guidelines

PolyDocs accepts a wide variety of content. Some examples include:
- **Course Notes**: Summaries, explanations, or reviews of course material.
- **Tutorials**: Step-by-step guides on topics relevant to Polytechnique courses.
- **Study Guides**: Compilations of key concepts, practice questions, and solutions.
- **Translations**: Translated versions of existing content to reach a broader audience.
- **Other Resources**: Anything that might help students, such as quick reference sheets or diagrams.

Please make sure that all contributions adhere to academic integrity standards and do not include copyrighted material without permission.

## License

PolyDocs is open-source under the [GPL License](LICENSE). By contributing, you agree that your contributions will be licensed under the same license.

---

Thank you for helping to make PolyDocs a valuable resource for everyone at Polytechnique Montreal!