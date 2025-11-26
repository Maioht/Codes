'''
Created on 5.2.2018
@author: Maija
'''
import socket
import sys
import json
from threading import Thread

TCP_IP = sys.argv[1]
TCP_PORT = int(sys.argv[2])
BUFFER_SIZE = 1024  

class ClientThread(Thread):#moniyhteys

    def __init__(self,ip,port,sock,jsonStorage):
        Thread.__init__(self)
        self.ip = ip
        self.port = port
        self.sock = sock
        self.cmd = ""
        self.key =""
        self.jsonStorage = jsonStorage
        #print "uusi yhteys "+ip+":"+str(port)

    def run(self):

        while True:
            data = self.sock.recv(BUFFER_SIZE) # odotellaan seuraavaa rivia
           # print ("received data:", data)
            if self.cmd == "":
                if data.startswith("get"): #ajetaan get proseduuri
                    self.sock.send("Anna avain")
                    self.cmd = data # komento talteen
                elif data.startswith("put"): #aloitetaan put
                    self.sock.send("anna avain-paikka")
                    self.cmd =data
                else:
                    self.sock.send("empty/huono komento")
                continue
            
            if self.cmd.startswith("get"): #ajetaan e
                self.key = data;
                try:
                    value = self.jsonStorage[self.key]
                    response = {"status": "success"}
                    response["value"] = value
                    self.sock.send(json.dumps(response))
                except KeyError:
                    response = {"status": "error", "value": "no such key"}
                    self.sock.send(json.dumps(response))
                self.key = ""
                self.cmd = ""
            elif self.cmd.startswith("put"): #jatkeaan put ja tallennetaan avain paikka ja kysellaan put json sisältö
                if self.key =="":
                    self.key =data
                    self.sock.send("anna avain paikan tiedot") #odotetaan put avainpaikan tiedot ja tallennus jatkuu kunhan saa tiedot
                    continue
                try:
                    value = json.loads(data)
                except ValueError: #arvovirheet
                    response = {"status": "error", "value": "bad json value"}
                    self.sock.send (json.dumps(response))
                    self.key = ""
                    self.cmd = ""
                    continue
                self.jsonStorage[self.key] = value
                self.sock.send(json.dumps({"status": "success"}))
                self.key = ""
                self.cmd = ""
            elif self.cmd.startswith("exit"):
                self.sock.close()
            else:
                self.cmd = ""
                self.key = ""
                self.sock.send ("invalid command")
        

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind((TCP_IP, TCP_PORT))
s.listen(5)

jsonStorage={}
#conn, addr = s.accept()

while 1:
    (conn, (ip,port)) = s.accept()
    #data = conn.recv(BUFFER_SIZE)
    newthread = ClientThread(ip,port,conn,jsonStorage)
    newthread.start()
    #if not data: break
  
conn.close()
 
def get(key):
    return jsonStorage[key]

def put(key, value):
    jsonStorage[key] = value