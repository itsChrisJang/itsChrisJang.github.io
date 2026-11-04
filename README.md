# Junhwan (Chris) Jang — personal website

An al-folio site for https://itsChrisJang.github.io.

## Local development

Use Ruby 3.3+, Bundler, and Node.js 20+.

```sh
bundle install
npm ci
bundle exec jekyll serve
```

## Content

- `_pages/`: About, Experience, Writing, CV
- `_projects/`: product pages
- `_data/socials.yml`: contact links
- `_config.yml`: site settings

Content is based on the public GitHub profile. Education and project details should be confirmed before publication. No sample CV PDF is linked.

Original template: [al-folio](https://github.com/alshedivat/al-folio), MIT license; see LICENSE.

## Publications

Add real papers to `_bibliography/papers.bib` using BibTeX. The Publications page groups entries by year automatically. Supported fields include `doi`, `html`, `pdf`, `code`, `slides`, `abstract`, and `bibtex_show`. Put local paper PDFs in `assets/pdf/` only when they are ready for public distribution. Update the introductory sentence on `_pages/publications.md` when the first paper is added.

Education reflects the owner’s correction: incoming graduate student at Dongguk University, with Professor 김소정. Degree, department, and start date have not been specified.
