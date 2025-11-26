#
# Author: Maija O.
# Municipality search from finnish public registery (PRH), prints companies registery dates and
# if compyny has been removed from registery. Simply example use search from registery over http.
# 

import json
import requests

def haeKunta(kunta):
    kuntaHaku ='https://avoindata.prh.fi/bis/v1?totalResults=true&registeredOffice='+kunta+'&companyRegistrationFrom=1978-03-14'
    print('Haetaan Kunta:', kuntaHaku)
    r =requests.get(kuntaHaku)
    
    #

    if r.status_code == 200:
        print('Success!')
    elif r.status_code != 200:
        print('Not Found.')
        print (r.reason)
        return      

    content = r.json()
    #print (content)
    results = content['results']
    yritysmaara= content['totalResults']
    print (kunta,' 14.03.1978 jälkeen rekisteröity :',yritysmaara, 'yritystä')
    

    r =requests.get('https://avoindata.prh.fi/bis/v1?totalResults=false&maxResults='+str(yritysmaara)+'&resultsFrom=0&registeredOffice='+kunta+'&companyRegistrationFrom=1978-03-14')
    if r.status_code == 200:
        print('Success!')
    elif r.status_code != 200:
        print('Not Found.')
        print (r.reason)
        return      

    content = r.json()
    results = content['results']
    lopetetut = 0
    
    for result in results:
        uri= result['detailsUri']
        details=requests.get(uri)
        #print (uri)
        detailsContent = details.json()
        detailsResults = detailsContent['results']
        detailsResult = detailsResults[0]
        if 'names' in detailsResult:
            names = detailsResult['names']
            name = names[0]
            if 'endDate' in name:
                endDate = name['endDate']
                #print (name['endDate'])
                if endDate != None:
                    lopetetut = lopetetut+ 1
    
    print (kunta,' 14.03.1978 jälkeen lopetettu :',lopetetut, 'yritystä')



haeKunta('Ylitornio')
haeKunta('Merikarvia')
haeKunta('Parikkala')