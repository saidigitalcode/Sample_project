Here are the detailed steps to deploy your project to Azure, with the backend (Django) and PostgreSQL database set up together in Azure App Service, and the frontend (React) deployed to Azure Static Web Apps.

---

## 1. Prepare Your Codebase

### 1.1. Frontend (React)
- Ensure your React app works locally.
- In the `frontend` directory, run:
  ```
  npm install
  npm run build
  ```
- This creates a `build` folder for production.

### 1.2. Backend (Django)
- Ensure your Django app works locally.
- Add `gunicorn`, `whitenoise`, and `psycopg2-binary` to your `requirements.txt`:
  ```
  pip install gunicorn whitenoise psycopg2-binary
  ```
- In `settings.py`:
  - Set `DEBUG = False`
  - Set `ALLOWED_HOSTS = ['*']` (or your Azure domain)
  - Configure static and media files:
    ```python
    STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
    STATIC_URL = '/static/'
    MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
    MEDIA_URL = '/media/'
    ```
  - Add Whitenoise to `MIDDLEWARE`:
    ```python
    MIDDLEWARE = [
        'whitenoise.middleware.WhiteNoiseMiddleware',
        # ...existing middleware...
    ]
    ```
- Update the `DATABASES` setting to use environment variables (see step 4).

---

## 2. Push Your Code to GitHub

- Commit all changes and push your project to a GitHub repository.

---

## 3. Deploy the Frontend to Azure Static Web Apps

1. Go to the [Azure Portal](https://portal.azure.com/).
2. Click "Create a resource" > "Static Web App".
3. Link your GitHub repository.
4. Set:
   - App location: `frontend`
   - Output location: `frontend/build`
5. Complete the creation. Azure will set up a GitHub Actions workflow for automatic deployment.

---

## 4. Deploy the Backend and Database to Azure App Service

### 4.1. Create Azure Web App with PostgreSQL

1. In Azure Portal, click "Create a resource" > "Web App + Database".
2. Choose:
   - Runtime stack: Python (match your Django version)
   - Database: PostgreSQL
3. Fill in the required details (resource group, app name, region, etc.).
4. Azure will provision both the Web App and the PostgreSQL database, and inject connection details as environment variables.

### 4.2. Configure Django for Azure

1. In `settings.py`, update the `DATABASES` section:
   ```python
   import os

   DATABASES = {
       'default': {
           'ENGINE': 'django.db.backends.postgresql_psycopg2',
           'NAME': os.environ.get('POSTGRESQL_DATABASE'),
           'USER': os.environ.get('POSTGRESQL_USER'),
           'PASSWORD': os.environ.get('POSTGRESQL_PASSWORD'),
           'HOST': os.environ.get('POSTGRESQL_HOST'),
           'PORT': os.environ.get('POSTGRESQL_PORT', '5432'),
       }
   }
   ```
   These environment variables are set automatically by Azure.

2. Make sure your `requirements.txt` includes:
   ```
   gunicorn
   whitenoise
   psycopg2-binary
   ```

3. Add a `startup.txt` or `startup.sh` (if needed) with:
   ```
   gunicorn testing.wsgi
   ```

### 4.3. Deploy Django Code

1. In the Azure Portal, go to your Web App.
2. Go to "Deployment Center" and link your GitHub repository.
3. Set the build and start commands if prompted:
   - Build: `pip install -r requirements.txt && python manage.py collectstatic --noinput`
   - Start: `gunicorn testing.wsgi`
4. After deployment, go to the Web App’s SSH/Console and run:
   ```
   python manage.py migrate
   python manage.py collectstatic --noinput
   ```

---

## 5. Connect Frontend to Backend

- Update your React app’s API URLs to point to your Azure Web App backend URL.

---

## 6. Test Everything

- Visit your Static Web App URL for the frontend.
- Visit your Web App URL for the backend.
- Ensure the frontend can communicate with the backend and the backend can access the database.

---

Let me know if you want code samples for any step, or if you want me to update your Django settings file for Azure PostgreSQL now!
