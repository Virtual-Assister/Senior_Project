from xml.dom import minidom 
import os  
  
def main():  
    root = minidom.Document() 
    
    xml = root.createElement('degree')  
    root.appendChild(xml) 
    
    courses = root.createElement('courses')
    xml.appendChild(courses) 

    # appending class information
    classes = root.createElement('class')
    classes.setAttribute('id', 'CS1030')
    courses.appendChild(classes)

    child = root.createElement('department')
    child.appendChild(root.createTextNode('CS'))
    classes.appendChild(child)

    child = root.createElement('code')
    child.appendChild(root.createTextNode('1030'))
    classes.appendChild(child)

    child = root.createElement('name')
    child.appendChild(root.createTextNode('Computer Science Principles'))
    classes.appendChild(child)

    child = root.createElement('credits')
    child.appendChild(root.createTextNode('4'))
    classes.appendChild(child)

    xml_str = root.toprettyxml(indent ="\t")
    
    save_path_file = "CS_Degree.xml"
    
    with open(save_path_file, "w") as file: 
        file.write(xml_str)
main()