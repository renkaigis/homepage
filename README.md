# Static Academic Homepage

This is a minimal, scholarly static website designed for GitHub Pages.

## Files

- `index.html`: homepage with profile, links, work experience, research interests, featured projects, featured publications, teaching, service, awards, and contact.
- `zh/index.html`: Chinese homepage with the same layout and a visible language switch back to English.
- `about/index.html`, `research/index.html`, `projects/index.html`, `publications/index.html`, `cv/index.html`, `contact/index.html`: folder-based pages so deployed URLs can use paths such as `/about/` instead of `/about.html`.
- `details/projects/*/index.html`: dedicated project detail pages opened from project dialogs.
- `details/papers/*/index.html`: dedicated paper detail pages opened from publication dialogs.
- `css/styles.css`: global styles.
- `js/main.js`: mobile menu, theme toggle, and dialog behavior.
- `image/`: local placeholder images and icons.
- `assets/`: reserved for your own documents, PDFs, datasets, and other downloadable files.

## Customize

1. Replace `Kai Ren`, email, affiliation, biography, links, project descriptions, and publication details.
2. Replace `image/avatar.jpg` with your own photo, or update the avatar path in `index.html` and `zh/index.html`.
3. Update `cv/index.html`, or add your CV PDF and change the homepage button to the PDF path.
4. Replace placeholder DOI, PDF, code, dataset, project, and profile URLs in `js/main.js` and the HTML files.
5. Update both `index.html` and `zh/index.html` if you want the English and Chinese homepages to stay aligned.

## Deploy to GitHub Pages

1. Commit these files to a GitHub repository.
2. In GitHub, open `Settings` > `Pages`.
3. Select the branch, usually `main`, and the root folder.
4. GitHub Pages will publish `index.html` as the homepage.
