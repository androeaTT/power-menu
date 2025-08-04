#!/bin/bash

echo "Installing to ~/.local/share/power-menu"
mkdir ~/.local/share/power-menu
cp ./* ~/.local/share/power-menu

echo "Copying launcher to ~/.local/bin"
cp ./power-menu ~/.local/bin

rm ~/.local/share/power-menu/power-menu
rm ~/.local/share/power-menu/install.sh


echo "Complated! You can delete this folder"
echo "Run with 'power-menu' from terminal (use exec in hyprland.conf)"


