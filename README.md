<div>
    <p align="center">
        <img src="./logo.png" align="center" width="240" />
    </p>
    <hr>
    <blockquote align="center">
        “Bicycles are the new rollerblades, talentless is the new talented, and I’m in hog heaven.” - Ryan Seacrest
    </blockquote>
</div>

<br>

<p align="center">
  <a href="https://github.com/joggrdocs/hog-heaven/actions/workflows/github-code-scanning/codeql">
    <img alt="CodeQL" src="https://github.com/joggrdocs/hog-heaven/actions/workflows/github-code-scanning/codeql/badge.svg">
  </a>
  <a href="https://github.com/joggrdocs/hog-heaven/actions/workflows/ci.yaml">
    <img alt="CI" src="https://github.com/joggrdocs/hog-heaven/actions/workflows/ci.yaml/badge.svg">
  </a>
  <br/>
  <a href="https://github.com/standard/semistandard">
    <img alt="JS Semi-standard Style" src="https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg">
  </a>
  <a href="https://github.com/prettier/prettier">
    <img alt="Prettier Style" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square">
  </a>
</p>

# Overview

Github action for sending release annotations to PostHog, aka make sure your PostHog cloud is in "Hog Heaven".

## Usage

```yaml
name: 'Release the Kraken'

on:
  release:
    types: [created, published]

jobs:
  publish:
    name: Publish
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v1

      # ... do some release things...
      
      - name: Check if package.json Version matches tag
        uses: joggrdocs/hog-heaven@main
        with:
          api_key: ${{ secrets.POSTHOG_API_KEY }}
          project_id: 1111111
          content: "Release - ${{ github.repository }}@${{ github.ref_name }}" 
          # => outputs: "Release - @joggrdocs/hog-heaven@v1.0.0" 
```

## Note on existing "PostHog Annotations" action 🤦‍♂️

So our CTO built this late on a Saturday night will drinking 🍺 while chatting on discord with "coding friends". He did NOT do proper research and realized after he was finished and pushed it to the marketplace, that PostHog already built something that DOES THE EXACT SAME THING that they use internally. In the spirit of the [sunken cost fallacy](https://en.wikipedia.org/wiki/Sunk_cost) and the rationalization that his version is typed, newer, and has a snazzy logo... we're going to use this package and continue to invest in it (as long as we use PostHog).

Note to reader, I realize if you look at the git blame, the "CTO" is writing in the third person. After 3 hours on a Saturday night I needed some humor... cheers 🍻.

[PostHog Github Action](https://github.com/marketplace/actions/posthog-annotations)

