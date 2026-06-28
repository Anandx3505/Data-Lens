# Data Lens 🔍

![Data Lens Hero](https://via.placeholder.com/1200x600?text=Data+Lens+-+Data+Quality+%26+Profiling+Platform)

Data Lens is a fast, modern Data Quality & Profiling Platform that allows users to instantly analyze datasets. Simply upload a CSV file to automatically generate comprehensive profiles, including data type inference, missing value detection, and uniqueness metrics for every column.

**[🔴 Live Demo (Frontend on Netlify)](https://your-netlify-url.netlify.app/)** | **[🟢 Live API (Backend on Render)](https://your-render-url.onrender.com/)**

---

## ✨ Features
* **Instant Data Profiling:** Upload a CSV and immediately get an overview of your dataset's shape and structure.
* **Missing Value Analysis:** Automatically calculates the percentage of missing values (nulls) per column to help identify data quality issues.
* **Data Type Inference:** Detects whether columns are numerical, categorical, dates, or strings.
* **Uniqueness Metrics:** Calculates the exact number of unique values in each column to detect categorical boundaries and potential primary keys.
* **Secure & Ephemeral:** Uploaded files are processed securely in memory and deleted after processing.

---

## 💻 Tech Stack
This project follows a clean client-server architecture.

**Frontend:**
* **React 19 & Vite** for lightning-fast performance and hot module replacement.
* **Tailwind CSS v4** for beautiful, responsive, and utility-first styling.
* Single Page Application (SPA) architecture configured for seamless deployment on Netlify.

**Backend:**
* **FastAPI** (Python) for a high-performance, asynchronous REST API.
* **Pandas** for heavy-lifting data processing and analytics.
* **Uvicorn** as the blazing-fast ASGI web server.

---

## 🚀 Local Development Setup

To run this project locally, you will need to start both the frontend and backend servers.

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/Data-Lens.git
cd Data-Lens
```

### 2. Backend Setup
Navigate into the backend directory, create a virtual environment, and run the FastAPI server:
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Start the backend server on http://localhost:8000
uvicorn app.main:app --reload
```

### 3. Frontend Setup
Open a new terminal, navigate to the frontend directory, install dependencies, and start the Vite dev server:
```bash
cd frontend
npm install

# Start the frontend server on http://localhost:5173
npm run dev
```

---

## 🌐 Environment Variables
When running locally, the frontend will default to `http://localhost:8000`. 
When deploying, set the `VITE_API_URL` environment variable in your frontend hosting provider to point to your live backend URL.

## 🔌 API Endpoints
You can use the API endpoints below to interact with the backend.
The backend provides the following REST API endpoints:

### `GET /`
Returns a welcome message indicating the API is running.

### `POST /upload`
Upload a CSV file for profiling.
- **Request:** `multipart/form-data` with a `file` field containing the CSV. Maximum size is 50MB.
- **Response:** JSON containing a success message and a generated `dataset_id`.

### `GET /profile/{dataset_id}`
Retrieves the generated data profile for the given dataset ID.
- **Parameters:** `dataset_id` (Path) - The UUID returned from the `/upload` endpoint.
- **Response:** JSON containing the full dataset profile (columns, data types, missing values, uniqueness metrics, etc.).

Thank You !!
