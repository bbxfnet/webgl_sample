'''
Created on 2012-3-21

@author: xfliu
'''
import urllib.request
import os


            
def urlcallback(blockcount, blocksize, size):
    prec = 100.0 * blockcount * blocksize / size
    if 100 < prec: 
        prec = 100
        print("##### %.2f%%" % (prec,))
    
def getWarFile(url, warFileName):
    try:
        urllib.request.urlretrieve(url, warFileName, urlcallback)
        return True
    except ValueError:
        print("##### get war file failed for " + url)
        os.remove(warFileName)
        return False       

if __name__ == '__main__':
    languageList = ('fiShbRaiN - betelguese',
        'Rovastar - Starquake',
        'fiShbRaiN - inside the flux capacitor',
        'Unchained - God of the Game',
        'Krash - Hyperspace',
        'John Scoville - Inside Outside',
        'John Scoville - Retina (Beat Mix)',
        'John Scoville - Matrix Nautilus',
        'Illusion - Growing Diamond',
        'Geiss - Oldskool',
        'Geiss - Eggs',
        'Zylot - Psyonist (New Eyes Mix)',
        'Unchained - God Of The Game (Remix)',
        'Unchained - Painful Plasma',
        'Unchained - Jaundice',
        'Unchained - Morat''s Final Voyage',
        'Unchained - Unified Drag 2',
        'Unchained - Unclaimed Wreckage 2 (Shamanic)',
        'Unchained & Rovastar - Xen Traffic',
        'Unchained - Making a Science of It 4',
        'Unchained - Goofy Beat Detection',
        'Telek EMPR - Scanner - Trust me, I''ve got a Melways',
        'Zylot - Spiral (Hypnotic)',
        'Rovastar - Explosive Minds',
        'Geiss - De La Moutard 1',
        'Unchained - Ribald Ballad',
        'Unchained - Goo Kung Fu',
        'Aderrasi - Pyrokinesis',
        'Geiss - Corpus Callosum')
    
    for k in range(0,len(languageList)):
        language = languageList[k]
        mydir = "D:/apache-tomcat-7.0.2/webapps/webgl/Test/music/presets/"
        if not os.path.exists("path"):
            os.makedirs(mydir,exist_ok=True)
        for i in range(1, 2):
            url = ""
            path = ""
            url = "http://www.nihilogic.dk/labs/juicydrop/presets/"+language+".milk"
            path = mydir+language+".milk"
            if os.path.exists(path):
                continue
            
            print(url)
            print(path)
            getWarFile(url, path)
        
    
    pass
