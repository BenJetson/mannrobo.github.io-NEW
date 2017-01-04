#!/bin/bash

function printBlank() {

    echo " "
    
}

echo "Debug Output Script"
echo "-----------"
echo "This script just outputs a bunch of information"
echo "about the system's build environment to the console."
echo "It will not impact the pass/fail of your build."

printBlank

gem env

printBlank
echo "gem home"
echo $GEM_HOME
printBlank

echo "homedir"
echo $HOME
printBlank

echo "whoami"
whoami
printBlank

echo "ls home"
ls ~
printBlank

echo "gem env gemdir"
gem env gemdir
printBlank

echo "gem which jekyll"
gem which jekyll
printBlank

printBlank; printBlank; printBlank
echo "Debug output finished."
exit 0

