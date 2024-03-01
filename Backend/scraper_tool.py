import requests
from bs4 import BeautifulSoup

url = "https://catalog.msudenver.edu/preview_program.php?catoid=43&poid=10661"

response = requests.get(url)
html_content = response.text

soup = BeautifulSoup(html_content, 'html.parser')

courses = soup.find_all('li', class_='acalog-course')

for course in courses:
    course_name = course.find('a').get_text(strip=True) if course.find('a') else 'Course name not available'
    
    credits_text = course.find('strong').next_sibling if course.find('strong') else None
    credits = credits_text.strip() if credits_text else 'Credits info not available'
    
    print(f"{course_name} | Course Credits: {credits}")
