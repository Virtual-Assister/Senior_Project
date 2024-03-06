import requests
from bs4 import BeautifulSoup

url = "https://catalog.msudenver.edu/preview_program.php?catoid=43&poid=10661"

# retrieving the html website content and storing it into a response obj
response = requests.get(url)

# taking the text out of the response obj and 
html_content = response.text

# setting up the beautiful soup obj to parse through using their methods
soup = BeautifulSoup(html_content, 'html.parser')

# using the beautiful soup method find_all to select out of the html text all elements in a list
# with the id 'acalog-course'
courses = soup.find_all('li', class_='acalog-course')

# looping through the courses list finding the <a> tag and grabbing the text from it and storing it
# in the proper variables and printing to screen.
for course in courses:
    course_name = course.find('a').get_text(strip=True) if course.find('a') else 'Course name not available'
    
    credits_text = course.find('strong').next_sibling if course.find('strong') else None
    credits = credits_text.strip() if credits_text else 'Credits info not available'
    
    print(f"{course_name} | Course Credits: {credits}")
