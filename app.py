from flask import Flask, render_template, request, redirect, url_for, flash

app = Flask(__name__)
app.secret_key = "change-this-secret-key"

projects = [
    {
        "title": "SmartLearn Platform",
        "desc": "A full-stack e-learning platform built with Python & Django.",
        "tags": ["Python", "Django", "PostgreSQL"],
        "demo": "#", "code": "#"
    },
    {
        "title": "Smart Farm System",
        "desc": "A smart farming solution built with Python to help monitor and manage farm operations.",
        "tags": ["Python", "IoT", "Automation"],
        "demo": "#", "code": "#"
    },
    {
        "title": "Distributed File System",
        "desc": "A distributed file storage system built with Java Spring Boot, focused on reliability and scalability.",
        "tags": ["Java", "Spring Boot", "Distributed Systems"],
        "demo": "#", "code": "#"
    },
]

experience = [
    {
        "role": "Software Engineer (Freelance)",
        "period": "Current",
        "desc": "Building web applications, APIs and automation scripts for clients worldwide.",
        "current": True
    },
    {
        "role": "Software Development Attaché",
        "company": "County Government of Kisii",
        "period": "May 2025 – Aug 2025",
        "desc": "Worked on real software used within government departments, collaborating with experienced developers to build secure, reliable systems. Gained hands-on experience writing clean code and solving problems methodically in a production environment.",
        "current": False
    },
]

@app.route("/")
def home():
    return render_template("index.html", projects=projects, experience=experience)

@app.route("/contact", methods=["POST"])
def contact():
    name = request.form.get("name")
    email = request.form.get("email")
    message = request.form.get("message")

    # For now just print to console — later we can wire this to real email sending
    print(f"New message from {name} ({email}): {message}")

    flash("Thanks for reaching out! I'll get back to you soon.")
    return redirect(url_for("home") + "#contact")

if __name__ == "__main__":
    app.run(debug=True)