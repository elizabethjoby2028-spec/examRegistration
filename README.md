# 🏛️ College End-Semester Examination Registration Portal

A complete, modern, minimalistic, and fully responsive web application for a college end-semester examination registration system. Built with **React**, **Vite**, and **Vanilla CSS**, packaged with a multi-stage **Docker** pipeline and served with **Nginx**.

Designed using a sophisticated beige-and-brown academic palette, clean typography, subtle micro-animations, and full client-side state persistence with `localStorage`.

---

## 🎨 Design Philosophy & Color Palette

The interface adopts a calm, prestigious academic theme tailored for higher-education portals:

| Token | Hex Code | Usage |
| :--- | :--- | :--- |
| **Background** | `#F5EFE6` | Main page background (soft beige) |
| **Cards & Surfaces** | `#FFFCF7` | Elevated content containers & forms |
| **Secondary Beige** | `#D8C3A5` | Borders, subtle dividers, pill accents |
| **Primary Brown** | `#8B5E3C` | Primary buttons, active tabs, brand accents |
| **Dark Brown Text** | `#3E2C23` | High-contrast readable headings & typography |
| **Muted Brown** | `#6E5B50` | Subtitles, helper text & table metadata |

### Micro-Interactions & Accessibility
- **Navigation Underlines**: Links smoothly animate an accent line on hover and indicate active views.
- **Card Elevations**: Cards lift gently (`translateY(-4px)`) and gain a subtle diffused shadow on hover.
- **Form Inputs**: Generous hit targets, rounded corners (`12px`), and a focused brown outline with glow.
- **Interactive Subject Cards**: Instant visual feedback with checkmark toggling, credit counts, and real-time fee calculation.
- **Reduced-Motion Support**: Built-in `@media (prefers-reduced-motion: reduce)` compliance for accessibility.

---

## ✨ Features & Functionality

### 1. 🏛️ Portal Home & Notice Board
- Academic institution placeholder (*Apex Institute of Technology & Science*) and custom SVG crest logo.
- Hero banner with prominent **"Register Now"** call to action and **"Track Registration Status"** lookup button.
- Key examination timeline card detailing regular registration windows, late deadlines, hall ticket releases, and examination dates.
- Interactive 3-step registration process guide with step-by-step instructions.

### 2. 📝 Student Registration Form
- **Form Fields (Validated & Required)**:
  - Full Name (as per University Records)
  - University Register / Enrollment Number (alphanumeric validation)
  - College Email Address (RFC format validation)
  - Course / Programme (B.Tech CSE, ECE, AI & Data Science, BCA, MBA)
  - Semester Selection (Semesters 1 through 8, dynamically linked to programme)
  - Academic Year (e.g., `2025-2026`)
  - Examination Session (Regular, Supplementary, Special Improvement)
- **Selectable Examination Subjects**:
  - Automatically loads course-specific theory and practical/laboratory papers.
  - "Select All" and "Deselect All" convenience toggles.
  - Theory / Practical badges with credit values.
- **Dynamic Examination Fee Calculator**:
  - Live computation as subjects are selected or deselected.
  - Granular breakdown: Theory fees, Practical lab fees, fixed Marksheet charges, and administrative processing fees.
- **Academic Declaration**: Required confirmation checkbox certifying attendance threshold (minimum 75%) and no outstanding dues.
- **Quick Demo Autofill**: Single-click "Fill Sample Student Data" button for rapid evaluation and testing.

### 3. 🔍 Registration Status & Printable Acknowledgement Slip
- Instant generation of a unique Demo Registration ID (e.g., `REG-2025-4921`) upon form submission.
- Real-time ID lookup with friendly error handling.
- Displays registered student profile, chosen course list, credit tally, and simulated payment receipt.
- **Persistent Storage**: All demo records persist in browser `localStorage` across page reloads.
- **Recent Submissions Quick-Picker**: Chips to quickly load and inspect saved submissions.
- **Print & PDF Export**: Integrated `@media print` layout formatting a clean, professional paper receipt.

### 4. 📋 Examination Guidelines & Contact Helpdesk
- Detailed eligibility regulations: 75% attendance rule, condonation terms, and elective course code verification.
- Prohibited articles and code of conduct reminders.
- Institutional Helpdesk contact directory: Controller of Examinations (COE) office, physical desk room, telephone extensions, and official email.
- Transparent disclaimer banners labeling all fees, dates, and schedules as demo simulation data.

---

## 🛠️ Technology Stack

- **Frontend**: React 18, Vite 5, Vanilla CSS3 (custom CSS variables & keyframe animations), Lucide React (feather icons)
- **Containerization**: Docker (Multi-stage build)
- **Web Server**: Nginx Alpine with custom SPA fallback (`try_files $uri $uri/ /index.html;`)
- **Version Control**: Git & GitHub
- **Image Registry**: Docker Hub ready

---

