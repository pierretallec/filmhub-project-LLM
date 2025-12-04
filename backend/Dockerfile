FROM python:3.10-slim

WORKDIR /app

COPY requirements.txt /app/
# If requirements.txt doesn't exist yet, we can install directly or create it.
# For now, I'll assume I need to generate it or install packages directly.
# But better to copy it if it exists. 
# Since I haven't created requirements.txt, I'll install dependencies directly in this step for now, 
# or better, generate it first.
# Let's install directly for simplicity in this initial setup, or create requirements.txt first.
# actually, I'll create requirements.txt in the next step or just run pip install here.
RUN pip install --upgrade pip && pip install django djangorestframework django-cors-headers psycopg2-binary

COPY . /app/

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
