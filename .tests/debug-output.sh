#!/bin/bash

echo "Debug Output Script"
echo "-----------"
echo "This script just outputs a bunch of information"
echo "about the system's build environment to the console."
echo "It will not impact the pass/fail of your build."

echo ""
echo ""

gem env

echo ""
echo $GEM_HOME
echo""

gem env gemdir

echo ""
echo "Debug output finished."
exit 0

