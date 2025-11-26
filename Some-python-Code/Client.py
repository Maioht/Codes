'''
Created on 5.2.2018
@author: Maija
'''
import socket
import json
    
TCP_IP = '127.0.0.1'
TCP_PORT = 5005
BUFFER_SIZE = 1024
#ESSAGE = "Hello, World!"
   
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect((TCP_IP, TCP_PORT))

while True:
    cmd = raw_input("get/put/exit\n")
    s.send(cmd)
    data = s.recv(BUFFER_SIZE)
    print ("received data: ", data)
    if cmd == "exit":
        s.close()
        break
   
