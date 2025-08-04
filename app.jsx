#!/usr/bin/env -S ags run

import app from "ags/gtk4/app"
import { Gtk, Astal } from "ags/gtk4"
import GLib from "gi://GLib"
import Gdk from "gi://Gdk"
import Gio from "gi://Gio"


function Button( label, icon, onPressExec, isCancel ) {
  const subprocess = new Gio.Subprocess({
    argv: onPressExec, 
    flags: Gio.SubprocessFlags.STDOUT_PIPE | Gio.SubprocessFlags.STDERR_PIPE
  })
  return (
    <button 
      halign={Gtk.Align.FILL}
      valign={Gtk.Align.CENTER} 
      class="button"
      onClicked={ (self) => { 
        if ( isCancel ) {
          app.quit() 
        } else { 
          subprocess.init(null) 
        } 
      }
      }
    >
      <centerbox orientation={Gtk.Orientation.VERTICAL} >
        <box 
          $type="center"
          orientation={Gtk.Orientation.VERTICAL}
          halign={Gtk.Align.FILL}
          hexpand={true}
        >
          <label $type="center" class="buttonIcon" label={icon} />
          <label $type="end" class="buttonLabel" label={label} />
        </box>
      </centerbox>
    </button>
  )
}

GLib.set_prgname("power-menu");

app.apply_css("./style.css")
app.start({
  instanceName: "power-menu",
  main() {
    return (
      <window keymode={Astal.Keymode.ON_DEMAND} class="window" visible>
        <Gtk.EventControllerKey
          onKeyPressed={( {} , keyval) => {
            if (keyval === Gdk.KEY_Escape) {
              app.quit()
            }
          }}
        />
        <box class="buttonsBox" >
          { Button( "Power off", "󰐥", ["/sbin/shutdown", "-h", "now"], false ) }
          { Button( "Restart", "", ["/sbin/shutdown", "-r", "now"], false ) }
          { Button( "Log-out", "󰈆", ["loginctl", "terminate-session", "self"], false ) }
          { Button( "Cancel", "󰅖", ['notify-send', '"what are you doing?"'], true ) }
        </box>
      </window>
    )
  }
})
