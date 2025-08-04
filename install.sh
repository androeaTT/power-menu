#!/bin/bash

echo "Installing to ~/.local/share/power-menu"
mkdir ~/.local/share/power-menu
cp ./* ~/.local/share/power-menu

echo "Copying launcher to ~/.local/bin"
cp ./power-menu ~/.local/bin

echo "Complated!"


