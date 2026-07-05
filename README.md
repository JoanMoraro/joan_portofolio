# Joan Moraro — Portfolio

My personal developer portfolio, built with Flask (Python) and vanilla HTML/CSS/JS.

🔗 **Live site:** https://joan-portofolio.onrender.com/

## About

A dark, minimal single-page portfolio showcasing my background as a backend developer, along with my projects, skills, and experience. Content is rendered server-side using Flask and Jinja2 templates, with project/experience data managed directly in Python.

## Tech Stack

- **Backend:** Python, Flask, Jinja2
- **Frontend:** HTML5, CSS3, JavaScript (no frameworks)
- **Deployment:** Render (via Gunicorn)

## Features

- Responsive single-page layout with smooth-scroll navigation
- Dynamic project and experience sections rendered from Python data
- Working contact form (submissions logged server-side)
- Expandable "Read more" section for the About page
- Custom favicon and downloadable CV

## Running Locally

Clone the repo and set up a virtual environment:

```bash
git clone https://github.com/JoanMoraro/joan_portofolio.git
cd joan_portofolio
python -m venv venv
```

Activate the virtual environment:

- **Windows:** `venv\Scripts\activate`
- **Mac/Linux:** `source venv/bin/activate`

Install dependencies:

```bash
pip install -r requirements.txt
```

Run the app:

```bash
python app.py
```

Then open **http://127.0.0.1:5000/** in your browser.

## Project Structure

```
joan_portofolio/
├── app.py                 # Flask app & routes
├── requirements.txt
├── Procfile                # Render deployment config
├── static/
│   ├── css/style.css
│   ├── js/script.js
│   ├── favicon.ico / favicon.png / apple-touch-icon.png
│   └── CV.pdf
└── templates/
    └── index.html
```

## Projects Featured

- **SmartLearn Platform** — Full-stack e-learning platform (Python, Django, PostgreSQL)
- **Smart Farm System** — Smart farming/automation solution (Python, IoT, Automation)
- **Distributed File System** — Distributed file storage with REST APIs (Java, Spring Boot, JWT)

## Contact

- Email: morarojoan378@gmail.com
- GitHub: [github.com/JoanMoraro](https://github.com/JoanMoraro)

---

© 2024 Joan Moraro. All rights reserved.