## 🚀 Getting Started (Local Development)

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher)
- [npm](https://www.npmjs.com/) (v9.0.0 or higher)

### 1. Clone or Open the Repository
```bash
git clone https://github.com/your-username/college-exam-portal.git
cd college-exam-portal
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Build for Production
```bash
npm run build
```
This generates the optimized production bundle in the `dist/` directory.

---

## 🐳 Docker Containerization

The project uses a production-ready, lightweight multi-stage Docker setup:
- **Stage 1 (`builder`)**: Uses `node:20-alpine` to compile the Vite React bundle.
- **Stage 2 (`production`)**: Uses `nginx:alpine` (~25MB) to serve static files with gzip compression and client-side routing support.

### Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running.

### 1. Build the Docker Image
```bash
docker build -t college-exam-portal:latest .
```

### 2. Run the Docker Container
Map the container's internal port `80` to host port `8080`:
```bash
docker run -d --name exam-portal -p 8080:80 college-exam-portal:latest
```

### 3. Access the Application
Open your browser and visit:
👉 **[http://localhost:8080](http://localhost:8080)**

### 4. Stop and Remove the Container
```bash
docker stop exam-portal
docker rm exam-portal
```

---

## 🌐 Publishing to Docker Hub

Follow these steps to publish the container image to your public Docker Hub repository:

### Step 1: Log in to Docker Hub
```bash
docker login
```
*(Enter your Docker Hub username and password/personal access token)*

### Step 2: Tag Your Local Image
Replace `YOUR_DOCKERHUB_USERNAME` with your actual Docker Hub handle:
```bash
docker tag college-exam-portal:latest YOUR_DOCKERHUB_USERNAME/college-exam-portal:v1.0.0
docker tag college-exam-portal:latest YOUR_DOCKERHUB_USERNAME/college-exam-portal:latest
```

### Step 3: Push Image to Docker Hub
```bash
docker push YOUR_DOCKERHUB_USERNAME/college-exam-portal:v1.0.0
docker push YOUR_DOCKERHUB_USERNAME/college-exam-portal:latest
```

### Step 4: Anyone Can Now Pull and Run Your Image!
```bash
docker run -d -p 8080:80 YOUR_DOCKERHUB_USERNAME/college-exam-portal:latest
```

---

## 🌿 Git & GitHub Version Control Workflow

### 1. Initialize Git Repository (if not already done)
```bash
git init
```

### 2. Verify Ignored Files
The included `.gitignore` ensures that `node_modules`, `dist`, logs, and temporary files are omitted:
```bash
git status
```

### 3. Commit All Source Files
```bash
git add .
git commit -m "feat: complete college end-semester examination registration portal"
```

### 4. Push to GitHub
```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/college-exam-portal.git
git push -u origin main
```

---

## 📁 Project Directory Structure

```text
college-exam-portal/
├── .dockerignore                 # Excludes node_modules, logs & artifacts from Docker build
├── .gitignore                    # Excludes build outputs and dependencies from git
├── Dockerfile                    # Multi-stage Dockerfile (Node.js build -> Nginx Alpine)
├── index.html                    # HTML5 template with Google Fonts (Outfit & Plus Jakarta Sans)
├── nginx.conf                    # Nginx configuration with SPA client-side fallback
├── package.json                  # Project metadata, scripts, and dependencies
├── README.md                     # Comprehensive documentation & setup instructions
├── vite.config.js                # Vite build and development configuration
└── src/
    ├── main.jsx                  # Application entry point
    ├── App.jsx                   # Main layout container & tab navigation manager
    ├── index.css                 # Custom design tokens, beige-and-brown palette & styles
    ├── data/
    │   └── coursesAndSubjects.js # Sample programmes, semesters, and course syllabus data
    └── components/
        ├── Header.jsx            # Academic crest, navigation links & mobile menu drawer
        ├── Hero.jsx              # Hero banner, call-to-action buttons & timeline card
        ├── NoticeBanner.jsx      # Urgent notification ticker with demo deadlines
        ├── RegistrationProcess.jsx # 3-step visual enrollment guide
        ├── RegistrationForm.jsx  # Student details, subject toggles & dynamic fee breakdown
        ├── RegistrationStatus.jsx # ID lookup, localStorage persistence & printable slip
        ├── Instructions.jsx      # Regulations, eligibility guidelines & COE contact card
        └── Footer.jsx            # Institutional footer, quick links & disclaimer
```

---

## 🔒 Security & Demo Disclaimer

- **Demonstration Application**: This portal is an educational prototype and user experience demonstration.
- **No Real Submission**: Submitting a registration does not register a student with any actual university or examination authority.
- **Data Privacy**: No confidential personal records or payment credentials are collected or sent across the network. All data is kept exclusively in your local browser sandbox (`localStorage`).

---

## 📄 License
This project is licensed under the [MIT License](LICENSE).
