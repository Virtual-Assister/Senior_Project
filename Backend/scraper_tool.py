import requests
from bs4 import BeautifulSoup

def fetch_courses_info(url, file_path):
    # Retrieve the HTML content of the website and store it into a response object
    response = requests.get(url)
    html_content = response.text

    # Set up the BeautifulSoup object to parse
    soup = BeautifulSoup(html_content, 'html.parser')
    courses = soup.find_all('li', class_='acalog-course')

    # Initialize an empty list
    courses_html = []

    # Loop through the course list, find the <a> tag, and grab the text from it
    for course in courses:
        course_name = course.find('a').get_text(strip=True) if course.find('a') else 'Course name not available'
        credits_text = course.find('strong').next_sibling if course.find('strong') else None
        credits = credits_text.strip() if credits_text else 'Credits info not available'

        # make HTML for each course
        courses_html.append(f'<li>{course_name} | Course Credits: {credits}</li>')

    # Build the final HTML document
    html_doc = f'<html><head><title>Courses Info</title></head><body><ul>{" ".join(courses_html)}</ul></body></html>'

    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(html_doc)
    print(f"HTML document saved to {file_path}")

# example
url = "https://catalog.msudenver.edu/preview_program.php?catoid=43&poid=10661"
file_path = "/Users/philliplavergne/Desktop/courses_info.html"
fetch_courses_info(url, file_path)
