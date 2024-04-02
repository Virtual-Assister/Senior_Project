import os
from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from . serializer import *
from rest_framework.response import Response
from django.http import HttpResponse
from lxml import etree


def transform_xml(request):
        # Load your XML and XSL files
        xml_data = etree.parse(os.path.join(os.path.dirname(__file__), 'xml_initial.xml'))
        xsl_data = etree.parse(os.path.join(os.path.dirname(__file__), 'style_sheet.xsl'))

        # Perform the transformation
        transform = etree.XSLT(xsl_data)
        result_tree = transform(xml_data)

        # Convert the result to a string and return as HttpResponse
        transformed_html = str(result_tree)
        return HttpResponse(transformed_html, content_type='text/html')

# Create your views here.
class ReactView(APIView):

    serializer_class = ReactSerializer # Add serilizer class here like it.

    def get(self, request):
        output = [{"employee": output.employee,
                   "department": output.department}
                   for output in React.objects.all()]
        return Response(output)
    
    def post(self, request):
        serializer = ReactSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
    
    
    