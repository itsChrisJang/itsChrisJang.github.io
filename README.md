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
- `_data/career.yml`: career facts shared by About, CV, and Experience
- `_data/education.yml`: education shared by About and CV
- `_data/socials.yml`: contact links
- `_config.yml`: site settings

Content is based on the public GitHub profile, the Figma resume, and direct owner corrections. When sources conflict, direct owner corrections take precedence. No sample CV PDF is linked.

Original template: [al-folio](https://github.com/alshedivat/al-folio), MIT license; see LICENSE.

## Publications

Add real papers to `_bibliography/papers.bib` using BibTeX. The Publications page groups entries by year automatically. Supported fields include `doi`, `html`, `pdf`, `code`, `slides`, `abstract`, and `bibtex_show`. Put local paper PDFs in `assets/pdf/` only when they are ready for public distribution. Update the introductory sentence on `_pages/publications.md` when the first paper is added.

Dongguk entry is expected in March 2027. Hanyang is shown by entry date only; no current attendance or completed degree is implied. The Projects menu, listing, and four product detail pages have been removed at the owner’s request.
