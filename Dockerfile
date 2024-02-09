FROM httpd                                 
COPY index.html /usr/local/apache2/htdocs/
COPY Q1.html /usr/local/apache2/htdocs/
COPY Q2.html /usr/local/apache2/htdocs/
COPY Q3.html /usr/local/apache2/htdocs/
COPY Q4.html /usr/local/apache2/htdocs/
COPY Q5.html /usr/local/apache2/htdocs/
COPY script.js /usr/local/apache2/htdocs/