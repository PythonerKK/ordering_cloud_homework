#!/bin/bash
#celery multi start w1 -A celery_tasks.tasks worker -l info&&
python manage.py collectstatic --noinput
#python manage.py makemigrations&&
#python manage.py migrate&&
#python manage.py createsuperuser&&
#gunicorn config.wsgi:application -c gunicorn.conf
uwsgi --ini ./uwsgi.ini
